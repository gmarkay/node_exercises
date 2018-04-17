'use strict';
module.exports = (sequelize, DataTypes) => {
  var Castle = sequelize.define('Castle', {
    description: DataTypes.STRING
  }, {});
  Castle.associate = function (models) {
    Castle.belongsTo(models.Tool, {
      foreignKey: "toolId"
    })
  };
    Castle.associate = function(models){
      Castle.belongsTo(models.Beach, {
        foreignKey: "BeachId"
    })
  };
  return Castle;
};

