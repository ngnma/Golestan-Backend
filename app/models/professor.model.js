const mongoose = require('mongoose')
const professorSchema = mongoose.Schema(
    {
        user_id:{ type : String, required : true},
        f_name:{ type : String, required : true},
        l_name:{ type : String, required : true},
        password:{ type : String, required : true},
        email:{ type : String},
        phone:{ type : String},
        position:{ type : String, default:"teacher"},
        faculty:{ type : String, required : true},
        field:{ type : String, required : true}
    },{
        timestamp:true
    }
)

const Professor = mongoose.model('Professor',professorSchema);
module.exports = Professor;