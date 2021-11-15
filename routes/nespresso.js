var express = require('express');
const nespresso_controlers= require('../controllers/nespresso'); 
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nespresso', { title: 'Search Results Nespresso' });
});

/* GET detail nespresso page */ 
router.get('/detail', nespresso_controlers.nespresso_view_one_Page); 
 
/* GET create nespresso page */ 
router.get('/create', nespresso_controlers.nespresso_create_Page); 

/* GET create update page */ 
router.get('/update', nespresso_controlers.nespresso_update_Page); 

/* GET create nespresso page */ 
router.get('/delete', nespresso_controlers.nespresso_delete_Page); 
 

/* GET nespressos */ 
router.get('/', nespresso_controlers.nespresso_view_all_Page ); 
module.exports = router;

// 6) Make a copy of index.js and rename it to correspond to the class. 
//- 7) Modify it to render the correct pug.  Change the title to “Search Results” followed by 
//- your class. 
//- 8) Inside the app.js add in an endpoint to correspond to the class. 
//- 9) Restart the local heroku server and verify that the new endpoint works. 
//- 10) Add, Commit and Push to origin main. M, N

// var express = require('express'); 
// const costume_controlers= require('../controllers/costume'); 
// var router = express.Router(); 
 
// /* GET costumes */ 
// router.get('/', costume_controlers.costume_view_all_Page ); 
// module.exports = router; 