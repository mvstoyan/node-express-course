const CustomAPIError = require('./custom-error')
const { StatusCodes } = require('http-status-codes')

// This code defines a custom error class named BadRequest that extends 
// another error class called CustomAPIError. It sets a statusCode property 
// to 400 to indicate that it's a bad request error. 
class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequest