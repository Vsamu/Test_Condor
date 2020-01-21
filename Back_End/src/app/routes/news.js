const connection = require('../../config/DbConnection');
const bodyParser = require('body-parser')

const app = require('express').Router();
var jsonParser = bodyParser.json()


var urlencodedParser = bodyParser.urlencoded({ extended: false })


//Request to Igumr
app.get('/', (req, res ) => { 
    console.log('query')
    connection.query('SELECT * FROM details_photos', (err, result) => {
        console.log(result)
        res.send(result);
    });
    
});


app.get('/OtherTaAl', (req, res ) => { 
    console.log('query')
    connection.query('SELECT Names_album FROM details_album', (err, result) => {
        console.log(result)
        res.send(result);
    });
    
});

// Request to search image by name
app.post('/name',jsonParser, (req, res ) => { 
    const value = req.body.name
    var util =require('util');
    console.log('este')
    mySql = util.format(`SELECT * FROM heroku_9471a4d9588bb3f.details_photos WHERE Name_photo='${value}'`);
    connection.query(mySql, function(err, result) {
        console.log(err)
        if(!err) {
            return res.send(result)
        } 
        return res.send({error:'error'})
    });
    
});
//API to add Album to photo by Id
app.post('/id',jsonParser, (req, res ) => { 
    const value_id = req.body.id
    const value_album = req.body.album
    var util =require('util');
    console.log('este')
    mySql = util.format(`UPDATE heroku_9471a4d9588bb3f.details_photos SET Album = '${value_album}' WHERE id_photo = ${value_id};`);
    connection.query(mySql, function(err, result) {
        console.log(res)
        if(!err) {
            return res.send({message:'Your image was added to'})
        } 
        return res.send({error:'error'})
    });
    
});



// API for add Image to heroku Db
app.post('/',jsonParser, (req, res) => {    
    const valor = req.body.imagen; 
    const value = req.body.name;    
    var util =require('util');
    var mySql = util.format(`INSERT INTO heroku_9471a4d9588bb3f.details_photos (End_point, Name_photo) VALUES ('${valor}', '${value}')`); 
    connection.query(mySql, function(err, result) {
        console.log(err)
        if(!err) {
            return res.send({message:'successfully'})
        } 
        return res.send({error:'error'})
    });
   
}); 

// Request to delete image in Db 
app.post('/delete',jsonParser, (req, res) => {    
    const value = req.body.imagen;         
    var util =require('util');
    var mySql = util.format(`DELETE FROM details_photos WHERE id_photo = '${value}'`); 
    connection.query(mySql, function(err, result) {
        console.log(result)
        if(!err) {
            return res.send({message:'successfully'});
        } 
        return res.send({error:'error'});
    });
   
}); 


//API to add Album to photo by Id
app.post('/tableAl',jsonParser, (req, res ) => { 
    const value_album = req.body.name    
    var util =require('util');
    console.log('este')
    mySql = util.format(`UPDATE heroku_9471a4d9588bb3f.details_album SET Names_album = '${value_album}'`);
    connection.query(mySql, function(err, result) {
        console.log(result)
        if(!err) {
            return res.send({message:'Your image was added to'})
        } 
        return res.send({error:'error'})
    });
    
});


// Request row wiht especific name of album
app.post('/album',jsonParser, (req, res ) => { 
    const value = req.body.name
    var util =require('util');
    console.log('este')
    mySql = util.format(`SELECT * FROM heroku_9471a4d9588bb3f.details_photos WHERE Album='${value}'`);
    connection.query(mySql, function(err, result) {
        console.log(err)
        if(!err) {
            return res.send(result)
        } 
        return res.send({error:'error'})
    });
    
});

module.exports = app;

