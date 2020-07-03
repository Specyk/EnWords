const wordService = require("./words")
const Word = require("../models/Word")
const mongoose = require("mongoose")

const helper = require("../test/helper")
const seedData = require("../test/seedData")
const wordSamples = require('../test/sampleData').words

describe("wordService", () => {

    beforeAll(async () => {
        await helper.connectDb()
        await seedData.words()
    })

    afterAll(async () => {
        await Word.deleteMany()
        await helper.closeDb()
    })

    test("getRandom() should return an object with en, pl, definition, example string fields", async () => {
        const random = await wordService.getRandom()
        expect(random).toEqual(
            expect.objectContaining({
                en: expect.any(String),
                pl: expect.any(String),
                example: expect.any(String),
                definition: expect.any(String)
            })
        )
    })

    test("getAll() should return array of 10 word objects", async () => {
        const obtainedEntries = await wordService.getAll()
        expect(obtainedEntries.length).toBe(10)
        expect(obtainedEntries).toContainEqual(
            expect.objectContaining({
                en: expect.any(String),
                pl: expect.any(String),
                example: expect.any(String),
                definition: expect.any(String)
            })
        )
    })

    test("createWord() should add new word to words collection", async () => {
        const newWordData = {
            en: "english word",
            pl: "polska wersja",
            example: "example of use",
            definition: "definition of word"
        }
        await wordService.createWord(newWordData)
        const obtainedEntry = await Word.findOne(newWordData)
        expect(obtainedEntry).toEqual(expect.objectContaining(newWordData))
    })

    test("updateWord() should update specified word document in database", async () => {
        let sampleWord = new Word(wordSamples[0])
        await sampleWord.save()

        const updatedContent = {
            example: "another example",
            definition: "another definition"
        }
        await wordService.updateWord(sampleWord._id, updatedContent)
        sampleWord = await Word.findOne({ _id: sampleWord._id })
        expect(sampleWord.example).toBe(updatedContent.example)
        expect(sampleWord.definition).toBe(updatedContent.definition)
    })

    test("deleteWord() should delete specified word document ", async () => {
        const myWordData = {
            en: "english ver",
            pl: "polska wer",
            example: "example of use",
            definition: "some definition"
        }

        const w = new Word(myWordData)
        await w.save()
        await wordService.deleteWord(w._id)
        const obtainedEntry = await Word.findOne({ en: "english ver" })
        expect(obtainedEntry).toBeNull()
    })
})
