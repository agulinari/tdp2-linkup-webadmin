var _ = require('lodash');
const request = require('request');


exports.getactive = function(req, result) {
  
  var url = 'https://linkuptdp.herokuapp.com/stat/user/activity';
  var query = {from:req.query.from, to:req.query.to};
     

  request({url:url, qs:query, json:true}, (err, res, body) => {
    if (err) { 
      return handleError(result, err);
    }
    else {
      return result.status(200).json(body);
    }
  }); 

};

exports.getbanned = function(req, result) {
  
  var url = 'https://linkuptdp.herokuapp.com/stat/user/ActiveStatus'

  request({url:url, json:true}, (err, res, body) => {
    if (err) { 
      return handleError(result, err);
    }
    else {
      return result.status(200).json(body);
    }
  }); 

};

exports.getbandetail = function(req, result){
  var url = 'https://linkuptdp.herokuapp.com/stat/user/ActiveStatus/PremiumStatus';
  var query = {isActive:req.query.isActive};

  request({url:url, qs:query, json:true}, (err, res, body) => {
    if (err) { 
      return handleError(result, err);
    }
    else {
      return result.status(200).json(body);
    }
  }); 
};

exports.getabuses = function(req, result) {

  var url = 'https://linkuptdp.herokuapp.com/stat/AbuseReport'
  var query = {from:req.query.from, to:req.query.to};

  request({url:url, qs:query, json:true}, (err, res, body) => {
    if (err) { 
      return handleError(result, err);
    }
    else {
      return result.status(200).json(body);
    }
  }); 
  
};


// Error function
function handleError(res, err) {
  console.log(err);
  return res.status(500).json(err);
}