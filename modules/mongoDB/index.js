const mongoose = require('mongoose');

// add into env
const connectionString = "mongodb+srv://sonam:sonam@cluster0.u8g1acr.mongodb.net/crud_task?retryWrites=true&w=majority"

mongoose.connect(connectionString).then(() => {
    console.log("MongoDB Connection successfull")
}).catch((err) => {
    console.log("mongoDB error ", err.message)
})

module.exports = { mongoose }