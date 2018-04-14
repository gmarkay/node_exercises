'use strict';
module.exports = (sequelize, DataTypes) => {
  var SharkType = sequelize.define('SharkType', {
    name: DataTypes.STRING,
  }, {});
  SharkType.associate = function (models) {
    // associations can be defined here
    SharkType.hasMany(models.Shark, {
      foreignKey: 'shark_type_id'
    })

  };
  return SharkType;z
};