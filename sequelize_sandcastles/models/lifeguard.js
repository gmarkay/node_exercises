'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lifeguard = sequelize.define('Lifeguard', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    beach_id: DataTypes.INTEGER
  }, {});
  Lifeguard.associate = function(models) {
    Lifeguard.belongsTo(models.Beach, {
      foreignKey: "beach_id",
      onDelete:"CASCADE"
    })

  };
  return Lifeguard;
};