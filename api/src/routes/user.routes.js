const { registerUser, loginUser } = require('../controllers/user.controller')

const route = require('express').Router()

//route.get('/random', getRandomQuestion)
//route.get('/:id', getQuestionById)
//route.post('/', createQuestion)
route.post('/login', loginUser)
route.post('/register', registerUser)

route.use((req, res, next) => {
    const error = new Error('Only GET, POST, PUT, DELETE commands are supported')
    error.status = 500
    next(error)
})

module.exports = route
