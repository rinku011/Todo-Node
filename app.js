import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middlewares/error.js";
import cors from "cors";


export const app = express();

config({
  path : "./data/config.env",
});



// middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: ['https://todo-client-beh9.onrender.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true,
}));

//using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);



app.get("/", (req,res)=>{
  res.send("nice working");
})



app.use(ErrorMiddleware);





