const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
  });

class Vote extends Model {}

Vote.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  // the value of the vote, true is agree false is disagree and null no vote
  value: {
    type: DataTypes.BOOLEAN
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Vote' // We need to choose the model name
});

// the defined model is the class itself
console.log(Vote === sequelize.models.Vote); // true