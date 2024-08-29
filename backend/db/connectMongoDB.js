import mongoose from "mongoose";

const connectMongoDB = async () =>{
    try {
        const url = process.env.MONGO_URL;
        console.log(url)
        // const conn = await mongoose.connect(process.env.MONGO_URL);
        // console.log(`MongoDB connected : ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error connecting to mongoDB : ${error.message}`);
        process.exit(1);
    }
}

export default connectMongoDB;