
import style from './Card.module.css'

import { Link } from 'react-router-dom'




const Card = ({name, flag, continente, id })=> {
    
   
    return(
        <div className={style.card}>
           
                <Link className={style.Main} to={`/detail/${id}`} >
                <h1 className={style.name}> {name}</h1>
                <img src={flag} alt="" />
                </Link>

                <p>Continente:{continente}</p>        
   
    </div>
    )
}
export default Card;
