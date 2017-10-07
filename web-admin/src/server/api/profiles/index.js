// Import extensions
var express = require('express'),
	controller = require('./profile.controller');
// Define router
var router = express.Router();
// Define routes
router.get('/', controller.index);
router.get('/:id', controller.show);

// Export module
module.exports = router;