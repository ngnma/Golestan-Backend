var jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const User = require('../models/user.model')

verifyToken = (req,res,next)=>{
    let token = req.headers['mytoken'];

    if(!token){
        return res.status(403).send({message:"No token provided!"});
    }

    jwt.verify(token,config.secret,(err,decoded)=>{
        if(err){
            return res.status(401).send({message:"Invalid token"});
        }
        req.userId = decoded.id;
        req.userRole = decoded.role;
        req.paramId = req.params.id;
        req.userObj = decoded;
        next()
    });
}

// Auth for being Manager
isManager = (req,res,next)=>{
    try{
        if(req.userRole == "manager"){
            next();
            return;
        }
        res.status(403).send({message:"Required Manager role."});       
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

// Auth for being Admin
isAdmin = (req,res,next)=>{
    try{
        if(req.userRole == "admin"){
            next();
            return;
        }
        res.status(403).send({message:"Required Admin role."});       
    }catch(error){
        res.status(500).json({message:error.message});
    }
};
// Verify User ID for Updating info
IDVerify = (req,res,next)=>{
    try{
        if(req.paramId == req.userId){
            next();
            return;
        }
        res.status(403).send({message:`Access denied(you are not the user with id ${req.paramId}`}); 
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

// Filter courses by faculty
// filter = (req,res,next)=>{
//     try{
//         if(req.paramId == req.userId){
//             next();
//             return;
//         }
//         res.status(403).send({message:`Access denied(you are not the user with id ${req.paramId}`}); 
//     }catch(error){
//         res.status(500).json({message:error.message});
//     }
// }
const authJwt = {
    verifyToken,
    isManager,
    isAdmin,
    IDVerify,
    
};
module.exports = authJwt;