const phrasalService = require("./phrasals")
const Phrasal = require("../models/Phrasal")
const mongoose = require("mongoose")

const helper = require("../test/helper")
const seedData = require("../test/seedData")
const phrasalSamples = require('../test/sampleData').phrasals

describe("phrasalsService", () => {

  beforeAll(async () => {
    await helper.connectDb()
    await seedData.phrasals()
  })

  afterAll(async () => {
    await Phrasal.deleteMany()
    await helper.closeDb()
  })

  test("getRandom() should return an object with en, pl, example string fields", async () => {
    const random = await phrasalService.getRandom()
    expect(random).toEqual(
      expect.objectContaining({
        en: expect.any(String),
        pl: expect.any(String),
        example: expect.any(String),
      })
    )
  })

  test("getAll() should return array of 10 phrasal objects", async () => {
    const obtainedEntries = await phrasalService.getAll()
    expect(obtainedEntries.length).toBe(10)
    expect(obtainedEntries).toContainEqual(
      expect.objectContaining({
        en: expect.any(String),
        pl: expect.any(String),
        example: expect.any(String),
      })
    )
  })

  test("createPhrasal() should add new phrasal to phrasals collection", async () => {
    const newPhrasalData = {
      en: "english phrasal",
      pl: "polska wersja",
      example: "example of use",
    }
    await phrasalService.createPhrasal(newPhrasalData)
    const obtainedPhrasal = await Phrasal.findOne(newPhrasalData)
    expect(obtainedPhrasal).toEqual(expect.objectContaining(newPhrasalData))
  })

  test("updatePhrasal() should update specified phrasal document in database", async () => {
    let samplePhrasal = new Phrasal(phrasalSamples[0])
    await samplePhrasal.save()

    const updatedContent = {
      example: "another example",
    }
    await phrasalService.updatePhrasal(samplePhrasal._id, updatedContent)
    samplePhrasal = await Phrasal.findOne({ _id: samplePhrasal._id })
    expect(samplePhrasal.example).toBe(updatedContent.example)
  })

  test("deletePhrasal() should delete specified phrasal document ", async () => {
    const myPhrasalData = {
      en: "english ver",
      pl: "polska wer",
      example: "example of use",
    }

    const ph = new Phrasal(myPhrasalData)
    await ph.save()
    await phrasalService.deletePhrasal(ph._id)
    const obtainedPhrasal = await Phrasal.findOne({ en: "english ver" })
    expect(obtainedPhrasal).toBeNull()
  })
})
