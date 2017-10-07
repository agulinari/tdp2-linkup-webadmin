var _ = require('lodash');
const request = require('request');

// Get list of Items
exports.index = function(req, result) {
 
  request('https://linkuptdp.herokuapp.com/user', { json: true }, (err, res, body) => {
    if (err) { 
      return handleError(result, err);
    }
    else {
      return result.status(200).json(body);
    }
  });
  
  
};
// Get a single profile
exports.show = function(req, result) {
    request('https://linkuptdp.herokuapp.com/user/'+req.params.id, { json: true }, (err, res, body) => {
    if (err) { 
      return handleError(result, err);
    }
    else {
      return result.status(200).json(body);
    }
  });
 
};
// Get a single profile image
exports.image = function(req, result) {
    request('https://linkuptdp.herokuapp.com/image/'+req.params.id+'/'+req.params.index, { json: true }, (err, res, body) => {
    if (err) { 
      return handleError(result, err);
    }
    else {
      return result.status(200).json(body);
    }
  });
 
};

exports.update = function(req, result) {
  request({ url: 'https://linkuptdp.herokuapp.com/user', method: 'PUT', json: req.body}, (err, res, body) => {
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