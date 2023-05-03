const commonError = new Error("An error occurred. Please try again later.")

function handleAsync(asyncFunc) {
    return function(req, res, next) {
        asyncFunc(req, res, next)
            .then(result => res.json(result))
            .catch(err => next(commonError.message))

    }
}

module.exports = handleAsync