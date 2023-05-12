const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
    {
        user_id:{ type : String, required : true, unique:true},
        f_name:{ type : String, required : true},
        l_name:{ type : String, required : true},
        password:{ type : String, required : true},
        email:{ type : String},
        phone:{ type : String},
        role:{
            type: String,
            enum: ['admin', 'student','professor','manager'],
            default:'admin'
        }
    },
    { timestamp:true }, 
    {discriminatorKey: 'kind'}
)

const User = mongoose.model('User',userSchema);
module.exports = User;