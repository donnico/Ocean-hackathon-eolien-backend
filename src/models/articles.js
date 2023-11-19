const { DataTypes, Model } = require('sequelize');

class Article extends Model {}

module.exports = (sequelize, Sequelize) => {
  
  Article.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // the value of the vote, true is agree false is disagree and null no vote
    title: {
      type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.TEXT
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Article' // We need to choose the model name
  });

  return sequelize.models.Article;
}