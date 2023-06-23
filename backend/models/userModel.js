const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true, },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    pic: {
        type: String,
        
        default:
            "https://www.pngarts.com/files/10/Default-Profile-Picture-Transparent-Image.png"
    },
},
    {timestamps: true }
);

const User = mongoose.model("User", userSchema);

