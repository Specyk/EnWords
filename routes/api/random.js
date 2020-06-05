const express = require('express')

async function getWord() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const word = {
                en: "english",
                pl: "polish",
                explanation: "wyjasnienie",
                example: "przyklad"
            }
            resolve(word)
        }, 155);
    })
}

async function getPhrasal() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const phrasal = {
                en: "english",
                pl: "polish",
                example: "przyklad"
            }
            resolve(word)
        }, 155);
    })
}

const app = express.Router()

app.get('/word', async (req, res) => {
    try {
        res.json(await getWord())
    } catch (error) {
        console.log(error);
        res.send('no products')
    }
})

app.get('/phrasal', async (req, res) => {
    try {
        res.json(await getPhrasal())
    } catch (error) {
        console.log(error);
        res.send('no products')
    }
})

module.exports = app;