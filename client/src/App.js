import './App.css';


/* Views */
import { Detail, Form, Home, Landing  } from './views/index';

/*NavBar*/
import NavBar from './components/NavBar/NavBar';

/*React Router*/
import { Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';



function App() {

  const location = useLocation()
  return (
    <div className="App">
     
      <h1>Henry Countries</h1>

      {location.pathname !== "/" && <NavBar />}

      <Route exact path= "/">
          <Landing />
      </Route>
      
      <Route path= "/home">
          <Home />  
      </Route>
      
      <Route exact path= "/detail">
          <Detail /> 
      </Route>
      
      <Route exact path= "/create">
          <Form /> 
      </Route>
      

    </div>
  );
}

export default App;
