const mongoose = require("mongoose");

const connnectdb = async()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log('database connect', connect.connection.host, connect.connection.name)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connnectdb;