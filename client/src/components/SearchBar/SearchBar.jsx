

import { useState, useEffect } from 'react';
import axios from 'axios';


import Card from '../Card/Card';

import style from "./SearchBar.module.css"


const SearchBar = () => {

    /* Boton de regreso */
  
   const reset = () => {

   return window.location.reload();
 }

    /*** Por Nombre */
    const [country, setCountry] = useState([])
    
    const [search, setSearch] = useState('')


    const buscar = (search) => {
        if (search === '') {
            alert('Ingrese un país')
        }
        else {

            axios.get(`http://localhost:3001/countries?name=${search}`)
            .then(res => {
                setCountry(res.data)
            })
            .catch(err => console.log(err))
        }
    }


    
    const handleChange = (e) => {
        setSearch(e.target.value)
        
    }

    const submitHandler = (e) => {
        e.preventDefault()
        buscar(search)
        setSearch('')
    }



    return(
        <>


        <div>
            <br />
            <br />
        </div>
                <input type="text" className={style.form__search} placeholder='Buscar info' value={search} onChange={handleChange}/>
                <input type="submit" className={style.form__submit} value="Buscar" onClick={submitHandler}/>
        





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
                estadoSoberanoIndependiente={elemento.estadoSoberanoIndependiente}
                 />
                 
                ) })} 
            </div>
       
       
            {
            Object.keys(country).length > 0
            ? ( <input type="submit" class={style.form__submit} onClick={reset} value="Reset"/>) 
            : null
            }
           
       
        </>
    )
};

export default SearchBar;