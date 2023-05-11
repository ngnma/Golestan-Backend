const mongoose = require('mongoose')
const courseSchema = mongoose.Schema(
    {
        ID:{
            type : String,
            required : [true, "please enter a ID for course:"]
        },
        title:{
            type : String,
            required : [true, "please enter a title for course:"]
        },
        unit:{
            type : Number,
            require : [true, "please enter unit for course:"]
        },
        prerequistie : [String],
        nedded : [String]
    },{
        timestamp:true
    }
)

const Course = mongoose.model('Course',courseSchema);
module.exports = Course;