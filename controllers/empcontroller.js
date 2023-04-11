import { employee_validation } from "../middleware/validation";
import { deleteEmp, getallEmp, getEmp, saveEmp, updateEmp } from "../services/commonqueries";


const getemp = async (req, res) => {
    const getdata = await getEmp(req, res)
}

const getAllemp = async (req, res) => {
    const getAlldata = await getallEmp(req, res)
}

const saveemp = async (req, res) => {
    try {
        console.log(req.body, "=========")
        const { error } = employee_validation.validate(req.body)
        if (error) throw error
        const savedata = await saveEmp(req, res)
        console.log(savedata, "=====================")
    } catch (err) {
        res.json({ err })

    }


}

const updateemp = async (req, res) => {
    try {
        const updatedata = await updateEmp(req, res)
    } catch (err) {
        res.json({ err })
    }


}

const deleteemp = async (req, res) => {
    const deletedata = await deleteEmp(req, res)
}

export { getemp, getAllemp, saveemp, updateemp, deleteemp }