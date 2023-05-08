 
 const axios = require('axios');

 const { Country } = require("../db"); //<-- es el destructuring de sequilize.models


 
const getApiData = async () => {

        try{
            const apiData = await axios ( 'https://restcountries.com/v3/all')

            const validCountries= []
            

            const apiDataMap = apiData.data.map((e) => {
                return {
                    id: e.cca3,
                    name: e.name.common,
                    img: e.flags[0],
                    continente: e.region,
                    capital: e.capital,
                    subregion: e.subregion,
                    area: e.area,
                    poblacion: e.population,
                    lenguajes: e.languages,
                    estadoSoberanoIndependiente: e.independent,
                    moneda: e.currencies

                }})
                 apiDataMap.forEach(e => {
                    if (e.name && e.id && e.continente && e.capital && e.poblacion) {
                        validCountries.push(e)
                        
                    }
                }) 

                return validCountries

                     } catch (error){

                        return {error : error.message}
                     }
            };


 const saveApiData = async () => {

        try{

            const allCountries = await getApiData();
             await Country.bulkCreate(allCountries);
            return allCountries ;
        }
        // nos permite pasarle un array de objetos y crearlos todos juntos en la DB
        catch (error){
            return {error : error.message}
        }

    }

    module.exports = {
        saveApiData, getApiData
    }

