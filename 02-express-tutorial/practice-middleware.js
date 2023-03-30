const express = require('express')

const consoleLog = (req, res, next) => {
    console.log("It works well")
    next()
}

module.exports = consoleLog