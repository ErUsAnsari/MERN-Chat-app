import mongoose from 'mongoose'

export const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    text: {
        type: string
    },
    image: {
        type: string
    },
    seen: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Message = mongoose.model("Message", messageSchema);

export default Message