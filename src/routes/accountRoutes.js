const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
router.post('/register', (req, res) => {
    
})
router.post('/login', (req, res) => {

})
router.post('/logout', (req, res) => {

})
router.get('/profile', (req, res) => {

})
module.exports = router