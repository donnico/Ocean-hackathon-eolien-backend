const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('vote Time: ', Date.now())
})

router.post('/vote', (req, res) => {

})
router.get('/votes', (req, res) => {

})

module.exports = router