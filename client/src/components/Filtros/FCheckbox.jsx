import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

const FCheckbox = () => {
  const countries = useSelector((state) => state.countries);

  const [selectedContinent, setSelectedContinent] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const changeHandler = (event) => {
    setSelectedContinent(event.target.value);
  };

  const filterCountries = () => {
    const filtered = countries.filter(
      (country) => country.continent === selectedContinent
    );
    setFilteredCountries(filtered);
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          name="continent"
          value="Asia"
          onChange={changeHandler}
        />
        <label> Asia</label>

        <input
          type="checkbox"
          name="continent"
          value="Africa"
          onChange={changeHandler}
        />
        <label> Africa</label>

        <input
          type="checkbox"
          name="continent"
          value="America"
          onChange={changeHandler}
        />
        <label> America</label>

        <input
          type="checkbox"
          name="continent"
          value="Europe"
          onChange={changeHandler}
        />
        <label> Europe</label>

        <input
          type="checkbox"
          name="continent"
          value="Oceania"
          onChange={changeHandler}
        />
        <label> Oceania</label>

        <input
          type="checkbox"
          name="continent"
          value="Antartida"
          onChange={changeHandler}
        />
        <label> Antartida</label>
      </div>

      <button onClick={filterCountries}>Filtrar</button>

      {filteredCountries.length > 0 ? (
        <div>
          <h2>Paises de {selectedContinent}:</h2>
          <ul>
            {filteredCountries.map((country) => (
              <li key={country.alpha2Code}>
                {country.name} ({country.alpha2Code})
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Selecciona un continente para filtrar los países</p>
      )}
    </>
  );
};

export default FCheckbox;
