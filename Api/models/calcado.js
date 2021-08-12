const mongoose = require("mongoose");

const calcadoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        required:true,
        default:Date.now
    }
})

module.exports = mongoose.model('calcado',calcadoSchema)