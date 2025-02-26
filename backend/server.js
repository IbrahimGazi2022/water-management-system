import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './DB/connectDB.js';
import userRouter from './routes/user.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.get('/', (req, res) => {
    res.json({ message: "Backend is Running!" });
});

app.listen(PORT, () => {
    connectDB().catch((err) => {
        console.error('Database connection failed:', err);
        process.exit(1);
    });
    console.log(`Server running on http://localhost:${PORT}`);
});




