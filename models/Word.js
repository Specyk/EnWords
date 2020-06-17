const mongoose = require('mongoose')

const WordSchema = new mongoose.Schema({
    en: {
        type: String,
        required: [true, 'No english version of phrasal']
    },
    pl: {
        type: String,
        required: [true, 'No polish version of phrasal']
    },
    definition: String,
    example: String
})

module.exports = mongoose.model('word', WordSchema)