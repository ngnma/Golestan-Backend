const Professor = require('../models/professor.model')

// Get All Professors
exports.getAll = async(req,res)=>{
    try{
        const professors = await Professor.find({});
        res.status(200).json(professors);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};
// Create new Professor
exports.create = async(req,res)=>{
    try{
        const professor = await Professor.create(req.body);
        res.status(200).json(professor);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};
// Get Professor by ID as param
exports.getById = async(req,res)=>{
    try{
        const {id} = req.params;
        const professor = await Professor.findById(id);
        res.status(200).json(professor)
    }catch(error){
        res.status(500).json({message:error.message});
    }
};
// Delete Professor by ID
exports.deleteById = async(req,res)=>{
    try{
        const {id} = req.params;
        const professor = await Professor.findByIdAndDelete(id,req.body);
        if(!professor){
            res.status(404).json({message:`professor with id ${id} not found in DB.`})
        }
        res.status(200).json(professor)
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

// Update professor information by id
exports.updateById = async(req,res)=>{
    try{
        const {id} = req.params;
        const professor = await Professor.findByIdAndUpdate(id,req.body);
        if(!professor){
            res.status(404).json({message:`professor with id ${id} not found in DB.`})
        }
        res.status(200).json(professor)
        console.log(req.body)
    }catch(error){
        res.status(500).json({message:error.message});
    }
};