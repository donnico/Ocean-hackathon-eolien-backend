const { DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('ocean-hackathon-eolien', 'postgres', 'ocean', {
//     host: 'localhost',
//     dialect: 'postgres'
//   });

class User extends Model {}

module.exports = (sequelize, Sequelize) => {
  
  
  User.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
  });
  

  User.prototype.verifyPassword = function (enteredPassword) {
    return enteredPassword === this.password
  }

  return sequelize.models.User;
}