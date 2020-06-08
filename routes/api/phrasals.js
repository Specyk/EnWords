const express = require('express')

async function getRandom() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const phrasal = {
                en: "english",
                pl: "polish",
                example: "przyklad"
            }
            resolve(phrasal)
        }, 155);
    })
}

async function getAll() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const phrasal = {
                en: "english",
                pl: "polish",
                example: "przyklad"
            }
            resolve([phrasal])
        }, 155);
    })
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