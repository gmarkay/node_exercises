const sqlite = require('sqlite3').verbose();
const faker = require('faker');
const db = new sqlite.Database('programs.sqlite');
(buildTable = () => {
  return new Promise((resolve, reject) => {
    db.run(`DROP TABLE IF EXISTS programs`)
      .run(`CREATE TABLE IF NOT EXISTS programs(
        program_id INTEGER PRIMARY KEY,
        seats INTEGER,
        instructor TEXT,
        start_date TEXT,
        end_date TEXT,
        category TEXT
    )`
  );
  for(i=0; i <14; i++){
    db.run(`INSERT INTO programs VALUES(
      null,
      ${faker.random.number({min:5, max:25})},
      "${faker.name.firstName()+' '+ faker.name.lastName()}",
      "${faker.date.past()}",
      "${faker.date.future()}",
      "${faker.company.bsNoun()}"
    )`)
  }
  }), (err, table) => {
      if (err) return resolve(err);
      resolve(table)
    }

})();

