const sqlite = require('sqlite3');
const db = new sqlite.Database('programs.sqlite');

module.exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * from programs`,
      (err, progs) => {
        if (err) return reject(err);
        resolve(progs);
      });
  });
}

module.exports.getOne = (id) => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * from programs
    where program_id = ${id}`,
      (err, prog) => {
        if (err) return reject(err);
        resolve(prog);
      });
  });

}
module.exports.delete = () => {

}
module.exports.create = () => {

}