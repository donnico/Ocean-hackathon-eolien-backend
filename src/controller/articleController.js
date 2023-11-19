const db = require("../models");
const Article = db.article;

async function getArticles() {
    try {
        articles = await Article.findAll()
        return (articles instanceof Array) ? articles : null;
    }
    catch (ex) {
        throw ex;
    }
}

exports.getArticles = async (req, res) => {
    articles = await getArticles();
    res.status(200).send(articles);
}

exports.postArticle = async (req, res) => {
    console.log(req.body)
    if(!req.body.title, !req.body.description, !req.body.content) {
        res.status(400).send({
            message: 'Please provide all the fields.'
        });
        return;
    }

    // Create the User Record
    const newArticle = {
        title: req.body.title,
        description: req.body.description,
        content: req.body.content
    }

    Article.create(newArticle)
    .then(data => {
        console.log(data);
      res.send({
          message: "your article was submitted"
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "some error occured while registering your article",
        errObj: err
      });
    });
}