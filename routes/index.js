const express = require('express')
const { emproute } = require('./emproute')
const { userroute } = require('./userroutes')


const Router = express.Router()

const {BASE_ROUTE} = process.env

Router.use(`${BASE_ROUTE}/user`,userroute)
Router.use(`${BASE_ROUTE}/emp`,emproute)

Router.get('/', (req, res) => {
    res.status(200).json({
        msg : 'Success from route'
    })
})

module.exports = Router
