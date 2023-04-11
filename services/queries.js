import mongoose from 'mongoose';
import { userModel } from '../models/user.model';
const bcrypt =require('bcrypt')

const uuid=require('uuid')

////////////////////////////////////////////////save user/////////////////////////////////////////////

const saveUser =async(req,res)=>{
    const{
        user_id,
        user_name,
        user_email,
        user_password
    }=req.body

    const uniqueId=uuid.v4()
    
    const hashpassword= await bcrypt.hash(user_password,10)
    const data = new userModel({user_id:uniqueId,user_name:user_name,user_email:user_email,user_password:hashpassword})
    const data1 = await data.save({user_id:uniqueId,user_name:user_name,user_email:user_email,user_password:hashpassword})

    console.log("====", data1)

    res.json({
        data1
    })
}

/////////////////////////////////////////////get user by id/////////////////////////////////////////////////////

const getUser =async(req,res)=>{
    const data = await userModel.findOne({
        user_email: req.body.user_email

    });

    console.log("Data- >>>>>>", data)
    res.json({
        user_id:data.user_id,
        user_name:data.user_name,
        user_email:data.user_email
    })
}

//////////////////////////////////////////////get all users///////////////////////////////////////////////////////

const getAllUser=async(req,res)=>{
const data= await userModel.find().select("user_id user_name user_email")

console.log(data)

res.json({
    ...data
})

}

/////////////////////////////////////////////////update user//////////////////////////////////////////

const updateUser = async(req,res)=>{

    const { user_name, user_email, user_password } = req.body
    const { user_id } = req.params

    const hashpassword=await bcrypt.hash(user_password,10)

    const findAndUpdate = await userModel.findOneAndUpdate({ user_id: user_id }, {  user_name: user_name, user_email: user_email, user_password:hashpassword })
    console.log("Update ---------->", findAndUpdate)
    if (findAndUpdate === null) {
        res.json({
            msg:"user is not valide"
          })
    }
    res.json({
      msg:"user is updated"
    })
}

///////////////////////////////////////////////////////////delete user////////////////////////////////////////////////////

const deleteUser= async(req,res)=>{
    const { user_id } = req.params

    const find = await userModel.findOneAndDelete({ user_id: user_id })

    if (find === null) {
        res.json({
            msg: "user is not there"
        })
    }
    res.json({
        msg: "user is deleted"
    })

}
 
export{getUser,saveUser,getAllUser,updateUser,deleteUser}