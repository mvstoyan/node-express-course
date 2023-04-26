const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'product name must be provided']
    },
    price: {
        type: Number,
        required: [true, 'product price must be provided']
    },
    featured:{
        type:Boolean,
        default:false
    },
    reting:{
        type: Number,
        default:4.5
    },
    createdAt: {
        type:Date,
        default:Date.now()
    },
    compony:{
        type:String,
        enum: {
            values: ['ikea','libby','caressa','marcos'],
            message: '{VALUE} is not supported'
        }
        //enum:['ikea','libby','caressa','marcos']
    }
})

module.exports = mongoose.model('Product', productSchema)