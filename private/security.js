const errorCodes = require('./error-codes');
const jwt = require('./jwt');
const devmode = true;
function ensureAuthenticated(req, res, next) {
  if(devmode)
    return next();
  if(!req.headers.authorization) {
    return errorCodes(403).send(req, res);
  }
  let token = req.headers.authorization.split(" ")[1];
  next();
}
function tokenTest(req, res){
  let user = {
  _id: "a5h49"
  }
  return res.send(jwt.createToken(user));
}
module.exports = {
  ensureAuthenticated,
  tokenTest
}

/*

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  
*/