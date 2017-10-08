// Import extensions
var express = require('express'),
	controller = require('./abuse.controller');
// Define router
var router = express.Router();
// Define routes
router.get('/', controller.index);
router.get('/open', controller.getopen);
router.get('/closed', controller.getclosed);
router.get('/:id', controller.show);
router.put('/', controller.update);
// Export module
module.exports = router;
