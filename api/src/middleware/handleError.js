const handleError = (error) => {
    console.log(error)
    const err = new Error(error)
    err.status = error.status || 500

    next(err)
}

module.exports = handleError
