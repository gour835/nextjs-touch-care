import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'services',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    approved:{
        type: Boolean,
        default: false
    },
    paymentDone:{
        type: Boolean,
        default: false
    }
}, {timestamps: true});

export const ScheduleModel = mongoose.models.schedule || mongoose.model('schedule', scheduleSchema) 