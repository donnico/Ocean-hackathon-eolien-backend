const express = require('express');
const router = express.Router();
const article = require('../controller/articleController');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
router.get('/list', article.getArticles)
router.post('/submit', article.postArticle)
// router.post('/logout', account.logout)
// router.get('/profile', account.profile)
module.exports = router