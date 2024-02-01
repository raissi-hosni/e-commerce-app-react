const mongoose =require('mongoose');

const signSchema = new mongoose.Schema({
    username:String,
    useremail:String,
    userpassword:String
})
const signModel=mongoose.model("sign", signSchema)
module.exports= signModel;