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
exports.nespresso_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Nespresso delete DELETE ' + req.params.id);
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
