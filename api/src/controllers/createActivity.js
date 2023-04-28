

/*************************************************************************************** */


    const { Tourist_activities } = require("../db")



    const createActivity = async (name, description, dificultad, duracion, temporada, CountryId) => {
        
        if (!name || !description || !dificultad || !duracion || !temporada || !CountryId) {
          throw new Error('Faltan parámetros obligatorios');
        }
      
        const newActivity = await Tourist_activities.create({
          name,
          description,
          dificultad,
          duracion,
          temporada: temporada.toLowerCase(),
         
        });
        await newActivity.addCountry(CountryId);
      
        return newActivity;
      };

    module.exports = {createActivity };

/*************************************************************************************** */
