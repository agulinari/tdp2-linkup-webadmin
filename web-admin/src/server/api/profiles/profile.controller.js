var _ = require('lodash');
const request = require('request');

// Get list of Items
exports.index = function(req, result) {
 
  request('https://linkuptdp.herokuapp.com/user', { json: true }, (err, res, body) => {
    if (err) { 
      return handleError(res, err);
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


// Error function
function handleError(res, err) {
  return res.status(500).json(err);
}