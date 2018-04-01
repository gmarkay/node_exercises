const sqlite = require('sqlite3');
const db = new sqlite.Database('programs.sqlite');

module.exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * from programs`,
      (err, prog) => {
        if (err) return reject(err);
        resolve(prog);
      });
  });
}

module.exports.getOne = () => {

}
module.exports.delete = () => {

}
module.exports.create = () => {

}