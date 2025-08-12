const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/rakshitapp');

const userSchema = mongoose.Schema({
    username:String,
    age: Number,
    password: String,
    email: String
});

module.exports=mongoose.model("user",userSchema);