import  mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    },
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    img : {
        type : String,
    }
},{timeStamps : true});

const Project = mongoose.model('Project', projectSchema);

export default Project;