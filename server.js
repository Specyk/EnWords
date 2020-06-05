const mongoose = require('mongoose')
const express = require("express");
const routesLoader = require('./routes/loader')

require('dotenv').config()
const PORT = process.env.SERVER_PORT

const app = express();

app.use('/', routesLoader('api', __dirname + '/routes/api'))

app.get('/status', (req, res) => {
    res.json({
        word: 33
    })
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}


async function main() {
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
}

main().then(() => console.log('Application configured properly')).catch(err => console.log(`Application error: ${err}`))