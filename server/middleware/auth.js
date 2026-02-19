import User from "../models/User.js";
import jwt from 'jsonwebtoken'


// Middleware to protect routes
export const ptotectRoute = async (req, res, next) => {
    try {
        const token = req.headers.token;

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(decodedToken.userId).select('-password')

        if (!user) {
            return res.json({ success: false, message: "User Not found" })
        }

        req.user = user;
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}