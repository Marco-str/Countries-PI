
// Dependencias
import CardsContainer from "../../components/cardsContainer/CardsContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import style from "./homePage.module.css";

/* Manejador de estados */
import { useEffect } from "react";
import { useDispatch } from "react-redux";


/*Actions */
import {getCountries} from "../../redux/actions/actions"



const Home = ({ onSearch }) => {


    
    const dispatch = useDispatch()
    
    
    useEffect(() => {
        
        dispatch(getCountries())
        
    },[dispatch]) //<-- el array vacio es para que solo se ejecute una vez, y el dispatch es para que se ejecute cada vez que cambie el estado de dispatch (no salte el warning, lo hizo jorge)
    
    

    return(
         <>

                     <CardsContainer />

            
            

        
        </>
    )

}

export default Home;    