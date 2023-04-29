import CardsContainer from "../../components/cardsContainer/CardsContainer";

/* Manejador de estados */
import { useEffect } from "react";
import { useDispatch } from "react-redux";

/*Actions */
import {getCountries} from "../../redux/actions/actions"



    const Home = () => {

        const dispatch = useDispatch()


     useEffect(() => {

        dispatch(getCountries())

         },[dispatch]) //<-- el array vacio es para que solo se ejecute una vez, y el dispatch es para que se ejecute cada vez que cambie el estado de dispatch (no salte el warning)


    return(
         <>
                 <h1>Esta es la vista de Home</h1>
                     <CardsContainer/>
        
        </>
    )

}

export default Home;    