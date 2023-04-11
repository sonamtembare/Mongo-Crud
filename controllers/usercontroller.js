import mongoose from 'mongoose';
import { user_validation } from '../middleware/validation';
import { deleteUser, getAllUser, getUser, saveUser, updateUser } from '../services/queries';

/////////////////////////////////////////create users/////////////////////////////////////////////////

const saveuser = async (req, res) => {
    try {
        console.log(req.body, "++++++++++");
        const { error } = user_validation.validate(req.body)
        if (error) throw error

        const data = await saveUser(req, res)
        console.log(data,"========================")
    } catch (err) {
        res.send({err})
    }

}

////////////////////////////////////////////////////get user////////////////////////////////////////
const getuser = async (req, res) => {
    try {
        const data = await getUser(req, res)
    } catch (err) {
        res.send({err})
    }




}

////////////////////////////////////////////////getAll users///////////////////////////////////////////

const getAlluser = async (req, res) => {
    try {
        const alldata = await getAllUser(req, res)
    } catch (err) {
        res.send({err})
    }


}

///////////////////////////////////////////////////update user//////////////////////////////////////////
const updateuser = async (req, res) => {
    try {
        const updatedata = await updateUser(req, res)
    } catch (err) {
        res.send({err:err.message})
    }



}

////////////////////////////////////////delete user////////////////////////////////////////////////
const deleteuser = async (req, res) => {

    try {
        const data = await deleteUser(req, res)
    } catch (err) {
        res.send({err:err.message})
    }

}

export {
    getuser,
    getAlluser,
    saveuser,
    updateuser,
    deleteuser
}