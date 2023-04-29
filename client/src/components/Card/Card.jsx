
import style from './Card.module.css'

const Card = (props)=> {

    return(
        <div className={style.card}>
            <h1>Una Card</h1>
            <p>Este compionente muestra la info de cada usuario mapeado, y ademas, un link para llevarnos a la inmformacion especificia del usuari</p>

                <p> Iniciales={props.id}</p>
               <p> Nombre del Pais={props.name}</p>
                <p>Bandera={props.flag}</p>
                <p>Continente={props.continente}</p>
               <p>Capital={props.capital}</p> 
                <p>Subregion={props.subregion}</p>
                <p>Area={props.area}km2</p>
                <p>Poblacion={props.poblacion}personas</p>
                <p>Estado Soberano reconocido Internacionalmente Independiente={props.estadoSoberanoIndependiente}</p>
    </div>
    )
}
export default Card;