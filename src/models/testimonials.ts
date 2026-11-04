import mongoose from "mongoose";

const testimonialsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    social: {
        instagram: {type: String, default: null},
        facebook: {type: String, default: null},
        youtube: {type: String, default: null},
    }
}, {timestamps: true});

export const TestimonialsModel = mongoose.models.testimony || mongoose.model('testimony', testimonialsSchema);