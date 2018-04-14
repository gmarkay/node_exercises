'use strict';
module.exports = (sequelize, DataTypes) => {
  var Shark = sequelize.define('Shark', {
    name: DataTypes.STRING,
    eats_humans: DataTypes.BOOLEAN,
    shark_type_id: DataTypes.INTEGER,
    beach_id: DataTypes.INTEGER
  }, {});
  Shark.associate = function(models) {
    Shark.belongsTo(models.Beach, {
      foreignKey: "beach_id",
      onDelete:"CASCADE"
    });
  };
  return Shark;
};