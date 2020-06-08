const express = require('express')

async function getRandom() {
    // TODO
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const word = {
                en: "english",
                pl: "polish",
                definition: "definicja",
                example: "przyklad"
            }
            resolve(word)
        }, 155);
    })
}

async function getAll() {
    // TODO
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const word = {
                en: "english",
                pl: "polish",
                definition: "definicja",
                example: "przyklad"
            }
            resolve([word])
        }, 155);
    })
}


const app = express.Router()

app.get('/', async (req, res) => {
    try {
        res.json(await getAll())
    } catch (error) {
        console.log(error);
        res.send('no products')
    }
})

app.get('/random', async (req, res) => {
    try {
        res.json(await getRandom())
    } catch (error) {
        console.log(error);
        res.send('no products')
    }
})

module.exports = app;