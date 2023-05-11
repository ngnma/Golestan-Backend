const mongoose = require('mongoose')
const studentSchema = mongoose.Schema(
    {
        user_id:{ type : String, required : true},
        f_name:{ type : String, required : true},
        l_name:{ type : String, required : true},
        password:{ type : String, required : true},
        email:{ type : String},
        phone:{ type : String},
        degree:{ type : String, default:"bachelor"},
        entry_year:{ type : Number},
        score:{ type : Number, default:0 },
        faculty:{ type : String, required : true},
        field:{ type : String, required : true}
    },{
        timestamp:true
    }
)

const Student = mongoose.model('Student',studentSchema);
module.exports = Student;