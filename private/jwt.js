const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');
function createToken(user){
  let payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, config.SECRET_TOKEN);
}
function auth(token){
  let payload = jwt.decode(token, config.SECRET_TOKEN);
  if(payload.exp <= moment().unix()) {
    return "Token Expirado";
  }
  return payload;
}
module.exports = { 
  createToken,
  auth
}