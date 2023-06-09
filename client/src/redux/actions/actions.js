import axios from "axios";


/*ACTIONS TYPES*/
import { GET_COUNTRIES , GET_COUNTRY, GET_ACTIVITIES, POST_ACTIVITY, RESET_FILTERS,SET_CONTINENT_FILTER,SET_POPULATION_FILTER,SET_ALPHABETICAL_FILTER } from "./types.js";




/************************************************************** */


export const getCountries = () => {
    return async function(dispatch) {
        const serverData = await axios.get("/countries");  //<--- Todos los paises
        
        const countries = serverData.data;
        
        dispatch({ type: GET_COUNTRIES, payload: countries });
    }
};


/************************************************************** */


export const getCountry = (id) => {
    return async function(dispatch) {
        const serverData = await axios.get(`/countries/${id}`); //<--- Un pais en particular

        const country = serverData.data;
        dispatch({ type: GET_COUNTRY, payload: country });
    }
};


/************************************************************** */


export const getActivities = () => {
    return async function(dispatch) {
        const serverData = await axios.get("/activities"); //<--- Todas las actividades

        const activities = serverData.data;
        dispatch({ type: GET_ACTIVITIES, payload: activities });
    }
}


/************************************************************** */


export const postActivity = (formulario) => {
    return async function(dispatch) {
        try {
            const serverData = await axios.post("/activities", formulario);
            const newActivity = serverData.data;
            dispatch({ type: POST_ACTIVITY, payload: newActivity });
        } catch (error) {
            console.error(error);
        }
    }
}


/************************************************************** */


export const setContinentFilter = (continent) => ({
  type: SET_CONTINENT_FILTER,
  payload: continent,
});



/************************************************************** */


export const setPopulationFilter = (order) => ({
  type: SET_POPULATION_FILTER,
  payload: order,
});


/************************************************************** */


export const setAlphabeticalFilter = (order) => ({
  type: SET_ALPHABETICAL_FILTER,
  payload: order,
});


/************************************************************** */


export const resetFilters = () => ({
  type: RESET_FILTERS,
});