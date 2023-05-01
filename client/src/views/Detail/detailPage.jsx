
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
<>
         
<div className={style.AllContainer}>


                <div className={style.card}>

                <h1>Informacion Relevante:</h1>

                <h1>{country.name}</h1>
                <img src={country.img} alt="bandera de pais" />
                <p>Continente:   <h2>{country.continente}</h2></p> 
                <p> Iniciales:   <h2>{country.id}</h2></p>
                <p>Capital:   <h2>{country.capital}</h2></p> 
                <p>Subregion: <h2>{country.subregion}</h2></p>
                <p>Area:   <h2>{country.area}km2</h2></p>
                <p>Poblacion: <h2>{country.poblacion}personas </h2></p>
                <p>Estado Soberano reconocido Internacionalmente Independiente:  <h2>{country.estadoSoberanoIndependiente}</h2></p>
                  
                 
            </div>
            
               <div className={style.Actividad}>
               
               <h1>Actividades:</h1>
               
               {country.Tourist_activities && country.Tourist_activities.map(activity => (
                  
                  <div className={style.activiades} key={activity.activity_id}>

               <h2>{activity.name}</h2>
               <p>{activity.description}</p>
               <p>Dificultad: {activity.dificultad}</p>
               <p>Duración: {activity.duracion} minutos</p>
               <p>Temporada: {activity.temporada}</p>
               </div>
                   ))}
            </div>
      </div>
</>
    )
}

export default Detail;
