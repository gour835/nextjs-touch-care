import mongoose from "mongoose";

const transformationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    before: {
        type: String,
        required: true
    },
    after: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const TransformationModel = mongoose.models.transformation || mongoose.model('transformation', transformationSchema);