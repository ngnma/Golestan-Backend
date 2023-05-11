const mongoose = require('mongoose')
const managerSchema = mongoose.Schema(
    {
        user_id:{ type : String, required : true},
        f_name:{ type : String, required : true},
        l_name:{ type : String, required : true},
        password:{ type : String, required : true},
        email:{ type : String},
        phone:{ type : String},
        faculty:{ type : String, required : true},
    },{
        timestamp:true
    }
)

const Manager = mongoose.model('Manager',managerSchema);
module.exports = Manager;