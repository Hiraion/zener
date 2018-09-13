const dbManager = require('../private/db-manager');
const modelator = require('../private/modelator');
function getCustomer(req, res){
  dbManager.executeSQL(`SELECT nombre FROM customers WHERE id = ${req.params.id}`, (err, result)=>{
    return res.status(200).send(result);
  });
}
function getCustomers(req, res){
  dbManager.executeSQL('SELECT * FROM customers', (err, result)=>{
    return res.status(200).send(result);
  });
}
function insertCustomer(req, res){
  let data = modelator("/customer", req.body);
  let query = `INSERT INTO customers VALUES( ?, ${data.values().toString()})`;
  dbManager.executeSQL(query, (err, result)=>{
    return res.status(200).send(result);
  });
}
function updateCustomer(req, res){
  
}
function deleteCustomer(req, res){
  
}
module.exports = {
  getCustomer,
  getCustomers,
  insertCustomer,
  updateCustomer,
  deleteCustomer
}