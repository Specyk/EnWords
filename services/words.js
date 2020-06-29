const Word = require('../models/Word')

module.exports = {
    getRandom: async () => {
        const count = await Word.count()
        const randomNum = Math.floor(Math.random() * count)
        const randomItems = await Word.find().skip(randomNum).limit(1)
        return randomItems[0]
    },

    getAll: async () => {
        const items = Word.find({})
        return items
    },

    createWord: async (newWord) => {
        const word = new Word(newWord)
        await word.save()
        return word
    },

    updateWord: async (newWord) => {
        await Word.findOneAndUpdate({ _id: newWord._id }, newWord)
        return newWord
    },

    deleteWord: async (word) => {
        await Word.findOneAndDelete({ _id: word._id })
        return word
    }
}

