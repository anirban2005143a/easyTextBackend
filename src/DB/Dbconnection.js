import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        console.log("aagyae");
        const connect = await mongoose.connect('mongodb+srv://mradhruv460:quiz_dhruv@cluster0.8iwgdu0.mongodb.net/gemini_project');
        console.log("aagye")
        console.log(`Connection Successful: ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
