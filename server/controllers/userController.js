import { generateToken } from "../lib/utils";
import User from "../models/User";
import bcrypt from 'bcryptjs'


// Controller for Signup a new user
export const signup = async (req, res) => {
    const { fullName, email, password, bio } = req.body;

    try {
        // checking any details missing or not
        if (!fullName || !email || !password || !bio) {
            return res.json({ success: false, message: "Missing Details" })
        }

        // Checking if user already exists
        const user = await User.findOne({ email })
        if (user) {
            return res.json({ success: false, message: "User Already Exists" })
        }

        // Generating hashed password
        const salt = await bcrypt.genSalt(12)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Creating new user
        const newUser = await User.create({
            fullName, email, password: hashedPassword, bio
        })

        // generating token for authentication
        const token = generateToken(newUser._id);

        res.json({
            success: true,
            userData: newUser,
            token,
            message: "Account Created Successfully"
        })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}


// Controller for login a user
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // finding the user
        const userData = await User.findOne({ email })

        // checking if user exists
        if (!userData) {
            return res.json({ success: false, message: "User Not found" })
        }

        // checking password is correct or not
        const isPasswordCorrect = await bcrypt.compare(password, userData.password)
        if (!isPasswordCorrect) {
            return res.json({ success: false, message: "Invalid Credentials" })
        }

        // generating token for user login
        const token = generateToken(userData._id);

        res.json({
            success: true,
            userData,
            token,
            message: "Login Successfull"
        })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}