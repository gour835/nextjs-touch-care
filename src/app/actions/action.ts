'use server';
import { ServicesModel } from "@/models/services";
import { FormState, ScheduleFormSchema } from "../lib/definitions";
import User from "@/models/users";
import { ScheduleModel } from "@/models/schedule";
import { OrderModel } from "@/models/order";

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

export async function saveSchedule(state: FormState, formData: FormData) {
    try {
        const rawDate = formData.get('date');
        const rawTime = formData.get('time');
        const rawUserEmail = formData.get('userEmail');
        const rawServiceId = formData.get('serviceId');


        const dateStr = typeof rawDate === 'string' ? rawDate : '';
        const timeStr = typeof rawTime === 'string' ? rawTime : '';
        const userEmailStr = typeof rawUserEmail === 'string' ? rawUserEmail : '';
        const serviceIdStr = typeof rawServiceId === 'string' ? rawServiceId : '';


        // 1. Validate form fields
        const validatedFields = ScheduleFormSchema.safeParse({
            date: dateStr,
            time: timeStr,
            userEmail: userEmailStr,
            serviceId: serviceIdStr
        });

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors
            };
        }

        const { date, time, userEmail, serviceId } = validatedFields.data

        const service = await ServicesModel.findById(serviceId);
        if (!service) {
            return {
                errors: { serviceId: ['Invalid Service'] }
            };
        }
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return {
                errors: { userEmail: ['Invalid User'] }
            };
        }

        const schedule = await ScheduleModel.create({
            date, time, userId: user._id, serviceId
        })

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
        const schedules = await ScheduleModel.aggregate([
            // ❌ Removed the $match stage so it fetches everything
            {
                $lookup: {
                    from: 'orders',           // Name of the orders collection in MongoDB
                    localField: '_id',        // Schedule _id
                    foreignField: 'scheduleId',// Order's scheduleId field
                    as: 'orderDetails'        // Output array field name
                }
            },
            {
                $unwind: { 
                    path: '$orderDetails', 
                    preserveNullAndEmptyArrays: true // Keeps schedules even if an order hasn't been created yet
                }
            },
            {
                $lookup: {
                    from: 'services',         // Name of services collection in MongoDB
                    localField: 'serviceId',  // Schedule's serviceId field (ObjectId)
                    foreignField: '_id',      // Service model's _id
                    as: 'serviceId'           // Overwrites serviceId array with the populated service document
                }
            },
            {
                $unwind: { 
                    path: '$serviceId',       // Converts serviceId from an array into a single object
                    preserveNullAndEmptyArrays: true // Keeps schedule safe if service is missing
                }
            }
        ]);

        console.log('server', schedules); // This will now return an array of ALL schedules with their orders
        return {success: true, schedules}
    } catch (error) {

    }
}