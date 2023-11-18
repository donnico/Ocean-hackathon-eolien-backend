const db = require("../models");
const User = db.users;
// const where = db.Sequelize.where;

async function findUserByEmail(email) {
    try {
        users = await User.findAll({ where: {email: email} })
        return (users instanceof Array) ? users[0] : null;
    }
    catch (ex) {
        throw ex;
    }
}

exports.register = (req, res) => {
    console.log(req.body)
    if(!req.body.email, !req.body.password, !req.body.isAdmin) {
        res.status(400).send({
            message: 'Please provide all the fields.'
        });
        return;
    }

    // Create the User Record
    const newUser = {
        isAdmin: req.body.isAdmin,
        email: req.body.email,
        password: req.body.password
    }

    User.create(newUser)
    .then(data => {
      res.send({
          message: "Signup Successful!"
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

exports.login = async (req, res) => {
    console.log(req.body);
    if(!req.body.email, !req.body.password) {
        res.status(400).send({
            message: 'Please provide all the fields.'
        });
        return;
    }

    // Log in
    user = await findUserByEmail(req.body.email);
    if(user == null || !(user instanceof User)) {
        res.status(403).send({
            message: "Invalid Credentials!"
        });
    } else {
        if(user.verifyPassword(req.body.password)) {
            res.status(200).send({
                message: "Login Successful",
                isAdmin: user.isAdmin
            })
        } else {
            res.status(403).send({
                message: "Invalid Credentails!"
            });
        }
    }
}