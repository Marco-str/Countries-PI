

/*************************************************************************************** */



const { Country, Tourist_activities } = require('../db.js');

const { Op } = require("sequelize");



const countryById = async (id) => {

    const country = await Country.findOne({
        where: {
          id: {
            [Op.iLike]: `%${id}%`,
          },
        },
        include:{ 
          model: Tourist_activities,
          //atributes: [ "name", "description " , "dificultad" , "duracion" ," temporada" ,   "pais" ]
        }
      });
      return country;
}
     

 /*************************************************************************************** */
  


module.exports = { countryById }