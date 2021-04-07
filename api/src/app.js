const express = require('express')
const app = express()
const questionRoutes = require('./routes/question.routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// ROUTES
app.use('/questions/', questionRoutes)

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})
