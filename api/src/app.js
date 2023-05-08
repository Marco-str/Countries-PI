const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors =require('cors')
const routes = require('./routes/index.js');



const  getAllCountries  = require('./controllers/getAllCountries.js');


require('./db.js');

const server = express();

server.name = 'API';

/* MIDDLEWARES */
server.use(cors())
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://countries-pi-delta.vercel.app'); //"http://localhost:3001/" update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});




/* ROUTES */

server.use('/', routes);


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  res.status(status).send(message);
});

server.get("/" , (req, res) => {
  res.status(200).send("estoy en el archivo app.js y todo ok, aca deberia aparece el landig page")
})


// server.get('/countries',async (req, res) => {
//   try{
//         const allCountries = await getAllCountries();
//         console.log("estoy en el server y esto es lo q me traje de la base de datos", allCountries)
//         res.status(200).json(allCountries)
  
//   }catch(error){
 
//         res.status(404).send("hay algo mal q no ta bien")
//   } 
//   });


module.exports = server;
