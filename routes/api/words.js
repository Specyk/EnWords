const express = require('express')
const wordService = require('../../services/words')

const app = express.Router()

app.get('/', async (req, res) => {
    try {
        res.json(await wordService.getAll())
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Load db data error' })
    }
})

app.post('/', async (req, res, next) => {
    try {
        const word = await wordService.createWord(req.body.word)
        res.status(201).json(word)
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
        const newWord = await wordService.updateWord(req.body.phrasal)
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
        const deleted = await wordService.deleteWord(req.body.word)
        res.status(204).json(true)
    } catch (err) {
        next(err)
    }
})


app.get('/random', async (req, res) => {
    try {
        res.json(await wordService.getRandom())
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Load db data error' })
    }
})

module.exports = app;