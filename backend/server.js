import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// app configuration
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json())
app.use(cors())

// db connection

connectDb();

// api endpoints

app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("API working")
})


app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})
// mongodb+srv://vipinpathak018:afxqzjGLsMaXbNW0@cluster0.q6k7w.mongodb.net/