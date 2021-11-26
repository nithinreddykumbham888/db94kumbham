var express = require('express');
const nespresso_controlers= require('../controllers/nespresso'); 
var router = express.Router();
var Account = require('../models/account'); 
var passport = require('passport'); 

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('nespresso', { title: 'Search Results Nespresso' });
// });

const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/nespresso/login"); 
} 

/* GET detail nespresso page */ 
router.get('/detail', nespresso_controlers.nespresso_view_one_Page); 
 
/* GET create nespresso page */ 
router.get('/create', nespresso_controlers.nespresso_create_Page); 

/* GET create update page */ 
router.get('/update',secured,nespresso_controlers.nespresso_update_Page); 

/* GET create nespresso page */ 
router.get('/delete', nespresso_controlers.nespresso_delete_Page); 
 

/* GET nespressos */ 
router.get('/', nespresso_controlers.nespresso_view_all_Page ); 

router.get('/', function (req, res) { 
  console.log(req.user)
  res.render('index', { title: 'Nespresso App', user : req.user }); 
}); 

router.get('/register', function(req, res) { 
  res.render('register', { title: 'Nespresso App Registration'}); 
}); 

router.post('/register', function(req, res) { 
Account.findOne({ username : req.body.username },  
  function(err, user) { 
    if(err) { 
      return res.render('register', { title: 'Registration',  
                message: 'Registration error', account : req.body.username }) 
    } 
    if(user == {} ){ 
      return res.render('register', { title: 'Registration',  
                 message: 'Existing User', account : req.body.username }) 
    } 
    let newAccount = new Account({ username : req.body.username }); 
    Account.register(newAccount, req.body.password, function(err, user){ 
      if (err) { 
        return res.render('register', { title: 'Registration',  
                  message: 'access error', account : req.body.username }) 
      } 
      if(!user){ 
        return res.render('register',{ title: 'Registration',  
                  message: 'access error', account : req.body.username }) 
      }  
      console.log('Sucess, redirect'); 
      res.redirect('/'); 
    }) 
  })    
}) 

router.get('/login', function(req, res) { 
  // console.log(req.user)
  res.render('login', { title: 'Nespresso App Login', user : req.user }); 
}); 

router.post('/login', passport.authenticate('local'), function(req, res) { 
  if(req.session.returnTo) 
      res.redirect(req.session.returnTo); 
  // console.log(req.user)
  res.render('index', { user : req.user });
   //res.redirect('/'); 
}); 

router.get('/logout', function(req, res) { 
  console.log("sdfhsfb")
  req.logout(); 
  res.redirect('/'); 
}); 

router.get('/ping', function(req, res){ 
  res.status(200).send("pong!"); 
}); 

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