
import style from './Card.module.css'

const Card = ({name, flag, continente , id, capital, subregion, area, poblacion, estadoSoberanoIndependiente})=> {
    
   
    return(
        <div className={style.card}>
            <h1>Una Card</h1>
            <p>Este compionente muestra la info de cada usuario mapeado, y ademas, un link para llevarnos a la inmformacion especificia del usuari</p>

               <p> Nombre del Pais:{name}</p>
                <img src={flag} alt="" />
                <p>Continente={continente}</p>

                <p> Iniciales={id}</p>
               <p>Capital={capital}</p> 
                <p>Subregion={subregion}</p>
                <p>Area={area}km2</p>
                <p>Poblacion={poblacion}personas</p>
                <p>Estado Soberano reconocido Internacionalmente Independiente={estadoSoberanoIndependiente}</p>
               
                
               
   
    </div>
    )
}
export default Card;
/*
 <p> Iniciales={props.id}</p>
               <p>Capital={props.capital}</p> 
                <p>Subregion={props.subregion}</p>
                <p>Area={props.area}km2</p>
                <p>Poblacion={props.poblacion}personas</p>
                <p>Estado Soberano reconocido Internacionalmente Independiente={props.estadoSoberanoIndependiente}</p>
                */