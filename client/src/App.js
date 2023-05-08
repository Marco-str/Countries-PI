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
axios.defaults.baseURL = "http://localhost:3001/" ;



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
