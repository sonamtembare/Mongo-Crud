import mongoose from "mongoose";
import { empModel } from "../models/employee.model";
const uuid = require('uuid')
const bcrypt = require('bcrypt')

const getEmp = async (req, res) => {
    const data = await empModel.findOne({
        emp_email: req.body.emp_email
    })
    res.json({
        emp_id: data.emp_id,
        emp_name: data.emp_name,
        emp_email: data.emp_email,

    })

}

const getallEmp = async (req, res) => {
    const data = await empModel.find().select("emp_id emp_name emp_email")

    res.json({
        ...data
    })

}
const saveEmp = async (req, res) => {
    const { emp_id, emp_name, emp_email, emp_password } = req.body
    const uniqueId = uuid.v4()

    const hashpassword = await bcrypt.hash(emp_password, 10)
    const data = new empModel({ emp_id: uniqueId, emp_name: emp_name, emp_email: emp_email, emp_password: hashpassword })
    const data1 = await data.save({ emp_id: uniqueId, emp_name: emp_name, emp_email: emp_email, emp_password: hashpassword })


    res.json({
        data1
    })
}

const updateEmp = async (req, res) => {
    const { emp_name, emp_email, emp_password } = req.body
    const { emp_id } = req.params

    const hashpassword = await bcrypt.hash(emp_password, 10)
    const findAndUpdate = await empModel.findOneAndUpdate({ emp_id: emp_id }, { emp_name: emp_name, emp_email: emp_email, emp_password: hashpassword })
    console.log(findAndUpdate, "===============================")
    if (findAndUpdate === null) {
        res.json({
            msg: "invalide id"
        })
    }
    res.json({
        msg: "employee is updated"
    })
}

const deleteEmp = async (req, res) => {
    const { emp_id } = req.params
    const findOneAndDelete = await empModel.findOneAndDelete({ emp_id: emp_id })

    if (findOneAndDelete === null) {
        res.json({
            msg: "employee is not there"
        })
    }
    res.json({
        msg: "employee is delete"
    })

}

export {
    getEmp,
    getallEmp,
    saveEmp,
    updateEmp,
    deleteEmp
}