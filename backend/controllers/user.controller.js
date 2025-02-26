import { userModel } from "../models/userModel.js";

export const allUser = async (req, res) => {
    try {
        const users = await userModel.find();
        res.send(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};

