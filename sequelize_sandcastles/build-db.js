let sequelize = require('sequelize');
let queryInterface = require('sequelize/lib/query-interface');

((queryInterface) =>{
  const app = require('./app'); //make sure you are exporting app after attaching the necessary pieces in app.js!
  const models = app.get('models');
  return models.sequelize.sync({force: true})
  .then((queryInterface)=>{
  })
  .catch((err)=>{
  console.log('this shouldnt happen');
  })
})();