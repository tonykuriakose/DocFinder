import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"


const app = express()
const port = process.env.PORT || 4000
connectDB()


app.use(express.json())
app.use(cors())
connectCloudinary();

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))