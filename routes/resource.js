var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var nespresso_controller = require('../controllers/nespresso'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Nespresso.  
router.post('/nespresso', nespresso_controller.nespresso_create_post); 
 
// DELETE request to delete Nespresso. 
router.delete('/resource/nespresso/:id', nespresso_controller.nespresso_delete); 
 
// PUT request to update Nespresso. 
router.put('/resource/nespresso/:id', nespresso_controller.nespresso_update_put); 
 
// GET request for one Nespresso. 
router.get('/nespresso/:id', nespresso_controller.nespresso_detail); 
 
// GET request for list of all Nespresso items. 
router.get('/nespresso', nespresso_controller.nespresso_list); 
 
module.exports = router; 