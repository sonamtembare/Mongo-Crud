const express = require("express");

const app = express()
const Router = require('./routes');
const { uplodeFile, list, objectbucket } = require("./csv/aws");



app.use(express.json({ limit: '50mb' }))    

app.use(express.urlencoded({ extended: true, limit: '50mb' }))
require('./models/user.model')
require('./modules/mongoDB')

app.get('/healthCheck', (req, res) => {
    res.status(200).json({
        msg : "OK"
    })
})

uplodeFile();
list();
objectbucket();

const port = 5000

app.use('/',Router);

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})