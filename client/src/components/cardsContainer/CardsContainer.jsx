
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

/*REdux*/
import { useSelector } from "react-redux";




const CardsContainer = () => {
    

            const users= useSelector(state=>state.users)
            return(
        
        <div className={style.cardsContainer}>
        
            
            {users.map(user=> {
                return <Card 

                // id={ e.cca3}
                // name= {e.name.common}
                // img= {e.flags[0]}
                // continente= {e.region}
                // capital= {e.capital}
                // subregion= {e.subregion}
                // area= {e.area}
                // poblacion= {e.population}
                // lenguajes= {e.languages}
                // estadoSoberanoIndependiente= {e.independent}
                // moneda={ e.currencies}

                id={user.cca3}
                name={user.name.common}
                flag={user.flags}
                continente={user.region}
                capital={user.capital}
                subregion={user.subregion}
                area={user.area}
                poblacion={user.population}
                estadoSoberanoIndependiente={user.independent}
                
                


                 />})}
        
        </div>
       
    )
}

export default CardsContainer;