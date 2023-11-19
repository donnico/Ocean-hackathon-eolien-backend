const express = require('express')
const router = express.Router()
const vote = require('../controller/voteController');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('vote Time: ', Date.now())
  next()
})

router.post('/submit', vote.submit)
router.get('/results/:userId', vote.getVotes)

module.exports = router