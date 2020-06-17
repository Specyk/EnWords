const mongoose = require('mongoose')

const PhrasalSchema = new mongoose.Schema({
    en: {
        type: String,
        validate: {
            validator: en => en.length > 1,
            message: "English version must contain at least 2 characters"
        },
        required: [true, 'No english version of phrasal']
    },
    pl: {
        type: String,
        required: [true, 'No polish version of phrasal']
    },
    example: String
})

module.exports = mongoose.model('phrasal', PhrasalSchema)