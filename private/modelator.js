module.exports = function(modelName, body){
  let model = require("../models" + modelName);
  model.prototype.keys = function(){
    return Object.keys(this);
  }
  model.prototype.values = function(){
    return Object.values(this);
  }
  return new model(body);
}