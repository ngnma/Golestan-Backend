const User = require('../models/user.model')
var jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

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
            //res.status(200).json(user)
            let token = jwt.sign({id:user.id},config.secret,{expiresIn:86400});
            res.status(200).send({'user_id':user.user_id,'name':user.l_name,'role':user.role,'id':user.id,'token':token});
        }
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};