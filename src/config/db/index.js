const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce_dev', {
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useCreateIndex: true,
        });
        console.log("Success")
    } catch (error) {
        console.log("Fail")
    }


}

module.exports = { connect }