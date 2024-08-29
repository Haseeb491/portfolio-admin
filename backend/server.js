import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import bcrypt from 'bcryptjs';

import connectMongoDB from './db/connectMongoDB.js';
import authRoute from './routes/auth.route.js';
import projectRoute from './routes/project.route.js';
import blogRoute from './routes/blog.route.js';
import testimonialRoute from './routes/testimonial.route.js';

dotenv.config(); 
  
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json({limit : "6mb"})); // parse req.body (data of user coming from frontend)
app.use(express.urlencoded({extended : true})); // to parse form data
app.use(cookieParser());//parse the cookies


app.use('/api/auth', authRoute);
app.use('/api/projects', projectRoute);
app.use('/api/blogs',blogRoute);
app.use('/api/testimonials', testimonialRoute);


app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`);
    connectMongoDB();    
});