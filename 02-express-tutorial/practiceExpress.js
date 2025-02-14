const express = require('express')
const path = require('path')
const middleware = require('./practice-middleware')

const app = express()

app.use(middleware)

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './new-public/index.html'))
  })
  
  app.get('/sample', (req, res) => {
    res.status(200).send('This is working.')
  })

  app.listen(3000, () => {
    console.log('server is listening on port 3000....')
  })
