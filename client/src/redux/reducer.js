import { GET_COUNTRIES, GET_COUNTRY, RESET_FILTERS, SET_CONTINENT_FILTER, SET_POPULATION_FILTER, SET_ALPHABETICAL_FILTER } from "./actions/types";

const initialState = {
  countries: [],
  filters: {
    continent: null,
    population: null,
    alphabetical: null
  }
}

const rootReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      };

    case GET_COUNTRY:
      return {
        ...state,
        countries: action.payload
      };

    case SET_CONTINENT_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          continent: action.payload
        }
      };
      
    case SET_POPULATION_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          population: action.payload
        }
      };
    case SET_ALPHABETICAL_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          alphabetical: action.payload
        }
      };
    case RESET_FILTERS:
      return initialState;
    default:
      return state;
  }
};

export default rootReducer;
