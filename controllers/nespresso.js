var nespresso = require('../models/nespresso');

// List of all Nespresso 
exports.nespresso_list = async function (req, res) {
    try {
        theNespresso = await nespresso.find();
        console.log(theNespresso);
        res.send(theNespresso);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Nespresso. 
exports.nespresso_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await nespresso.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Nespresso create on POST. 
exports.nespresso_create_post = async function (req, res) {
    console.log(req.body)
    let document = new nespresso();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.nespresso_type = req.body.nespresso_type;
    document.country = req.body.country;
    document.price = req.body.price;
    console.log(document)
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Nespresso delete form on DELETE. 
exports.nespresso_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await nespresso.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle Costume update form on PUT. 
exports.nespresso_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await nespresso.findById(req.params.id)
        // if (req.body.checkbox) toUpdate.sale = true;
        // else toUpdate.sale = false;
        // Do updates of properties 
        if (req.body.nespresso_type) { toUpdate.nespresso_type = req.body.nespresso_type; }
        if (req.body.country) { toUpdate.country = req.body.country; }
        if (req.body.price) { toUpdate.price = req.body.price; }
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// VIEWS 
// Handle a show all view 
exports.nespresso_view_all_Page = async function (req, res) {
    try {
        theNespresso = await nespresso.find();
        res.render('nespresso', { title: 'Nespresso Search Results', results: theNespresso });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query 
exports.nespresso_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await nespresso.findById( req.query.id) 
        res.render('nespressodetail',  { title: 'Nespresso Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 


// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.nespresso_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('nespressocreate', { title: 'Nespresso Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for updating a costume. 
// query provides the id 
exports.nespresso_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await nespresso.findById(req.query.id) 
        res.render('nespressoupdate', { title: 'Nespresso Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.nespresso_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await nespresso.findById(req.query.id) 
        res.render('nespressodelete', { title: 'Nespresso Delete', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 

