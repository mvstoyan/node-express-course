const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

// This middleware function is typically used to protect routes that 
// require authentication, so only authenticated users can access them.

const authenticationMiddleware = async (req, res, next) => {
    // This code checks whether a request includes a valid 'Bearer' token in 
    // its Authorization header. If it does, the token is extracted for later use. 
    // If it doesn't, an error is thrown.
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnauthenticatedError('No token provided',401)
    }
    // splitting the string at the space character and taking the second part of the resulting array
    const token = authHeader.split(' ')[1]

    try{
        // This code block verifies and decodes the token and sets the req.user object with the decoded 
        // user information. If the token is invalid or cannot be decoded, it throws an error.
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const{id,username} = decoded
        req.user = {id,username}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Not authorized to access this route')
    }
}

module.exports = authenticationMiddleware