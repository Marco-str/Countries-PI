
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";


/*REdux*/
import { useSelector } from "react-redux";
import { useState } from "react";




const CardsContainer = () => {

    /**PAGINADO** */

    const [currentPage, setCurrentPage]= useState(0)
    
    const countries= useSelector(state=>state.countries)
    
    const filterCountries = countries.slice(currentPage, currentPage + 8)

    /*** PAGINADO */
    const nextPage = () => {
        if(currentPage <= countries.length - 8)
        setCurrentPage(currentPage + 8)
    }

    const prevPage = () => {
        if (currentPage > 0)
        setCurrentPage(currentPage - 8)
    }

            return(

                <div className={style.cardsContainer}>
                   
        
            
            {filterCountries.map(elemento=> {
                return( <Card 

              

                id={elemento.id}
                name={elemento.name}
                flag={elemento.img}
                continente={elemento.continente}
                capital={elemento.capital}
                subregion={elemento.subregion}
                area={elemento.area}
                poblacion={elemento.poblacion}
                estadoSoberanoIndependiente={elemento.estadoSoberanoIndependiente}

          
                
                 />
                 
                )
                 
                 })}
        
        <div className={style.boton}>
            
            <input type="submit" class={style.form__submit} onClick={prevPage} value="Página Anterior"/>
            <input type="submit" class={style.form__submit} onClick={nextPage} value="Próxima Página"/>
                        
            </div>
                    
        </div>
        
       
    )
}

export default CardsContainer;