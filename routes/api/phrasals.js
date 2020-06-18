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

async function createPhrasal(newPhrasal) {
    const phrasal = new Phrasal(newPhrasal)
    await phrasal.save()
    return phrasal
}

async function updatePhrasal(newPhrasal) {
    await Phrasal.findOneAndUpdate({ _id: newPhrasal._id }, newPhrasal)
    return newPhrasal
}

async function deletePhrasal(phrasal) {
    await Phrasal.findOneAndDelete({ _id: phrasal._id })
    return newPhrasal
}


const app = express.Router()

app.get('/', async (req, res, next) => {
    try {
        res.json(await getAll())
    } catch (err) {
        next(err)
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
        const newPhrasal = await updatePhrasal(req.body.phrasal)
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
        const deleted = await deletePhrasal(req.body.phrasal)
        res.status(204).json(true)
    } catch (err) {
        next(err)
    }
})


app.get('/random', async (req, res, next) => {
    try {
        const randPhrasal = await getRandom()
        res.json(randPhrasal)
    } catch (err) {
        next(err)
    }
})

module.exports = app;