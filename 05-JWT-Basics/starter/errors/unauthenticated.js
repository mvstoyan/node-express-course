const CustomAPIError = require('./custom-error')
const { StatusCodes } = require('http-status-codes')

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = UnauthenticatedError


// defines a custom error class named UnauthenticatedError that extends another 
// custom error class called CustomAPIError. It sets a statusCode property to 401
// to indicate that it's an unauthorized error. 