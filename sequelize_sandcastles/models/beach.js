'use strict';
module.exports = (sequelize, DataTypes) => {
  var Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER
  }, {});
  Beach.associate = (models) => {
    // associations can be defined here
    Beach.hasMany(models.Lifeguard, {
      foreignKey: 'beachId'
    });
    Beach.hasMany(models.Shark, {
      foreignKey: 'beachId'
    })
  };
  return Beach;
};