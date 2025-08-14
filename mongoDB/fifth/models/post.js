const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    
    date:{
        type: Date,
        default : Date.now
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    postdata: String
})

module.exports = mongoose.model("post",postSchema);
