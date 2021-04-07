const {
    getRandomQuestion,
    getQuestionById,
    createQuestion,
} = require('../controllers/question.controller')

const route = require('express').Router()

route.get('/random', getRandomQuestion)
route.get('/:id', getQuestionById)
route.post('/', createQuestion)
/* 

// GET ONE RANDOM QUESTION
app.get('/random-question', async (req, res) => {
    try {
        const randQuestion = await pool.query('SELECT * FROM questions ORDER BY RANDOM() LIMIT 1')
        res.json(randQuestion.rows)
    } catch (e) {
        console.error(e)
    }
})

// GET ALL
app.get('/questions', async (req, res) => {
    try {
        const allQuestions = await pool.query('SELECT * FROM questions')
        res.json(allQuestions.rows)
    } catch (e) {
        console.error(e)
    }
})

//GET ID
app.get('/questions/:id', async (req, res) => {
    try {
        const { id } = req.params
        const question = await pool.query('SELECT * FROM questions WHERE question_id=$1', [id])
        res.json(question.rows[0])
    } catch (e) {
        console.error(e)
    }
})

// POST
app.post('/questions', async (req, res) => {
    try {
        const { category, type, difficulty, question, correct_answer, incorrect_answers } = req.body

        const newQuestion = await pool.query(
            'INSERT INTO questions (category, type, difficulty, question, correct_answer, incorrect_answers) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [category, type, difficulty, question, correct_answer, incorrect_answers]
        )
        res.json({
            'Question successfully created': newQuestion.rows[0],
        })
    } catch (e) {
        console.error(e)
    }
})

app.put('/question/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { category, type, difficulty, question, correct_answer, incorrect_answers } = req.body

        const updateQuestion = await pool.query(
            'UPDATE questions SET category = $1, type = $2, difficulty = $3, question = $4, correct_answer = $5, incorrect_answers = $6 WHERE questionid = $7',
            [category, type, difficulty, question, correct_answer, incorrect_answers, id]
        )

        res.json('Question was successfully updated')
    } catch (e) {
        console.error(e)
    }
})

app.delete('/question/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deleteQuestion = await pool.query('DELETE FROM questions WHERE question_id = $1', [
            id,
        ])
    } catch (e) {
        console.error(e)
    }
})
*/

route.use((req, res, next) => {
    const error = new Error('Only GET, POST, PUT, DELETE commands are supported')
    error.status = 500
    next(error)
})

module.exports = route
