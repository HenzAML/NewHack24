import User from "../models/userModel.js";

export const getOwnerDashboard = async (req, res) => {
    try {
        // Using req.user.id which is the MongoDB _id
        const owner = await User.findById(req.user.id);
        if (!owner) {
            return res.status(404).json({ error: "Owner not found" });
        }

        // Send owner data to the frontend
        res.status(200).json({ message: "Owner dashboard data", owner });
    } catch (error) {
        res.status(500).json({ error: "Error fetching owner dashboard data" });
    }
};
