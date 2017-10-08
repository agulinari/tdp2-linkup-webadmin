var _ = require('lodash');
const request = require('request');

// Get list of Items
exports.index = function(req, result) {

  request('https://linkuptdp.herokuapp.com/AbuseReport', { json: true }, (err, res, body) => {
    if (err) { 
      return handleError(result, err);
    }
    else {
      return result.status(200).json(body);
    }
  });
  
};

exports.getopen = function(req, result) {

  request('https://linkuptdp.herokuapp.com/AbuseReport/open', { json: true }, (err, res, body) => {
    if (err) { 
      return handleError(result, err);
    }
    else {
      return result.status(200).json(body);
    }
  });
  
};

exports.getclosed = function(req, result) {

  request('https://linkuptdp.herokuapp.com/AbuseReport/closed', { json: true }, (err, res, body) => {
    if (err) { 
      return handleError(result, err);
    }
    else {
      return result.status(200).json(body);
    }
  });
  
};

// Get a single user
exports.show = function(req, res) {
  var user = {}
  return res.status(200).json(user);
 
};

exports.update = function(req, result) {
  request({ url: 'https://linkuptdp.herokuapp.com/AbuseReport', method: 'PUT', json: req.body}, (err, res, body) => {
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
  return res.status(500).json(err);
}