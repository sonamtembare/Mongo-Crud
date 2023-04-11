const express =require('express')
import { deleteuser, getAlluser, getuser, saveuser, updateuser } from '../controllers/usercontroller';

const userroute = express.Router();

userroute.post('/save', saveuser)
userroute.get('/get', getuser)
userroute.get('/getAll',getAlluser)
userroute.put('/update/:user_id',updateuser)
userroute.delete('/delete/:user_id',deleteuser)

export { userroute }