const {model,models, Schema } = require('mongoose')
const mongoose = require('mongoose')
const propertySchema = new Schema({
    price:Number,
    description : String,
    beds:Number,
    bathroom:Number,
    area:Number,
    isLiked:Boolean,
    isForSale:Boolean,
    lat:Number,
    lng:Number
})


module.exports = mongoose.models.Property || mongoose.model('Property', propertySchema)