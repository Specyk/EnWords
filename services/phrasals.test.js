const phrasalsService = require('./phrasals')
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

    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost/enwords_test')
        await clearDb()
        await prepareDb()
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })

    test('getRandom() should return an object with en, pl, example string fields', async () => {
        const random = await phrasalsService.getRandom()
        expect(random).toEqual(expect.objectContaining({
            en: expect.any(String),
            pl: expect.any(String),
            example: expect.any(String)
        }))
    })

    test('getAll() should return array of 10 phrasal objects', async () => {
        const obtainedEntries = await phrasalsService.getAll()
        expect(obtainedEntries.length).toBe(10)
        expect(obtainedEntries).toContainEqual(expect.objectContaining({
            en: expect.any(String),
            pl: expect.any(String),
            example: expect.any(String)
        }))
    })

    test('createPhrasal() should add new phrasal to phrasals collection', async () => {
        const newPhrasalData = {
            en: 'english phrasal',
            pl: 'polska wersja',
            example: 'example of use'
        }
        await phrasalsService.createPhrasal(newPhrasalData)
        const obtainedPhrasal = await Phrasal.findOne(newPhrasalData)
        expect(obtainedPhrasal).toEqual(expect.objectContaining(newPhrasalData))
    })

    test('updatePhrasal() should update specified phrasal document in database', async () => {
        let samplePhrasal = new Phrasal(phrasalSamples[0])
        await samplePhrasal.save()

        const updatedContent = {
            example: 'another example'
        }
        await phrasalsService.updatePhrasal(samplePhrasal._id, updatedContent)
        samplePhrasal = await Phrasal.findOne({ _id: samplePhrasal._id })
        expect(samplePhrasal.example).toBe(updatedContent.example)
    })

    test('deletePhrasal() should delete specified phrasal document ', async () => {
        const myPhrasalData = {
            en: 'english ver',
            pl: 'polska wer',
            example: 'example of use'
        }

        const ph = new Phrasal(myPhrasalData)
        await ph.save()
        await phrasalsService.deletePhrasal(ph._id)
        const obtainedPhrasal = await Phrasal.findOne({ en: 'english ver' })
        expect(obtainedPhrasal).toBeNull()
    })

})
