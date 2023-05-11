const mongoose = require('mongoose')
const activeCourseSchema = mongoose.Schema(
    {
        ID:{ type : String, required : true},
        title:{ type : String, required : true},
        unit:{ type : Number, require : true},
        prerequistie : [String],
        nedded : [String],
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
    }
)

const ActiveCourse = mongoose.model('ActiveCourse',activeCourseSchema);
module.exports = ActiveCourse;