const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { chats } = require("./data/data");
const colors = require("colors");
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();  
connectDB()
const app = express();  

app.use(express.json()); //to accecptjson

app.get("/",(req, res) => {
    res.send("Api is running");
});

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);



const PORT = process.env.PORT;
app.listen(5000, console.log(`Server started on PORT ${PORT}`.blue.bold ));