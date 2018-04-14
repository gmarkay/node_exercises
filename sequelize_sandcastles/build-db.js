let sequelize = require('sequelize');
let queryInterface = require('sequelize/lib/query-interface');

const { beaches } = require('./seeders/data/beaches.json');
const { lifeguards } = require('./seeders/data/lifeguards.json');
const { sharkTypes } = require('./seeders/data/sharkTypes.json');
const { sharks } = require('./seeders/data/sharks.json');


((queryInterface) => {
  const app = require('./app'); //make sure you are exporting app after attaching the necessary pieces in app.js!
  const models = app.get('models');
  return models.sequelize.sync({ force: true })
    .then((queryInterface) => {
      return models.Beach.bulkCreate(beaches);
    })
    .then((queryInterface)=>{
      return models.Lifeguard.bulkCreate(lifeguards);
    })
    .then((queryInterface)=>{
      return models.SharkType.bulkCreate(sharkTypes);
    }).then((queryInterface)=>{
      return models.Shark.bulkCreate(sharks);
    })
    .catch((err) => {
      console.log(err, 'this shouldnt happen');
    })
})();