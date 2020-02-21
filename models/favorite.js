module.exports = function(sequelize, DataTypes) {
  var Favorite = sequelize.define('Favorite', {
    breweryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Favorite;
};
