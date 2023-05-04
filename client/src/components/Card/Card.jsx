
import style from './Card.module.css'


import { Link } from 'react-router-dom'





const Card = ({name, flag, continente, id })=> {
    
   
    return(
        <>
        
                <div className={style.card}>
                <h1 className={style.name}> {name}</h1>

                 <Link  to={`/detail/${id}`} >
                <img src={flag} alt="bandera de pais" className={style.img} />
                </Link>
                  
                <p>Continente:  {continente}</p>        
                    </div>
            

   
        </>
    )
}
export default Card;
