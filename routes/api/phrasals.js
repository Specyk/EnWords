const express = require('express')
const phrasalsService = require('../../services/phrasals')

const app = express.Router()

app.get('/', async (req, res, next) => {
    try {
        res.json(await phrasalsService.getAll())
    } catch (err) {
        next(err)
    }
})

app.post('/', async (req, res, next) => {
    try {
        const phrasal = await phrasalsService.createPhrasal(req.body)
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
        const newPhrasal = await phrasalsService.updatePhrasal(req.body.phrasal)
        res.status(201).json(newPhrasal)
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
        const deleted = await phrasalsService.deletePhrasal(req.body.phrasal)
        res.status(204).json(true)
    } catch (err) {
        next(err)
    }
})


app.get('/random', async (req, res, next) => {
    try {
        const randPhrasal = await phrasalsService.getRandom()
        res.json(randPhrasal)
    } catch (err) {
        next(err)
    }
})

module.exports = app;