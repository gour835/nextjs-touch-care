import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    image:{
        type: String,
        required: false
        
    },
    type:{
        type: String,
        enum: ['admin', 'client'],
        default: 'client'
    }
}, {timestamps: true});

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;