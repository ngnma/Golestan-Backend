const Student = require('../models/student.model')

// Get All Students
exports.getAll = async(req,res)=>{
    try{
        const students = await Student.find({});
        res.status(200).json(students);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};
// Create new Student
exports.create = async(req,res)=>{
    try{
        const student = await Student.create(req.body);
        res.status(200).json(student);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};
// Get Student by ID as param
exports.getById = async(req,res)=>{
    try{
        const {id} = req.params;
        const student = await Student.findById(id);
        res.status(200).json(student)
    }catch(error){
        res.status(500).json({message:error.message});
    }
};
// Delete Student by ID
exports.deleteById = async(req,res)=>{
    try{
        const {id} = req.params;
        const student = await Student.findByIdAndDelete(id,req.body);
        if(!student){
            res.status(404).json({message:`student with id ${id} not found in DB.`})
        }
        res.status(200).json(student)
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

// Update student information by id
exports.updateById = async(req,res)=>{
    try{
        const {id} = req.params;
        const student = await Student.findByIdAndUpdate(id,req.body);
        if(!student){
            res.status(404).json({message:`student with id ${id} not found in DB.`})
        }
        res.status(200).json(student)
        console.log(req.body)
    }catch(error){
        res.status(500).json({message:error.message});
    }
};