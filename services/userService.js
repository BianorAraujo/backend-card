var user = require("../models/User.js");
var mongoose = require("mongoose");

const User = mongoose.model("User", user)

class UserService {

    async GetAll(){
        return await User.find();
    }

    async Create(email, password){
        var newUser = new User({
            email,
            password
        });
        
        try{
            await newUser.save();
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }
    
    async GetByEmail(email){
        try {
            var event = await User.findOne({'email': email})
            return event
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new UserService();