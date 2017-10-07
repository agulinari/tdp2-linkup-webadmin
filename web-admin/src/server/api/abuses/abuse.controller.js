var _ = require('lodash');
const request = require('request');

// Get list of Items
exports.index = function(req, res) {
  var users = {data : [
            {reporter: 'Laurent', reported: 'Renard', date: new Date('1987-05-21'), reason: 'Fotos inapropiadas', comments: 'es menor de edad'},
            {reporter: 'Blandine', reported: 'Faivre', date: new Date('1987-04-25'), reason: 'Lenguaje abusivo', comments: 'Insultos'},
            {reporter: 'Francoise', reported: 'Frere', date: new Date('1955-08-27'), reason: 'Spam', comments: 'es un bot'},
            {reporter: 'Laurent', reported: 'Renard', date: new Date('1987-05-21'), reason: 'Fotos inapropiadas', comments: 'mal gusto'},
            {reporter: 'Blandine', reported: 'Faivre', date: new Date('1987-04-25'), reason: 'Lenguaje abusivo', comments: ''},
            {reporter: 'Francoise', reported: 'Frere', date: new Date('1955-08-27'), reason: 'Spam', comments: 'me envio un link con un virus'},
            {reporter: 'Laurent', reported: 'Renard', date: new Date('1987-05-21'), reason: 'Fotos inapropiadas', comments: 'publico fotos pornograficas'},
            {reporter: 'Blandine', reported: 'Faivre', date: new Date('1987-04-25'), reason: 'Lenguaje abusivo', comments: 'maltrato verbal'},
            {reporter: 'Francoise', reported: 'Frere', date: new Date('1955-08-27'), reason: 'Spam', comments: 'me manda links indeseados'},
            {reporter: 'Laurent', reported: 'Renard', date: new Date('1987-05-21'), reason: 'Fotos inapropiadas', comments: 'desnudo'},
            {reporter: 'Blandine', reported: 'Faivre', date: new Date('1987-04-25'), reason: 'Lenguaje abusivo', comments: 'me insulto en el chat'},
            {reporter: 'Francoise', reported: 'Frere', date: new Date('1955-08-27'), reason: 'Spam', comments: 'me envia publicidad constantemente'}
        ]};

 
  request('https://linkuptdp.herokuapp.com/AbuseReport', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
  
    console.log(body);
  });

  return res.status(200).json(users);
  
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