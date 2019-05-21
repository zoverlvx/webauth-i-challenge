module.exports = function (res, statusCode, obj) {
    res.status(statusCode).json(obj)
}
