const Phrasal = require('../models/Phrasal')

module.exports = {
    getRandom: async () => {
        const count = await Phrasal.count()
        const randomNum = Math.floor(Math.random() * count)
        const randomItems = await Phrasal.find().skip(randomNum).limit(1)
        return randomItems[0]
    },

    getAll: async () => {
        const items = Phrasal.find({})
        return items
    },

    createPhrasal: async (newPhrasal) => {
        const phrasal = new Phrasal(newPhrasal)
        await phrasal.save()
        return phrasal
    },

    updatePhrasal: async (newPhrasal) => {
        await Phrasal.findOneAndUpdate({ _id: newPhrasal._id }, newPhrasal)
        return newPhrasal
    },

    deletePhrasal: async (id) => {
        await Phrasal.findOneAndDelete({ _id: id })
    }
}