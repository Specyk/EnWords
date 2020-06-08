const express = require('express')
const Phrasal = require('../../models/Phrasal')

async function getRandom() {
    const count = await Phrasal.count()
    const randomNum = Math.floor(Math.random() * count)
    const randomItems = await Phrasal.find().skip(randomNum).limit(1)
    return randomItems[0]
}

async function getAll() {
    const items = Phrasal.find({})
    return items
}

const app = express.Router()

app.get('/', async (req, res) => {
    try {
        res.json(await getAll())
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `An error occured` })
    }
})

app.get('/random', async (req, res) => {
    try {
        res.json(await getRandom())
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `An error occured` })
    }
})

module.exports = app;