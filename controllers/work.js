const dbManager = require('../private/db-manager');
const modelator = require('../private/modelator');
function getWork(req, res){

}
function getWorks(req, res){

}
function insertWork(req, res){
  let data = modelator("/work", req.body);
  let query = `INSERT INTO trabajos VALUES( ?, ${data.values().toString()})`;
  dbManager.executeSQL(query, (err, result)=>{
    return res.status(200).send(result);
  });
}
function updateWork(req, res){

}
function deleteWork(req, res){

}
module.exports = {
  getWork,
  getWorks,
  insertWork,
  deleteWork,
  updateWork
}