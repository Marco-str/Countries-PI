
/*** Para la searchbar** */
import { useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';






import style from "./SearchBar.module.css"


const SearchBar = () => {


/****************************************** Boton de regreso********************************************************** */
  
   const reset = () => {

   return window.location.reload();
 }

/********************************************* Por Nombre **************************************************************/


    const [country, setCountry] = useState([])
    
    const [search, setSearch] = useState('')


    const buscar = (search) => {
        if (search === '') {
            alert('Ingrese un país')
        }
        else {

            axios.get(`/countries?name=${search}`)
            .then(res => {
                setCountry(res.data)
            })
            .catch(err => console.log(err))
        }
    }


/********************************************* MANEJADORES DE EVENTOS *****************************************************/ 


    const handleChange = (e) => {
        setSearch(e.target.value)
        
    }

    const submitHandler = (e) => {
        e.preventDefault()
        buscar(search)
        setSearch("")
    }


/********************************************* SEARCHBAR *****************************************************/

    return(
        <>

        <div>
            <br />
            <br />
        </div>


        <div className={style.searchContainer}>
                <input type="text" className={style.form__search} placeholder='Buscar info' value={search} onChange={handleChange}/>
                <input type="submit" className={style.form__submit} value="Buscar" onClick={submitHandler}/>
        </div>
        

{/* /********************************************* CARDS ***************************************************** */}


            <div className={style.cardsContainer}>
                  { country.map(elemento=> {
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
                 
                ) })} 
            </div>
       

{/* /********************************************* BOTON DE RESET ***************************************************** */}     

        {
            Object.keys(country).length > 0
            ? ( <input type="submit" class={style.form__submit} onClick={reset} value="Reset"/>)  // <-----| Si el objeto tiene mas de 0 keys, muestra el boton de reset
            : null
        }
           
       
        </>
    )
};

export default SearchBar;