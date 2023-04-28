
const { Country } = require("../models/Country");

const getAllCountries = async (req, res) => {
    try{
        const allCountries = await Country.findAll()
   
        return res.json(allCountries)
    }
    catch(error){
        return {error : error.message}
    }
};

module.exports = {
    getAllCountries,
};