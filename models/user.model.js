const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    user_id : {
        type : String,
        unique : true
    },
    user_name : {
        type : String
    },
    user_email : {
        type : String
    },
    user_password : {
        type : String
    },
    created_at : {
      type : Date,
        default : new Date()
    },
    updated_at : {
        type : Date,
        default : new Date()
    }
});

// compile our model
const userModel = mongoose.model('users', userSchema);

module.exports = {userModel}


