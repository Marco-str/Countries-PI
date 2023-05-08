import './App.css';


/* Views */
import { Detail, Form, Home, Landing, AboutMe  } from './views/index';

/*NavBar*/
import NavBar from './components/NavBar/NavBar';

/*React Router*/
import { Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


/*DEPLOY*/
import axios from 'axios';
axios.defaults.baseURL = "https://api-countries-5f8k.onrender.com/" ;
// axios.defaults.baseURL = "http://localhost:3001/" ;
// cartel desplegable,  la banderas, max height , cambiar tamaño de letras, fonmdo de formulario mas clarito, planteear una horas maximas ewn el form, name en ulñugar de ids, seleccion maxima de paises,----https://sweetalert2.github.io/,

function App() {


/*React Router*/

  const location = useLocation()
  return (
    <div className="App">
     
     

      {location.pathname !== "/" && <NavBar />}

      <Route exact path= "/">
          <Landing />
      </Route>
      
      <Route path= "/home">
          <Home />  
      </Route>
      
      <Route exact path= "/AboutMe">
          <AboutMe /> 
      </Route>
      
      <Route exact path= "/create">
          <Form /> 
      </Route>

      <Route exact path="/detail/:id" >
          <Detail />
      </Route>

     
      

    </div>
  );

  /*React Router*/


}

export default App;
