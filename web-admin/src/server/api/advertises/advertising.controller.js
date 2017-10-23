var _ = require('lodash');
const request = require('request');

exports.post = function(req, result) {
  request({ url: 'https://linkuptdp.herokuapp.com/ad', method: 'POST', json: req.body}, (err, res, body) => {
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