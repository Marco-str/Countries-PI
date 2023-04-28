

const { Op } = require("sequelize");


const { Country, Tourist_activities } = require("../db.js");


const  {createActivity}  = require('../controllers/createActivity.js');

const {countryById} = require('../controllers/findById.js');


//******************************************************************************* */


const getAllCountries = async (req, res) => { //<----- anda perfecto 1 y 3
 
  const { name } = req.query;
  try {
    if (req.query.name) {
      const name = req.query.name.toLowerCase();
      const countries = await Country.findAll({
        where: { name:
           { [Op.iLike]: `%${name}%` } },
      });
      if (countries.length === 0) {
        return res.status(404).send('No se encontraron países con ese nombre');
      }
      return res.status(200).json(countries);
    } else {
      const countries = await Country.findAll();
      return res.status(200).json(countries);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error en el servidor');
  }
};


//******************************************************************************* */

const getCountryById = async (req, res) => { //<----- anda perfecto 2
  const { id } = req.params;
  try {

    const country = await countryById(id);
    res.status(200).json(country);

  } catch (error) {
    res.status(500).send(error.message);
  }
};

  
//******************************************************************************* */


const postActivity = async (req, res) => { //<----- anda perfecto 4

  const { name, description, dificultad, duracion, temporada, CountryId } = req.body;
      
  try {
        const newActivity = await createActivity(name, description, dificultad, duracion, temporada, CountryId);
  
        res.status(201).json(newActivity);

      } catch (error) {

        res.status(400).send(error.message);
      }
    
};


//******************************************************************************* */


 const getActivities = async (req, res) => { //<----- anda perfecto 5
      try {
           const activity = await Tourist_activities.findAll();
             res.status(200).json(activity);
     } catch (error) {
                res.status(404).send(error.message);
            }
 };


//******************************************************************************* */


module.exports = {
    getAllCountries,
    getCountryById,
    postActivity,
    getActivities,
};

