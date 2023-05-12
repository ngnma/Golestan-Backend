const User = require('../models/user.model')

// Get All Users
exports.getAll = async(req,res)=>{
    try{
        const admins = await User.find({});
        res.status(200).json(admins);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};
// Create new Admin
exports.create = async(req,res)=>{
    try{
        const admin = await User.create(req.body);
        res.status(200).json(admin);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};
// Login
exports.login = async(req,res)=>{
    try{
        const user = await User.findOne({ 'user_id': req.body.user_id ,'password':req.body.password});
        if(user == null){
            res.status(404).json({message:"Not Found"})
        }else{
            res.status(200).json(user);
        }
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};