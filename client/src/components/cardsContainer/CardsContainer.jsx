
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

/*REdux*/
import { useSelector } from "react-redux";




const CardsContainer = () => {
    

            const countries= useSelector(state=>state.countries)
            return(
        
        <div className={style.cardsContainer}>
        
            
            {countries.map(elemento=> {
                return <Card 

              

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
                 })}
        
        </div>
       
    )
}

export default CardsContainer;