const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const handleError = require('../middleware/handleError')
const pool = require('../config/db')

exports.getRandomQuestion = async (req, res, next) => {
    try {
        const randQuestion = await pool.query('SELECT * FROM questions ORDER BY RANDOM() LIMIT 1')
        res.json(randQuestion.rows)
    } catch (e) {
        handleError(e)
    }
}

exports.getCurrentUser = async (req, res, next) => {
    try {
    } catch (e) {}
}

exports.loginUser = async (req, res, next) => {
    const { username, password } = req.body

    try {
        const dbResponse = await pool.query('SELECT * FROM users WHERE username=$1', [username])
        const user = {
            userId: dbResponse.rows[0].user_id,
            username: dbResponse.rows[0].username,
            email: dbResponse.rows[0].email,
            password: dbResponse.rows[0].password,
        }
        console.log(process.env.JWT_SECRET)
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                res.status(401).json({ message: 'Authentication failed' })
            } else {
                const token = jwt.sign(
                    {
                        username: username,
                        userId: user.user_id,
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: '3h' }
                )

                res.status(200).json({
                    message: 'Authentication successful',
                    token: token,
                })
            }
        })
    } catch {
        res.status(401).json({ message: 'Authentication failed' })
    }
}

exports.registerUser = async (req, res, next) => {
    let { username, email, password } = req.body

    const hashPassword = async (password, saltRounds = 10) => {
        try {
            const salt = await bcrypt.genSalt(saltRounds)
            return await bcrypt.hash(password, salt)
        } catch (e) {
            handleError(e)
        }
    }
    password = await hashPassword(password)
    try {
        const newUser = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
            [username, email, password]
        )

        if (newUser) {
            res.json({
                'User registered: ': newUser.rows[0],
            })
        }
    } catch {
        res.status(500).json({ message: 'Email or username already taken' })
    }
}
/*
    const checkDbExistance = async (column, reqVal) => {
    const response = await pool.query('SELECT * FROM users WHERE $1=$2', [column, reqVal])
    return response.rowCount > 0 ? true : false
}

const emailExists = await checkDbExistance('email', email)
const usernameExists = await checkDbExistance('username', username)
*/

/*  bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.status(500).json({ message: err })
        } else {
            password = hash
        }
    }) */
