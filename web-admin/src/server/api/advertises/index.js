// Import extensions
var express = require('express'),
	controller = require('./advertising.controller');
// Define router
var router = express.Router();
// Define routes
router.post('/', controller.post);
// Export module
module.exports = router;