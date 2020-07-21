const mongoose = require('mongoose')

const svoiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('svoice', svoiceSchema)