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

async function createWord(newWord) {
    const word = new Word(newWord)
    await word.save()
    return word
}

async function updateWord(newWord) {
    await Word.findOneAndUpdate({ _id: newWord._id }, newWord)
    return newWord
}

async function deleteWord(word) {
    await Word.findOneAndDelete({ _id: word._id })
    return word
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

app.post('/', async (req, res, next) => {
    try {
        const phrasal = await createPhrasal(req.body.phrasal)
        res.status(201).json(phrasal)
    } catch (err) {
        if (err.errors) {
            return res.status(200).json({
                message: 'Validation error',
                errors: err.errors
            })
        }
        next(err)
    }
})

app.put('/:id', async (req, res, next) => {
    try {
        const newWord = await updateWord(req.body.phrasal)
        res.status(201).json(newWord)
    } catch (err) {
        if (err.errors) {
            return res.status(200).json({
                message: 'Validation error',
                errors: err.errors
            })
        }

        next(err)
    }
})

app.delete('/:id', async (req, res, next) => {
    try {
        const deleted = await deleteWord(req.body.phrasal)
        res.status(204).json(true)
    } catch (err) {
        next(err)
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