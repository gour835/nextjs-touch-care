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

export async function getService(title: string) {
    try {
        const services = await ServicesModel.findOne({title}).lean();
        // console.log(services);
        if(!services){
            return {success: false}
        }
        return {success: true, data: JSON.parse(JSON.stringify(services))}
    } catch (error) {
        console.log('error fetching resource', error);
    }
}
export async function getServiceTitles() {
    try {
        const services = await ServicesModel.find().select('title').lean();
        // console.log(services);
        if(!services){
            return {success: false}
        }
        return {success: true, data: JSON.parse(JSON.stringify(services))}
    } catch (error) {
        console.log('error fetching resource', error);
    }
}