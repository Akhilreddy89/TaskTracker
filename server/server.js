import express from 'express';
import cors from 'cors';
import connectDB from "./config/db.js";
import dotenv from "dotenv";


import taskRouter from './routes/taskRouter.js';
import authRouter from './routes/authRouter.js';

const app=express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN,
  credentials: true
}));

app.use("/api/tasks", taskRouter);
app.use("/api",authRouter);

app.get("/", (req, res) => {
    res.send("Server is working");
});


connectDB();
app.listen(5000,()=>{
    console.log("server is running at http://localhost:5000");
})