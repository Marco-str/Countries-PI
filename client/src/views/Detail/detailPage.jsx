
import React, { useEffect , useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


/*Estilo del Pagina Detalle*/
import style from './DetailPage.module.css'




const Detail = () =>{

    const{ id } = useParams()
    const [country, setCountry] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/countries/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCountry(data);
           } else {
              window.alert('No hay Paises con ese ID');
           }
        });
        return setCountry({});
     }, [id]);

    return(

           
                <div className={style.card}>

                <h1>Detalles Del Pais</h1>


                <h1> {country.name}</h1>
                <img src={country.img} alt="" />
                <p>Continente:{country.continente}</p> 
                <p> Iniciales={country.id}</p>
                <p>Capital={country.capital}</p> 
                <p>Subregion={country.subregion}</p>
                <p>Area={country.area}km2</p>
                <p>Poblacion={country.poblacion}personas</p>
                <p>Estado Soberano reconocido Internacionalmente Independiente={country.estadoSoberanoIndependiente}</p>
                  
                 
            </div>
    )
}

export default Detail;
