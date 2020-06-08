const mongoose = require('mongoose')

const WordSchema = new mongoose.Schema({
    en: String,
    pl: String,
    explanation: String,
    example: String
})

module.exports = mongoose.model('word', WordSchema)