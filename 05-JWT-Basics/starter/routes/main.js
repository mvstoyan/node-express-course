const express = require('express')
const router = express.Router()

const { login, dashboard } = require('../controllers/main')

const authMiddleware = require('../middleware/auth')


// The /dashboard route is protected by the authMiddleware function 
// and is only accessible to authenticated users, while the /login 
// route is accessible to all users and is used to handle user authentication.
router.route('/dashboard').get(authMiddleware,dashboard)
router.route('/login').post(login)

module.exports = router