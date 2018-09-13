const dbManager = require('./db-manager');
module.exports = function(req, res){
  let path = req.route.path.split("/")[1];
  if(!path)
    path = "index";
  if(req.method == "POST"){
    dbManager.executeSQL(req.body.sql, (err, results)=>{
      res.render("./"+path, {err, results});
    });
  }
  else return res.render("./"+path);
}