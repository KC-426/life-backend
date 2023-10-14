const mongoose = require('mongoose')
const Enquiry_Schema = new mongoose.Schema(
    {
        medicine: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone_no: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        message: {
            type: String, 
            required: true
        },
        product_detail: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products',
            // required: true
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('Enquiry', Enquiry_Schema)
