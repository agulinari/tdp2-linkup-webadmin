var _ = require('lodash');
const request = require('request');


exports.getactive = function(req, result) {
  var from = req.query.from;
  var to = req.query.to;

/*  request('https://linkuptdp.herokuapp.com/AbuseReport/open', { json: true }, (err, res, body) => {
    if (err) { 
      return handleError(result, err);
    }
    else {
      return result.status(200).json(body);
    }
  }); */

  var data = { 'data' : [
              [0, 0, 0, 0, 0, 0, 0],
              [28, 48, 40, 19, 86, 27, 90]
            ]};
        

  return result.status(200).json(data);
  
};

exports.getbanned = function(req, result) {

  var from = req.query.from;
  var to = req.query.to;
  var abuse = req.query.abuse;

  var data = { 'data' :[600, 400]};

  return result.status(200).json(data);
};

exports.getabuses = function(req, result) {
  var from = req.query.from;
  var to = req.query.to;
  
  var data = { 'data' :[300, 500, 100, 100]};
  return result.status(200).json(data);
};


// Error function
function handleError(res, err) {
  return res.status(500).json(err);
}