import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import hotelsRoute from './routes/hotel.js'
import roomsRoute from './routes/rooms.js'
import usersRoute from './routes/users.js'
//import cookieParser from "cookie-parser";

const app = express()
dotenv.config()

const connect = async ()=>{
try {
  mongoose.connect(process.env.MONGO);
  console.log("connect to MongoDB")
} catch (error) {
  throw error;
}
};

//midlewares

app.use(express.json());
//app.use(cookieParser());

app.use("/auth",authRoute);
app.use("/hotel",hotelsRoute);
app.use("/rooms",roomsRoute);
app.use("/users",usersRoute);

app.listen(5600,()=>{
connect()
console.log("connected to backend");
})