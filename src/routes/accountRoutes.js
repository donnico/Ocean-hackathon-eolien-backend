const express = require('express');
const router = express.Router();
const account = require('../controller/accountController');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
router.post('/register', account.register)
router.post('/login', account.login)
// router.post('/logout', account.logout)
// router.get('/profile', account.profile)
module.exports = router