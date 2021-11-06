var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nespresso', { title: 'Search Results Nespresso' });
});

module.exports = router;

// 6) Make a copy of index.js and rename it to correspond to the class. 
//- 7) Modify it to render the correct pug.  Change the title to “Search Results” followed by 
//- your class. 
//- 8) Inside the app.js add in an endpoint to correspond to the class. 
//- 9) Restart the local heroku server and verify that the new endpoint works. 
//- 10) Add, Commit and Push to origin main. M, N