const { Router } = require('express');



const { 
     getAllCountries,
     getCountryById, 
     postActivity, 
     getActivities } = require('./userHandlers.js');


const router = Router();


router.get("/countries", getAllCountries ); //<----- anda perfecto todos los paises 1


router.get("/countries/:id", getCountryById); //<----- anda perfecto por id 2 


router.get("/countries", getAllCountries); //<----- anda perfecto por query 3


router.post("/activities", postActivity); //<-----anda perfecto para postear 4


router.get("/activities", getActivities); //<----- anda perfecto consultar actividades 5


module.exports = router;
