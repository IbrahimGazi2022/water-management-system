import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    transactions: [
        {
            date: String,
            quantity: Number,
            price: Number,
            due: Number,
        }
    ]
});

export const userModel = mongoose.model('user', userSchema);
