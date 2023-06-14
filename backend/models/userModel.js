const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true, },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
        type: String,
        required: true,
        default:
            "https://www.pngarts.com/files/10/Default-Profile-Picture-Transparent-Image.png"
    },
},
    {timestamps: true }
);

const User = mongoose.model("User", userSchema);

model.exports = User;