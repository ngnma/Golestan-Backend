const Manager = require('../models/manager.model')

// Get All Managers
exports.getAll = async(req,res)=>{
    try{
        const managers = await Manager.find({});
        res.status(200).json(managers);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};
// Create new Manager
exports.create = async(req,res)=>{
    try{
        const manager = await Manager.create(req.body);
        res.status(200).json(manager);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};
// Get Manager by ID as param
exports.getById = async(req,res)=>{
    try{
        const {id} = req.params;
        const manager = await Manager.findById(id);
        res.status(200).json(manager)
    }catch(error){
        res.status(500).json({message:error.message});
    }
};
// Delete Manager by ID
exports.deleteById = async(req,res)=>{
    try{
        const {id} = req.params;
        const manager = await Manager.findByIdAndDelete(id,req.body);
        if(!manager){
            res.status(404).json({message:`manager with id ${id} not found in DB.`})
        }
        res.status(200).json(manager)
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

// Update manager information by id
exports.updateById = async(req,res)=>{
    try{
        const {id} = req.params;
        const manager = await Manager.findByIdAndUpdate(id,req.body);
        if(!manager){
            res.status(404).json({message:`manager with id ${id} not found in DB.`})
        }
        res.status(200).json(manager)
        console.log(req.body)
    }catch(error){
        res.status(500).json({message:error.message});
    }
};