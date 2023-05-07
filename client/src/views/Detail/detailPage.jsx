
import React, { useEffect , useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

/*Estilo del Pagina Detalle*/
import style from './DetailPage.module.css'





const Detail = () =>{

 

/***************************Country ID************************************/


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


                <div >
                <img  src={country.img} className={style.img} alt="bandera de pais" />
                </div>
                <h1>Informacion Relevante:</h1>
                <p> Nombre del pais:</p><h1>{country.name}</h1>
                <p>Continente:   </p> <h2>{country.continente}</h2>
                <p> Iniciales:  </p> <h2>{country.id}</h2>
                <p>Capital:  </p>  <h2>{country.capital?.replace(/[{()}]/g, '')}</h2>
                <p>Subregion:</p> <h2>{country.subregion}</h2>
                <p>Area:  </p> <h2>{country.area}km2</h2>
                <p>Poblacion: </p><h2>{country.poblacion}personas </h2>
                 
                 
            </div>
            
               <div className={style.Actividad}>
               
                   <h1>Actividades:</h1>

                            <div className={style.Actividad__especifica}>
                             
                              {country.Tourist_activities && country.Tourist_activities.map(activity => (
                  
                              <div className={style.activiades} key={activity.activity_id}>

                                  <h1>{activity.name}</h1>
                                 <p>Descripcion: </p> <h2>{activity.description}</h2>
                                 <p>Dificultad: </p> <h1>{activity.dificultad}</h1>
                                 <p>Duración:</p>  <h1>{activity.duracion}(horas)</h1>
                                 <p>Temporada:</p>  <h1>{activity.temporada}</h1>
                              </div>
                               ))}

                            </div>
            </div>
      </div>

     

</>
    )
}

export default Detail;
