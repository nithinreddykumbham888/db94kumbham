var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let query = req.query 
console.log(`rows ${query.rows}`) 
console.log(`cols ${query.cols}`) 
res.render('addmods', { title: 'Add Mods', query: query });
});

module.exports = router;



// Part 7: Working with query strings in the pug engine 
// 1) Our goal is to make a table with the given number of rows and columns where each 
// cell adds the row and column and mods by the number of rows. We use 0 based 
// indexing on row/col number.  For a 4 by 5 we expect 
// 0 1 2 3 0 
// 1 2 3 0 1 
// 2 3 0 1 2  
// 3 0 1 2 3 
// 2) We passed the query arguments into pug, and the values will always be strings.  So we 
// need to do a conversion. 
// 3) Do a paragraph where you show the values of query.rows and query.cols. Use #{} 
// string interpolation. 
// 4) Do two unbuffered lines where you set rows to Number(query.rows) and col to 
// Number(query.cols).  Number will do its best to convert the string to a number.  The 
// result could be a NaN, which surprisingly is a number. 
// 5) We now want to kick out anything which is not an integer.  We start with an 
// unbuffered if (no need to put a -) and check to see if we don’t have an integer. To see 
// if row is an integer, we can use the condition Number.isInteger(rows). If either rows or 
// cols is not an integer do a paragraph and report the problem. 
// 6) We want to kick out and values that are too big or too small.  We are going to restrict 
// ourself to rows/cols in the range of 1 to 6. 
// 7) Use an unbuffered else if to check for rows out of range. Do a paragraph if this is the 
// case and report the issue.  