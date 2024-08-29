import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import connectMongoDB from './db/connectMongoDB.js';
import authRoute from './routes/auth.route.js';
import projectRoute from './routes/project.route.js';
import blogRoute from './routes/blog.route.js';
import testimonialRoute from './routes/testimonial.route.js';
import User from './models/user.model.js';

dotenv.config();
 
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json({limit : "6mb"})); // parse req.body (data of user coming from frontend)
app.use(express.urlencoded({extended : true})); // to parse form data
app.use(cookieParser());

const username = 'haseeb'
const password = '123456'

mongoose.connection.once('open', async ()=> {
    try {
        const user = await User.findOne({username: username});
        if (!user) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            await new User({username : username, password : password}).save();
            console.log('User created');
        } else {
            console.log('user already exists')
        }
    } catch (error) {
        console.error('error creating user:',error.message);
    }
})



app.use('/api/auth', authRoute);
app.use('/api/projects', projectRoute);
app.use('/api/blogs',blogRoute);
app.use('/api/testimonials', testimonialRoute);


app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`);
    connectMongoDB();    
});