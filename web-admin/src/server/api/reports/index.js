// Import extensions
var express = require('express'),
	controller = require('./reports.controller');
// Define router
var router = express.Router();
// Define routes
router.get('/activeusers', controller.getactive);
router.get('/abuses', controller.getabuses);
router.get('/bannedusers', controller.getbanned);
router.get('/bandetail', controller.getbandetail);

// Export module
module.exports = router;
