const mongoose =require('mongoose')
 
const {Schema} = mongoose

const employeeschema =new Schema({
    emp_id:{
        type:String,
        unique:true
    },
    emp_name:{
        type : String
    },
    emp_email:{
        type:String
    },
    emp_password:{
        type:String
    },
    created_at:{
        type:Date,
        default: new Date()
    },
    updated_at:{
        type:Date,
        default: new Date()

    }
});

const empModel = mongoose.model('employees',employeeschema);

module.exports={empModel}