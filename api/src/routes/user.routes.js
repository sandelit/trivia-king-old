const {
    registerUser,
    loginUser,
    getCurrentUser,
    getAllUsers,
} = require('../controllers/user.controller')

const route = require('express').Router()

//
// Login and registration
//
route.post('/login', loginUser)
route.post('/register', registerUser)

//
// Get user info
//
route.get('/current', getCurrentUser)
route.get('/all', getAllUsers)

route.use((req, res, next) => {
    const error = new Error('Only GET, POST, PUT, DELETE commands are supported')
    error.status = 500
    next(error)
})

module.exports = route
