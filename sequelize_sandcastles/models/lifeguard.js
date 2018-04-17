'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lifeguard = sequelize.define('Lifeguard', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
  }, {});
  Lifeguard.associate = function (models) {
    Lifeguard.belongsToMany(models.Beach, {
      as: 'beachGuard',
      through: 'BeachGuard'
    })

  };
  return Lifeguard;
};