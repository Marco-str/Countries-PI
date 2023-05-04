
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const FCheckbox = () => {

  /***************************************************** */


   const continent = useSelector((state) => state.continent);

   const [selectedContinent, setSelectedContinent] = useState("");
   const [filteredCountries, setFilteredCountries] = useState([]);


   
   const filterCountries = () => {
     const filtered = continent.filter(
       (continent) => continent.continent === selectedContinent
       );
       setFilteredCountries(filtered);
      };
      
      
      
  const changeHandler = (event) => {
       setSelectedContinent(event.target.value);
   };

   const submitHandler = (e) => {
    e.preventDefault()
    buscar(search)
    setSearch('')
}


/***************************************************** */



  //  const [categories, setCategories] = useState("");

  //  useEffect(  async () => {
  //   await axios.get("http:localhost:3001/countries")
  //    .then((response) => response.json())
  //    .then((data) => setCategories(data));
  //  }, [categories]);
  //  console.log(categories);


/*********************************** CHECK BOX DE FILTRADO *************************************************** */
  return (
    <>

   
      <div>

        <input type="checkbox" name="continent" value="Asia" onChange={changeHandler} onClick={submitHandler} />
          <label> Asia</label>


        <input
          type="checkbox" name="continent" value="Africa" onChange={changeHandler} onClick={submitHandler} />
          <label> Africa</label>


        <input type="checkbox" name="continent" value="America" onChange={changeHandler} onClick={submitHandler} />
          <label> America</label>

        <input  type="checkbox"   name="continent"  value="Europe" onChange={changeHandler} onClick={submitHandler} />
          <label> Europe</label>


        <input  type="checkbox"  name="continent"  value="Oceania" onChange={changeHandler} onClick={submitHandler} />
         <label> Oceania</label>


        <input  type="checkbox"   name="continent"  value="Antartida"   onChange={changeHandler} onClick={submitHandler} />
          <label> Antartida</label>

      </div>


               <button onClick={filterCountries}>Filtrar</button>


{/* /***************************************************** ***************************************************** */}


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
