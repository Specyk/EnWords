const express = require('express')
const Word = require('../../models/Word')

async function getRandom() {
    const count = await Word.count()
    const randomNum = Math.floor(Math.random() * count)
    const randomItems = await Word.find().skip(randomNum).limit(1)
    return randomItems[0]
}

async function getAll() {
    const items = Word.find({})
    return items
}

const app = express.Router()

app.get('/', async (req, res) => {
    try {
        res.json(await getAll())
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Load db data error' })
    }
})

app.get('/random', async (req, res) => {
    try {
        res.json(await getRandom())
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Load db data error' })
    }
})

module.exports = app;