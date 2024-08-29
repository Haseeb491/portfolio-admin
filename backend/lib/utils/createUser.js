import User from "../../models/user.model";
import bcrypt from 'bcryptjs';


export const createNewUser = (username,password)=>{
    mongoose.connection.once('open', async ()=> {
        try {
            const user = await User.findOne({username: username});
            if (!user) {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);
                await new  User({username, password : hashedPassword}).save();
                console.log('User created'); 
            } else { 
                console.log('user already exists')    
            } 
        } catch (error) {
            console.error('error creating user:',error.message);
        }
    })
    
}