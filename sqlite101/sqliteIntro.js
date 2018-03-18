const { Database } = require('sqlite3').verbose();

const db = new Database('employees.sqlite', () =>

  console.log('Database Engaged'));
const errorHandler = (err) => {
  if (err) console.log(`NOTICE: ${err}`)
}

db.run("CREATE TABLE IF NOT EXISTS employees(id INT, first TEXT, last TEXT)", errorHandler);

db.run("INSERT INTO employees(id, first, last) VALUES(1, 'Shloop', 'McGoop')", errorHandler);

db.run("INSERT INTO employees VALUES(2, 'Floppy', 'Flipper')", errorHandler);

const employeeArray = [
  { id: 3, firstName: 'Dwight', lastName: 'Schrute' },
  { id: 4, firstName: 'Andy', lastName: 'Bernard' },
  { id: 5, firstName: 'Pam', lastName: 'Beesly' }
];
employeeArray.forEach((emp) => {
  db.run(`INSERT INTO employees VALUES(${emp.id}, '${emp.firstName}', '${emp.lastName}')`)
})

db.all("SELECT * FROM employees", (err, allRows) => {
  errorHandler(err);
  allRows.forEach(row => {
    console.log(row.id, row.first + ' ' + row.last);
  });
});

db.close(err => {
  errorHandler(err);
  console.log('Datebase over');
});