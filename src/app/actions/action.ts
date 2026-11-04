'use server';
import { ServicesModel } from "@/models/services";
import { FormState, ScheduleFormSchema, transformationFormSchema } from "../lib/definitions";
import User from "@/models/users";
import { ScheduleModel } from "@/models/schedule";
import { PipelineStage } from "mongoose";
import { Schedule } from "@/components/billing";
import { TransformationModel } from "@/models/transformation";


export async function getUserMobile(email: string) {
    try {
        const user = await User.findOne({ email }).select('mobile').lean();
        if (!user.mobile) {
            console.log(user);
            return { success: false }
        }
        return { success: true, mobile: user.mobile };
    } catch (error) {
        console.log('error fetching resource', error);
    }
}
export async function getAllServices() {
    try {
        const services = await ServicesModel.find({}).lean();
        return { success: true, data: JSON.parse(JSON.stringify(services)) }
    } catch (error) {
        console.log('error fetching resource', error);
    }
}

export async function getService(title: string) {
    try {
        const services = await ServicesModel.findOne({ title }).lean();
        // console.log(services);
        if (!services) {
            return { success: false }
        }
        return { success: true, data: JSON.parse(JSON.stringify(services)) }
    } catch (error) {
        console.log('error fetching resource', error);
    }
}
export async function getServiceTitles() {
    try {
        const services = await ServicesModel.find().select('title').lean();
        // console.log(services);
        if (!services) {
            return { success: false }
        }
        return { success: true, data: JSON.parse(JSON.stringify(services)) }
    } catch (error) {
        console.log('error fetching resource', error);
    }
}

export async function saveSchedule(state: FormState, formData: FormData): Promise<FormState> {
    try {
        const rawDate = formData.get('date');
        const rawTime = formData.get('time');
        const rawMobile = formData.get('mobile');
        const rawUserEmail = formData.get('userEmail');
        const rawServiceId = formData.get('serviceId');

        const dateStr = typeof rawDate === 'string' ? rawDate : '';
        const timeStr = typeof rawTime === 'string' ? rawTime : '';
        const mobileStr = typeof rawMobile === 'string' ? rawMobile : '';
        const userEmailStr = typeof rawUserEmail === 'string' ? rawUserEmail : '';
        const serviceIdStr = typeof rawServiceId === 'string' ? rawServiceId : '';

        // 1. Validate form fields
        const validatedFields = ScheduleFormSchema.safeParse({
            date: dateStr,
            time: timeStr,
            mobile: mobileStr,
            userEmail: userEmailStr,
            serviceId: serviceIdStr
        });

        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.flatten().fieldErrors
            };
        }

        const {
            date,
            time,
            mobile,
            userEmail,
            serviceId
        } = validatedFields.data;

        const service = await ServicesModel.findById(serviceId);
        if (!service) {
            return {
                success: false,
                errors: { serviceId: ['Invalid Service'] }
            };
        }

        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return {
                success: false,
                errors: { userEmail: ['Invalid User'] }
            };
        }
        if (!user.mobile || user.mobile == '') {
            user.mobile = mobile;
            await user.save()
        }


        const schedule = await ScheduleModel.create({
            date, time, userId: user._id, serviceId
        });

        return {
            success: true,
            scheduleId: schedule._id.toString(),
            message: 'Schedule created successfully!'
        };
    } catch (error) {
        console.log('something went wrong', error);
        return {
            success: false,
            errors: { _form: ['An unexpected error occurred. Please try again.'] }
        };
    }
}

export async function getSchedulesWithOrderDetails(email: string) {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return {
                errors: { userEmail: ['Invalid User'] }
            };
        }

        // Use PipelineStage[] instead of any[] for type safety
        const pipeline: PipelineStage[] = [];

        // If the user is NOT an admin, restrict records to their own userId
        if (user.type !== 'admin') {
            pipeline.push({
                $match: { userId: user._id }
            });
        }

        // Push remaining aggregation stages safely
        pipeline.push(
            {
                $lookup: {
                    from: 'orders',
                    localField: '_id',
                    foreignField: 'scheduleId',
                    as: 'orderDetails'
                }
            },
            {
                $unwind: {
                    path: '$orderDetails',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'services',
                    localField: 'serviceId',
                    foreignField: '_id',
                    as: 'serviceId'
                }
            },
            {
                $unwind: {
                    path: '$serviceId',
                    preserveNullAndEmptyArrays: true
                }
            }
        );

        // You can also type the result array using your Schedule interface
        const schedules = await ScheduleModel.aggregate<Schedule>(pipeline);

        console.log('server', schedules);
        return { success: true, schedules };
    }
    catch (error) {
        console.error('Error fetching schedules:', error);
        return { success: false, error: error };
    }
}

export async function saveTransitions(beforeUrl: string, afterUrl: string, name: string) {
    try {
        const transition = await TransformationModel.create({ name, before: beforeUrl, after: afterUrl });

        return { success: true, transition };
    } catch (error) {
        console.log('error saving transitions: ', error)
        return { success: false, error };
    }
}

export async function getAllTransitions(page: number = 1) {
    try {
        const limit = 3
        const skip = (page - 1) * limit;

        const [Transformation, totalDocuments] = await Promise.all([
            TransformationModel.find({})
                .sort({ createdAt: -1 }) // Sort newest first
                .skip(skip)
                .limit(limit)
                .lean(), 
            TransformationModel.countDocuments({})
        ]);

        // 5. Calculate total pages for UI controls
        const totalPages = Math.ceil(totalDocuments / limit);
        const transitions = await TransformationModel.find({}).lean();
        return { success: true, transitions: JSON.parse(JSON.stringify(Transformation)), totalPages};
    } catch (error) {
        console.log('something went wrong: ', error)
        return { success: false, error };
    }
}