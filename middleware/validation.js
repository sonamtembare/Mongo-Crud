const joi=require('joi')

const user_validation=joi.object({
    user_name:joi.string().required(),
    user_email:joi.string().email().required(),
    user_password:joi.string().min(2).max(8).required()
})

const employee_validation=joi.object({
    emp_name:joi.string().required(),
    emp_email:joi.string().required(),
    emp_password:joi.string().min(2).max(8).required()
})

export {user_validation,employee_validation}