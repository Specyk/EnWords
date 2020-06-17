module.exports = (err, req, res, next) => {
    const errorRes = {
        message: err.message
    }
    res.status(500).send(errorRes)
}