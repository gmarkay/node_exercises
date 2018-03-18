const { Database } = require('sqlite3').verbose();
const faker = require('faker');

const db = new Database('employees.sqlite', () =>

  console.log('Database Engaged'));
db.run('DROP TABLE IF EXISTS employees')
  .run("CREATE TABLE IF NOT EXISTS employees(id INT, firstName TEXT, lastName TEXT, jobTitle TEXT, address TEXT)");



const employees = [
  { id: 1, firstName: `${faker.name.firstName()}`, lastName: `${faker.name.lastName()}`, jobTitle: `${faker.name.jobTitle()}`, address: `${faker.address.streetAddress()}` },
  { id: 2, firstName: `${faker.name.firstName()}`, lastName: `${faker.name.lastName()}`, jobTitle: `${faker.name.jobTitle()}`, address: `${faker.address.streetAddress()}` },
  { id: 3, firstName: `${faker.name.firstName()}`, lastName: `${faker.name.lastName()}`, jobTitle: `${faker.name.jobTitle()}`, address: `${faker.address.streetAddress()}` },
  { id: 4, firstName: `${faker.name.firstName()}`, lastName: `${faker.name.lastName()}`, jobTitle: `${faker.name.jobTitle()}`, address: `${faker.address.streetAddress()}` },
  { id: 5, firstName: `${faker.name.firstName()}`, lastName: `${faker.name.lastName()}`, jobTitle: `${faker.name.jobTitle()}`, address: `${faker.address.streetAddress()}` },
  { id: 6, firstName: `${faker.name.firstName()}`, lastName: `${faker.name.lastName()}`, jobTitle: `${faker.name.jobTitle()}`, address: `${faker.address.streetAddress()}` },
  { id: 7, firstName: `${faker.name.firstName()}`, lastName: `${faker.name.lastName()}`, jobTitle: 'SQL dev', address: `${faker.address.streetAddress()}` },
  { id: 8, firstName: `${faker.name.firstName()}`, lastName: `${faker.name.lastName()}`, jobTitle: 'SQL dev', address: `${faker.address.streetAddress()}` },
  { id: 9, firstName: `${faker.name.firstName()}`, lastName: `${faker.name.lastName()}`, jobTitle: 'SQL dev', address: `${faker.address.streetAddress()}` }


];

employees.forEach((person) => {
  db.run(`INSERT INTO employees VALUES(${person.id}, '${person.firstName}', '${person.lastName}', '${person.jobTitle}', '${person.address}')`)

})



db.all("SELECT * FROM employees", (err, dbRows) => {
  dbRows.forEach(row => {
    console.log(`${row.id}: ${row.firstName} ${row.lastName}, ${row.jobTitle}, ${row.address}`);
  });
});

db.all("SELECT jobTitle FROM employees", (err, titles) => {
  titles.forEach(title => {
    console.log(title.jobTitle);
  });
});

db.all("SELECT firstName, lastName, address FROM employees", (err, info) => {
  info.forEach(jobholder => {
    console.log(`${thing.firstName} ${thing.lastName}, ${thing.address}`);
  });
});



db.all(`SELECT * FROM employees WHERE jobTitle="SQL dev"`, function (err, jobs) {
  jobs.forEach(jobholder => {
    console.log(`${jobholder.firstName} ${jobholder.lastName} is an SQL developer`);
  });
});
