const ERROR = {
  400: "Bad Request",
  401: "The token expires",
  404: "Not Found",
  403: "forbidden",
  418: "I'm a teapot!", // :D
  500: "Internal Server Error",
  502: "Bad Gateway",
  503: "Service Unavailable"
}
function errorCodes(code){
  return {
    send:function(req, res){
      res.status(code).send("<h1><b>" + code +" "+ ERROR[code] + "</b></h1>");
    }
  }
}
module.exports = errorCodes;