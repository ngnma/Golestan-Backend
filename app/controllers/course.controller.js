//const db = require("../models/index");
//const Course = db.courses;

const Course = require('../models/course.model')
exports.getall = async(req,res)=>{
    try{
        const courses = await Course.find({});
        res.status(200).json(courses);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};

exports.create = async(req,res)=>{
    try{
        const course = await Course.create(req.body);
        res.status(200).json(course);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};