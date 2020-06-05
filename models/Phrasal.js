const mongoose = require('mongoose')

const PhrasalSchema = mongoose.Schema({
    en: String,
    pl: String,
    example: String
})

module.exports = mongoose.model('Phrasal', PhrasalSchema)