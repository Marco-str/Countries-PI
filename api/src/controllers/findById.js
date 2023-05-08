

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
        }
      });
      return country;
}
     

 /*************************************************************************************** */
  


module.exports = { countryById }