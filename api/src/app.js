const express = require('express')
const app = express()
const questionRoutes = require('./routes/question.routes')
const userRoutes = require('./routes/user.routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// ROUTES
app.use('/questions/', questionRoutes)
app.use('/user/', userRoutes)

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})
