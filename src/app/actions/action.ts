'use server';
import { ServicesModel } from "@/models/services";

export async function getAllServices() {
    try {
        const services = await ServicesModel.find({}).lean();
        return {success: true, data: JSON.parse(JSON.stringify(services))}
    } catch (error) {
        console.log('error fetching resource', error);
    }
}