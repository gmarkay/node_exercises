'use strict';
module.exports = (sequelize, DataTypes) => {
  var Shark = sequelize.define('Shark', {
    name: DataTypes.STRING,
    eats_humans: DataTypes.BOOLEAN,
  }, {});
  Shark.associate = function(models) {
    Shark.belongsTo(models.Beach, {
      foreignKey: "beachId",
      onDelete:"CASCADE"
    });
    Shark.belongsTo(models.SharkType,{
      foreignKey: "sharkTypeId"
    })
  };
  return Shark;
};