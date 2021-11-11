var nespresso = require('../models/nespresso'); 
 
// List of all Nespresso 
exports.nespresso_list = async function(req, res) { 
    try{ 
        theNespresso = await nespresso.find(); 
        console.log(theNespresso);
        res.send(theNespresso); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Nespresso. 
exports.nespresso_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Nespresso detail: ' + req.params.id); 
}; 
 
// Handle Nespresso create on POST. 
exports.nespresso_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Nespresso create POST'); 
}; 
 
// Handle Nespresso delete form on DELETE. 
exports.nespresso_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Nespresso delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.nespresso_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Nespresso update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.nespresso_view_all_Page = async function(req, res) { 
    try{ 
        theNespresso = await nespresso.find(); 
        res.render('nespresso', { title: 'Nespresso Search Results', results: theNespresso }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
