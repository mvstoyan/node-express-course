class CustomAPIError extends Error {
  constructor(message) {
    super(message)
  }
}

module.exports = CustomAPIError

// This code can be used as a base class to create other custom 
// error classes that inherit the properties and methods of the CustomAPIError class. 
