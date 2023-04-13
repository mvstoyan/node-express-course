const {CustomAPIError} = require('../errors')
const {StatusCodes} = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  // err instanceof checks if the error that occurred is a specific type of error that is defined 
  // by the application developer. If it is a custom error, then the middleware function can provide 
  // more relevant and helpful information to the user about what went wrong. 
  // From http-status-codes for example  413 Request Entity Too Large
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  // if no - false. the middleware function cannot determine the specific type of error that occurred, 
  // and it will handle the error as a generic or catch-all error - 'Something went wrong try again later'
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware
