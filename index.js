const sqlite = require('sqlite3').verbose();

// --------------------------------------------------------------------------- open connection
// let db = new sqlite.Database(':memory:');
let db = new sqlite.Database('./db/data.db', (err) => { if (err) console.error(err.message); });

// --------------------------------------------------------------------------- do things

// ---------- select all
// let sql = `SELECT DISTINCT Name name FROM playlists ORDER BY name`;
// let params = [];
// db.all(sql, params, (err, rows) => {
//     if (err) return console.error(err.message);;
//     rows.forEach((row) => console.log(row.name));
// });

// ---------- select first row in the result set
// let sql = `SELECT PlaylistId id, Name name FROM playlists WHERE PlaylistId  = ?`;
// let playlistId = 1;
// db.get(sql, [playlistId], (err, row) => {
//     if (err) return console.error(err.message);
//     return row ? console.log(row.id, row.name) : console.log(`No playlist found with the id ${playlistId}`);
// });

// ---------- select rows with each() method
// let sql = `SELECT FirstName firstName, LastName lastName, Email email FROM customers WHERE Country = ? ORDER BY FirstName`;
// db.each(sql, ['USA'], (err, row) => {
//     if (err) throw err;
//     console.log(`${row.firstName} ${row.lastName} - ${row.email}`);
// });

// ---------- executing statement in serialized mode (sequencia)
// db.serialize(() => {
// // Queries scheduled here will be serialized.
//     db.run('CREATE TABLE greetings(message text)')
//     .run(`INSERT INTO greetings(message) VALUES('Hi'), ('Hello'), ('Welcome')`)
//     .each(`SELECT message FROM greetings`, (err, row) => {
//     if (err) throw err;
//         console.log(row.message);
//     });
// });

// ---------- executing statements in parallel (paralelo)
// db.parallelize(() => {
//     db.get('SELECT (? + ?) sum', [1, 1], (err, row) => { if (err) console.error(err.message); console.log(row.sum); });
//     db.get('SELECT (? + ?) sum', [2, 2], (err, row) => { if (err) console.error(err.message); console.log(row.sum); });
//     db.get('SELECT (? + ?) sum', [3, 3], (err, row) => { if (err) console.error(err.message); console.log(row.sum); });
//     db.get('SELECT (? + ?) sum', [4, 4], (err, row) => { if (err) console.error(err.message); console.log(row.sum); });
//     db.get('SELECT (? + ?) sum', [5, 5], (err, row) => { if (err) console.error(err.message); console.log(row.sum); });
// });

// --------------------------------------------------------------------------- close connection
db.close((err) => { if (err) return console.error(err.message); });