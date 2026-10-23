import mongoose from "mongoose";

const servicesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    sub: {
        type: Array,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    }
}, {timestamps: true});

export const ServicesModel = mongoose.models.services || mongoose.model('services', servicesSchema);