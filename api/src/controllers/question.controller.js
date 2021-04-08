const handleError = require('../middleware/handleError')
const pool = require('../config/db')

exports.getRandomQuestion = async (req, res, next) => {
    try {
        const randQuestion = await pool.query('SELECT * FROM questions ORDER BY RANDOM() LIMIT 1')
        res.status(200).json(randQuestion.rows)
    } catch (e) {
        handleError(e)
    }
}

exports.getQuestionById = async (req, res, next) => {
    try {
        const { id } = req.params
        const question = await pool.query('SELECT * FROM questions WHERE question_id=$1', [id])
        res.status(200).json(question.rows[0])
    } catch (e) {
        handleError(e)
    }
}

exports.createQuestion = async (req, res, next) => {
    try {
        const { category, type, difficulty, question, correct_answer, incorrect_answers } = req.body

        const newQuestion = await pool.query(
            'INSERT INTO questions (category, type, difficulty, question, correct_answer, incorrect_answers) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [category, type, difficulty, question, correct_answer, incorrect_answers]
        )
        res.status(200).json({
            'Question successfully created': newQuestion.rows[0],
        })
    } catch (e) {
        handleError(e)
    }
}
