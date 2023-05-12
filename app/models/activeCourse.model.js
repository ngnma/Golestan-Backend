const mongoose = require('mongoose');
const Course = require("./course.model");

const ActiveCourse = Course.discriminator('ActiveCourse',
  new mongoose.Schema(
    {    
        activeCourse_id : { type : String, required : true},
        class_dates : [String],
        class_time : String,
        exam_date : String,
        exam_time : String,
        exam_class_no : Number,
        professor_id : String,
        capacity : Number,
        semester : String
    },{
        timestamp:true
    },{discriminatorKey: 'kind'}));

module.exports = ActiveCourse;