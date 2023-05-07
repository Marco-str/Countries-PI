import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  resetFilters,
  setContinentFilter,
  setPopulationFilter,
  setAlphabeticalFilter,
} from '../../redux/actions/actions';
import style from "./Filters.module.css";

const FCheckbox = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    continent: "",
    population: "",
    alphabetical: ""
  });


  function handleFilter(event) {
    event.preventDefault();
    setFilters({ ...filters, continent: event.target.value });
  }

  function handleOrderByPopulation(event) {
    event.preventDefault();
    setFilters({ ...filters, population: event.target.value });
  }

  function handleOrderByAlfabeto(event) {
    event.preventDefault();
    setFilters({ ...filters, alphabetical: event.target.value });
  }

  function resetCountriesButton() {
    dispatch(resetFilters());
    setFilters({ continent: "", population: "", alphabetical: "" })
    window.location.reload();
  }

  function applyFiltersButton() {
    dispatch(setContinentFilter(filters.continent));
    dispatch(setPopulationFilter(filters.population));
    dispatch(setAlphabeticalFilter(filters.alphabetical));
  }

  return (
    <>
      <div>
        <select name="order" defaultValue={"DEFAULT"} onChange={handleOrderByPopulation} className={style.form__search}>
          <option value="DEFAULT" disable>
            Ordenar por Cantidad de Poblacion
          </option>
          <option value="Ascendente">Orden Ascendente</option>
          <option value="Descendente">Orden Descendente</option>
        </select>

        <select name="order" defaultValue={"DEFAULT"} onChange={handleOrderByAlfabeto} className={style.form__search}>
          <option value="DEFAULT" disable>
            Ordenar por Orden Alfabetico
          </option>
          <option value="A-Z">Ordenar por orden alfabetico A-Z</option>
          <option value="Z-A">Ordenar por orden alfabetico Z-A</option>
        </select>

        <select name="filter" defaultValue={"DEFAULT"} onChange={handleFilter} className={style.form__search}>
          <option value="DEFAULT" disable>
            Ordenar por Continente
          </option>
          <option value="Americas">Americas</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europa</option>
          <option value="Asia">Asia</option> 
          <option value="Antarctic">Antartida</option>
          <option value="Oceania">Oceania</option> 
        </select>

        <button onClick={applyFiltersButton} class={style.form__submit}>Aplicar Filtro</button>
        <button onClick={resetCountriesButton} class={style.form__submit}>Borrar Filtro</button>
      </div>
    </>
  );
};

export default FCheckbox;
