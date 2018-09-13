const sqlite = require('sqlite3');
const db = new sqlite.Database('data.db', (err) => {
      if (err) {
        return console.error(err.message);
      }
      db.run("PRAGMA foreign_keys = on");
});
function executeSQL(query, callback){
  db.all(query, (err, results) => {
    callback(err, results);
  });
}
function manage(instance, instruction, callback){
  
}
module.exports = {
  executeSQL,
  manage
}