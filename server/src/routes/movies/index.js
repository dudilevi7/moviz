const express = require('express');
const router = express.Router()
const getMovies = require('./getMovies')

router.get('/', getMovies)

module.exports = router