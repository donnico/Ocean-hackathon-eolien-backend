const db = require("../models");
const User = db.user;
const Vote = db.vote;

async function findUserById(id) {
    try {
        users = await User.findAll({ where: {id: id} })
        return (users instanceof Array) ? users[0] : null;
    }
    catch (ex) {
        throw ex;
    }
}

async function findVotes() {
    try {
        votes = await Vote.findAll();
        return (votes instanceof Array) ? votes : null;
    }
    catch (ex) {
        throw ex;
    }
}

exports.submit = (req, res) => {
    console.log(req.body);
    if (!req.body.userId) {
        res.status(400).send({
            message: 'Please send all the field required'
        })
        return;
    }
    const newVote = {
        userId: req.body.userId,
        value: req.body.value
    }

    Vote.create(newVote)
    .then(data => {
        res.send({
          message: 'Your vote was submitted'
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while signing you up.",
        errObj: err
      });
    });
}

exports.getVotes = async (req, res) => {
    if (!req.params.userId) {
        res.status(400).send({message: 'Please send all the field required'});
        return;
    }
    user = await findUserById(req.params.userId);
    if(user == null || !(user instanceof User)) {
        res.status(403).send({
            message: "Not Allowed"
        });
        return;
    }
    if (user.isAdmin == false) {
        res.status(403).send({
            message: "Not Allowed"
        });
        return;
    }
    votesCount = await findVotes();
    
    var total = votesCount.length;
    var agree = votesCount.filter(el => el.dataValues.value == true).length;
    var disagree = votesCount.filter(el => el.dataValues.value == false).length;
    var dontknow = votesCount.filter(el => el.dataValues.value == null).length;
    res.status(200).send({
        total: total,
        agree: agree,
        disagree: disagree,
        dontknow: dontknow
    });
}

