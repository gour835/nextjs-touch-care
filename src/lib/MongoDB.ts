import mongoose from "mongoose";

export default function Mongoose() {
    mongoose.connection.on('conneted', () => {
        console.log('DB Conneted');
    })
    mongoose.connect(`${process.env.DATABASE_URL}/touchcare`)
}

