const mongoose = require('mongoose');
const User = require("./user.model");

const Student = User.discriminator('Student',
  new mongoose.Schema({ 
    degree:{ type : String, default:"bachelor"},
    entry_year:{ type : Number},
    score:{ type : Number, default:0 },
    faculty:{ type : String, required : true},
    field:{ type : String, required : true}
}, {discriminatorKey: 'kind'}));

module.exports = Student;