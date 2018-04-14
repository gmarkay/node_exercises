'use strict';
module.exports = (sequelize, DataTypes) => {
  var SharkType = sequelize.define('SharkType', {
    name: DataTypes.STRING,
    }, {});
  SharkType.associate = function(models) {
    // associations can be defined here
    SharkType.belongsTo(models.Shark, {
      foreignKey:'sharkTypeId'
    })

  };
  return SharkType;
};