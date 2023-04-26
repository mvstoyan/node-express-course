const jwt = require('jsonwebtoken')

exports.logon = (req, res) => {
  const { name, password } = req.body
  const token = jwt.sign({ name }, process.env.JWT_SECRET, { expiresIn:'24h' })
  res.json({ token })
}

exports.hello = (req, res) => {
  const { name } = req.user
  res.json({ msg: `Hello, ${name}!` })
}