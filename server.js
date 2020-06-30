require('dotenv').config()
const PORT = process.env.SERVER_PORT

const mongoose = require('mongoose')
const express = require("express");

const keys = require('./config/keys')
const routesLoader = require('./routes/loader')

const loggerMiddleware = require('./middlewares/logger')
const errorHandler = require('./middlewares/errorHandler')

const app = express();

app.use('/',
    loggerMiddleware,
    express.json(),
)

app.use('/api', routesLoader(__dirname + '/routes/api'))

app.get('/status', (req, res, next) => {
    try {
        // TODO, should send {wordsNum, phrasalsNum, siteDescription}
        res.json({
            word: 33
        })
    } catch (err) {
        next(err)
    }
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.use('/', errorHandler)

async function main() {
    await mongoose.connect(keys.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    app.listen(PORT, () => console.log(`EnWords is listening on port ${PORT}`));
}

main().then(() => console.log('Application configured properly')).catch(err => console.log(`Application error: ${err}`))