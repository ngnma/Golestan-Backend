const Student = require('../models/student.model')
exports.getall = async(req,res)=>{
    try{
        const students = await Student.find({});
        res.status(200).json(students);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};

exports.create = async(req,res)=>{
    try{
        const student = await Student.create(req.body);
        res.status(200).json(student);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};