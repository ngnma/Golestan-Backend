//const db = require("../models/index");
//const Course = db.courses;

const Course = require('../models/course.model');
const ActiveCourse = require('../models/activeCourse.model');
const Student = require("../models/student.model");
const Professor = require("../models/professor.model");

// Get All courses filtered by faculty for P & S. and All courses will return for Admin and Manager
exports.getall = async(req,res)=>{
    try{
        const role = req.userRole;
        if(role == "student"){
            const student = await Student.findById(req.userId);
            const courses = await Course.find({ 'faculty':student.faculty });
            res.status(200).json(courses);
        }else if (role == "professor"){
            const professor = await Professor.findById(req.userId);
            const courses = await Course.find({ 'faculty':professor.faculty });
            res.status(200).json(courses);
        }else{ // Admin and Manager can see all courses
            const courses = await Course.find({});
            res.status(200).json(courses);
        }

    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};

// Create course 
exports.create = async(req,res)=>{
    try{
        const course = await Course.create(req.body);
        res.status(200).json(course);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};

// Get Course by ID as param without any filtering
// exports.getById = async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const course = await Course.findById(id);
//         res.status(200).json(course)
//     }catch(error){
//         res.status(500).json({message:error.message});
//     }
// };

exports.getById = async(req,res)=>{
    try{
        const role = req.userRole;
        const {id} = req.params;
        if(role == "student"){
            const student = await Student.findById(req.userId);
            const courses = await Course.findById(id);
            if(courses.faculty == student.faculty){
                res.status(200).json(courses);
            }else{
                res.status(200).json({message:"no such a course for your faculty exsist"});
            }
            
        }else if (role == "professor"){
            const professor = await Professor.findById(req.userId);
            const courses = await Course.findById(id);
            if(courses.faculty == professor.faculty){
                res.status(200).json(courses);
            }else{
                res.status(200).json({message:"no such a course for your faculty exsist"});
            }
        }else{ // Admin and Manager can see all courses
            const courses = await Course.find({});
            res.status(200).json(courses);
        }
    
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};



// Delete Course by ID
exports.deleteById = async(req,res)=>{
    try{
        const {id} = req.params;
        const course = await Course.findByIdAndDelete(id,req.body);
        if(!course){
            res.status(404).json({message:`course with id ${id} not found in DB.`})
        }
        res.status(200).json(course)
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

// Update course information by id
exports.updateById = async(req,res)=>{
    try{
        const {id} = req.params;
        const course = await Course.findByIdAndUpdate(id,req.body);
        if(!course){
            res.status(404).json({message:`course with id ${id} not found in DB.`})
        }
        res.status(200).json(course)
        console.log(req.body)
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

// Update ActiveCourse information by id
exports.updateByIdAC = async(req,res)=>{
    try{
        const {id} = req.params;
        const course = await ActiveCourse.findByIdAndUpdate(id,req.body);
        if(!course){
            res.status(404).json({message:`course with id ${id} not found in DB.`})
        }
        res.status(200).json(course)
        console.log(req.body)
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

// Create ActiveCourse
exports.createAC = async(req,res)=>{
    try{
        const course = await ActiveCourse.create(req.body);
        res.status(200).json(course);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};