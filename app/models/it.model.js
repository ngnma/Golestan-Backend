const mongoose = require('mongoose')
const itSchema = mongoose.Schema(
    {
        user_id:{ type : String, required : true},
        f_name:{ type : String, required : true},
        l_name:{ type : String, required : true},
        password:{ type : String, required : true},
        email:{ type : String},
        phone:{ type : String},
    },{
        timestamp:true
    }
)

const IT = mongoose.model('IT',itSchema);
module.exports = IT;