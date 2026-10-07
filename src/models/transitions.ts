import mongoose from "mongoose";

const transitionsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    before:{
        type: String,
        required: true
    },
    after: {
        type: String,
        required: true
    }
}, {timestamps: true});

const TransitionModel = mongoose.models.transitions || mongoose.model('transitions', transitionsSchema);

export default TransitionModel;