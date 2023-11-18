const { DataTypes, Model } = require('sequelize');

class Vote extends Model {}


module.exports = (sequelize, Sequelize) => {
  
  Vote.init({
    // Model attributes are defined here
    userId: {
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

  return sequelize.models.Vote;
}