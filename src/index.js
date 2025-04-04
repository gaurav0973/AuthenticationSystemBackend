import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import connectDB from "./db/index.js"
dotenv.config({
    path : "../.env"
})

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: "GET, POST, PUT, DELETE",
}))



app.get('/', (req, res) => {
    res.send('Hello World!')
})


connectDB()

app.listen(port, ()=>{console.log("Server is running At ", port)})