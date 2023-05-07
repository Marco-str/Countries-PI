
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import brujula from "../../Imagenes/compass-needle-5024_256.gif"


/*REdux*/
import { useSelector } from "react-redux";
import { useState } from "react";






const CardsContainer = () => {


/***************************************PAGINADO** **************************************************************/

const countries= useSelector(state=>state.countries)







/************************************************************************************************************** */


const filters = useSelector((state) => state.filters);

const filteredCountries = countries.filter((country) => {
    if (filters.continent && country.continente !== filters.continent) {
      return false;
    }
    return true;
  });

  const sortedCountries = filteredCountries.sort((a, b) => {
    if (filters.population === "Ascendente") {
      return a.poblacion - b.poblacion;
    }
    if (filters.population === "Descendente") {
      return b.poblacion - a.poblacion;
    }
    if (filters.alphabetical === "A-Z") {
      return a.name > b.name ? 1 : -1;
    }
    if (filters.alphabetical === "Z-A") {
      return b.name > a.name ? 1 : -1;
    }
    return 0;
  });


 
/************************* PAGINADO por cantidad de PAISES***********************/


/**** ************************PAGINADO SEGUN CHEPETE*************************** */

const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(0);

  const visibleCountries = sortedCountries.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    if ((currentPage + 1) * itemsPerPage < sortedCountries.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
            return(

                <div className={style.cardsContainer}>
                   
        
            { 

            !sortedCountries.length 
            ?    <div><h1>Cargando Vista.....</h1>
                 <img src={brujula} alt="cargando" /> </div>
            
            : visibleCountries.map(elemento=> {
                return( <Card 

              

                id={elemento.id}
                name={elemento.name}
                flag={elemento.img}
                continente={elemento.continente}
                capital={elemento.capital}
                subregion={elemento.subregion}
                area={elemento.area}
                poblacion={elemento.poblacion}

                 />
                 
                ) 
                 })
            }
        
        <div className={style.boton}>
           
            <input type="submit" class={style.form__submit} onClick={prevPage} value="Página Anterior"/>
            <input type="submit" class={style.form__submit} onClick={nextPage} value="Próxima Página"/>

            
                        
            </div>
                    
        </div>
        
       
    )
}

export default CardsContainer;