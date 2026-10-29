'use server';
import { ServicesModel } from "@/models/services";
import { FormState, ScheduleFormSchema } from "../lib/definitions";
import User from "@/models/users";
import { ScheduleModel } from "@/models/schedule";

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
        const user = await User.findOne({email: userEmail});
        if (!user) {
            return {
                errors: { userId: ['Invalid User'] }
            };
        }
    
        await ScheduleModel.create({
            date, time, userId: user._id, serviceId
        })

        return {
            success: true,
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