// require express
var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.send('Desde things.js')
})

router.post('/', function (req, res) {
  res.send("You just called the post method at things.js'!\n")
})

module.exports = router
