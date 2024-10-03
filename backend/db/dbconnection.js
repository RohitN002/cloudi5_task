const dotenv=require('dotenv')
dotenv.config()
const mongoose = require('mongoose');
const mongo=process.env.MONGODB
const connectToMongo=async()=>{
    try{
        mongoose.connect(mongo)
        console.log('MongoDB connected sucesfully')
    }
  
  
    catch(error)  {
        console.log(err)};
}

module.exports=connectToMongo