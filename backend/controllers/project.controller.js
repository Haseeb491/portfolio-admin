import Project from "../models/project.model.js";
import User from "../models/user.model.js";
import { v2 as cloudinary } from "cloudinary";

export const createProject = async(req,res) =>{
    try {
        const {title,description} = req.body;
        let {img} = req.body;
        const userId = req.user._id.toString();

        const user = await User.findById(userId);

        if(!user) return res.status(400).json({error: 'User not found'});

        if(!title || !description) return res.status(400).json({error : 'Both title and description is required'});

        if(img) {
            const uploadedResponse = await cloudinary.uploader.upload(img);
            img = uploadedResponse.secure_url;
        }

        const newProject = new Project({
            user : userId,
            title,
            description,
            img,
        });

        await newProject.save();

        res.status(200).json(newProject);

    } catch (error) {
        console.log("Error in createProject controller", error.message);
        res.status(500).json({error : 'Internal server error'});
    }
}

export const updateProject = async(req,res) =>{
    try {
        
    } catch (error) {
        
    }
}

export const deleteProject = async(req,res) =>{
    try {
        
    } catch (error) {
        
    }
}

export const getAllProjects = async(req,res) =>{
    try {
        
    } catch (error) {
        
    }
}