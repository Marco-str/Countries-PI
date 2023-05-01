




// import {Detail } from "../Detail/Detail";

// import styles from './SearchBar.module.css'

// import { useState , useEffect} from "react";

// import axios from "axios";



// // import styles from './SearchBar.module.css'
// // import { useState , useEffect} from "react";

// // import axios from "axios";




// // export default function SearchBar({onSearch}) {

// //    const [countries, setCountries]= useState([])
// //    const [tablaDeCountries, setTablaDeCountries]= useState([])
// //    const [busqueda, setBusqueda]= useState("")
 
  
// //    const peticionDelBuscador = async () => {
// //        await axios.get("http://localhost:3001/countries")
// //       .then( respuesta=>{
// //          setTablaDeCountries(respuesta.data)
// //           setCountries(respuesta.data)
// //       }) 
// //       .catch(error=>console.log(error))
// //    }

// //    const handleChange = (e) => {
// //       setBusqueda(e.target.value)
// //       filtrar(e.target.value)
// //    }
 
// //    const filtrar = (terminoBusqueda) => {
// //       var resultadosBusqueda = tablaDeCountries.filter((elemento) => {

// //          if(elemento.name.toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.id.toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.region.toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.subregion.toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.capital.toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.area.toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.population.toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.flag.toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.alpha3Code.toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.alpha2Code.toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.demonym.toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.nativeName.toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.numericCode.toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.cioc.toLowerCase().includes(terminoBusqueda.toLowerCase())){
// //             return elemento
// //          }
         
// //       })
// //       setCountries(resultadosBusqueda)
// //    }

// //    // const handleSubmit = (e) => {
// //    //    e.preventDefault()
// //    //    onSearch(busqueda)
// //    // }



// // useEffect(()=>{
// //    peticionDelBuscador()
// // },[])


// //    return (
  
// //       <div className={styles.search}>
  
// //          <input type='search' name="search" value={busqueda} onChange={handleChange} />
  
         
  
// //       </div>
  
// //   );
// // }



// // // import { useState } from "react";
// // // import { useSelector } from "react-redux";

// // // import axios from "axios";


// // // const SearchBar = ( ) => {

// // //     const [search, setSearch] = useState("")

// // //     const countries= useSelector(state=>state.countries)
    
    
// // //     const onSearchChange = (event) => {
// // //         setSearch(event.target.value)
        
// // //         const bab = countries.filter(elemento=>elemento.name.toLowerCase().includes(search.toLowerCase()))
// // //     return bab.slice()
// // //     }

    
    
    
   
    
    
// // //     const submitHandler = (event) => {
// // //         event.preventDefault();  //<-- para que no se recargue la pagina

   
      
// // //         axios.get("http://localhost:3001/countries", search)
// // //         .then(res=>alert(res))
// // //         .cath(err=>alert(err))
// // //     };



// // //     return(
// // //         <>  
// // //         <form action="" onSubmit={submitHandler}>

// // //     <div>

// // //     <label htmlFor="">Ingrese Informacion a buscar: </label>
// // //     <input type="text" name="buscador" id="" placeholder="Ingrese Informacion ..." value={ search } onChange={onSearchChange}/>
   
// // //     <button type="submit">SUBMIT</button>

// // //     </div>
// // //         </form>
// // //         </>
// // //         )

// // // }

// // // export default SearchBar;