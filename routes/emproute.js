const express = require('express');

import { deleteemp, getAllemp, getemp, saveemp, updateemp } from '../controllers/empcontroller';

const emproute = express.Router()

emproute.get('/get',getemp)
emproute.get('/getAll',getAllemp)
emproute.post('/save',saveemp)
emproute.put('/update/:emp_id',updateemp)
emproute.delete('/delete/:emp_id',deleteemp)

export { emproute }
