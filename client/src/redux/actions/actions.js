import axios from "axios";

//import { GET_COUNTRIES , GET_COUNTRY, GET_ACTIVITIES, POST_ACTIVITY, FILTER_COUNTRIES_BYID} from "./types.js";
export const GET_COUNTRIES = "GET_COUNTRIES";




/************************************************************** */


export const getCountries = () => {
    return async function(dispatch) {
        const serverData = await axios.get("http://localhost:3001/countries");  //<--- Todos los paises
        
        const countries = serverData.data;
        
        dispatch({ type: "GET_COUNTRIES", payload: countries });
    }
};


/************************************************************** */


// export const getCountry = (id) => {
//     return async function(dispatch) {
//         const serverData = await axios.get(`http://localhost:3001/countries/${id}`); //<--- Un pais en particular

//         const country = serverData.data;
//         dispatch({ type: "GET_COUNTRY", payload: country });
//     }
// };


/************************************************************** */


// export const getActivities = () => {
//     return async function(dispatch) {
//         const serverData = await axios.get("http://localhost:3001/activity"); //<--- Todas las actividades

//         const activities = serverData.data;
//         dispatch({ type: "GET_ACTIVITIES", payload: activities });
//     }
// }


/************************************************************** */


// export const postActivity = (activity) => {
//     return async function(dispatch) {
//         const serverData = await axios.post("http://localhost:3001/activity", activity); //<--- Crea una actividad

//         const newActivity = serverData.data;
//         dispatch({ type: "POST_ACTIVITY", payload: newActivity });
//     }
// }





/************************************************************** */


// export const filterCountriesByID = () => {
    
//         dispatch({type: "FILTER_COUNTRIES_BYID"});
        
    
// };

