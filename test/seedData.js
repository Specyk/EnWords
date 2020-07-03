const Phrasal = require('../models/Phrasal')
const Word = require('../models/Word')
const { words, phrasals } = require('./sampleData')

module.exports = {
    phrasals: async () => await Promise.all(phrasals.map(p => new Phrasal(p).save())),
    words: async () => await Promise.all(words.map(w => new Word(w).save()))
}
