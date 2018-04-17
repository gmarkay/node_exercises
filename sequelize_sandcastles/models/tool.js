'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tool = sequelize.define('Tool', {
    name: DataTypes.STRING
  }, {});
  Tool.associate = function(models) {
    Tool.hasMany(models.Castle), {
      foreignKey: "toolId"
    }

  };
  return Tool;
};