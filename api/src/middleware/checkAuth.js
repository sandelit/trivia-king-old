const jwt = require('jsonwebtoken')

exports.checkAuth = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) res.status(401).json({ message: 'Auth failed' })
    try {
        jwt.verify(req.header('authorization'), process.env.JWT_SECRET)
        next()
    } catch (error) {
        // If JWT verification fails
        res.status(401).json({
            message: 'Authentication failed',
        })
    }
}
