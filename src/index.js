import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./DB/Dbconnection.js";
dotenv.config();


const mongo_uri = 'mongodb+srv://mradhruv460:quiz_dhruv@cluster0.8iwgdu0.mongodb.net/gemini_project'
connectDB()
    .then(() => {
      app.listen(process.env.PORT ||1250,()=>{
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
      })
    })
    .catch((e) => {
        console.error(`Connection failed in main index ${e}`);
    })

// app.listen(process.env.PORT||2401,()=>{
// console.log(`⚙️ Server is running at ${process.env.PORT} `);
// })

