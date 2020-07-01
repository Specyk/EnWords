const PhrasalsService = require('./phrasals')
const Phrasal = require('../models/Phrasal')
const Word = require('../models/Word')
const mongoose = require('mongoose')

const prepareDb = async () => await require('../config/seedData')()
clearDb = async () => Promise.all([Phrasal.deleteMany({}), Word.deleteMany({})])

describe('phrasalsService', () => {
    const phrasalSamples = [
        {
            pl: 'być przepełnionym',
            en: 'brim over',
            example: 'Susan was brimming over with excitement.'
        },
        {
            pl: 'trzymać kogoś w ryzach, zmuszać do posłuszeństwa',
            en: 'keep sb under',
            example: 'The people from the village are kept under by the army.'
        }
    ]

    const wordSamples = [
        {
            pl: 'obelga, upokarzająca uwaga',
            en: 'put-down',
            definition: '[noun] - an unkind remark that makes somebody seem silly',
            example: "She couldn't stand his put-downs any more."
        },
        {
            pl: 'niewola',
            en: 'captivity',
            definition: '[noun] - the situation in which a person or animal is kept somewhere and is not allowed to leave',
            example: 'All the hostages were released from captivity.'
        }
    ]

    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost/enwords_test')
        await clearDb()
        await prepareDb()
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })

    test('getRandom should return an object with en, pl, example string fields', async () => {
        const random = await PhrasalsService.getRandom()
        expect(random).toEqual(expect.objectContaining({
            en: expect.any(String),
            pl: expect.any(String),
            example: expect.any(String)
        }))
    })

    test('getAll should return array of 10 phrasal objects', async () => {
        const obtainedEntries = await PhrasalsService.getAll()
        expect(obtainedEntries.length).toBe(10)
        expect(obtainedEntries).toContainEqual(expect.objectContaining({
            en: expect.any(String),
            pl: expect.any(String),
            example: expect.any(String)
        }))
    })

})


// getRandom: async () => {
//     const count = await Phrasal.countDocuments()
//     const randomNum = Math.floor(Math.random() * count)
//     const randomItems = await Phrasal.find().skip(randomNum).limit(1)
//     return randomItems[0]
// },

//     getAll: async () => {
//         const items = Phrasal.find({})
//         return items
//     },

//         createPhrasal: async (newPhrasal) => {
//             const phrasal = new Phrasal(newPhrasal)
//             await phrasal.save()
//             return phrasal
//         },

//             updatePhrasal: async (newPhrasal) => {
//                 await Phrasal.findOneAndUpdate({ _id: newPhrasal._id }, newPhrasal)
//                 return newPhrasal
//             },

//                 deletePhrasal: async (id) => {
//                     await Phrasal.findOneAndDelete({ _id: id })
//                 }
