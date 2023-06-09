import { useState} from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions/actions";


import axios from "axios";

import style from "./formPage.module.css";

const Form = () => {


/**************************************COUNTRY ID*********************************************** */


const dispatch = useDispatch();

const countries = useSelector((state) => state.countries);


const  allCountryId = countries.map((id) => id.id);
const allCountryName = countries.map((name) => name.name);


useEffect(() => {
  dispatch(getCountries());
}, [dispatch]);                                                              // <------|  useEffect para que se ejecute cada vez que cambie el estado de countries




    const [formulario , setFormulario] = useState({

        name: "",
        description: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        CountryId: []
    });


//***************VALIDACIONES************************************************************************** */


    const [errors , setErrors] = useState({

        name: "",
        description: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        CountryId: []
    });

    
    const validate = (formulario) => {
    
      const errors = {}

      if(formulario.name.length < 3 || formulario.name.length > 25){
          errors.name= "La Actividad debe Tener al menos entre 3 y 25 Caracteres"
      }
       if(formulario.description.length < 10 || formulario.description.length > 150){
          errors.description= "La Descripcion debe Tener al menos 10 Caracteres"
      }
       if (!formulario.dificultad){
          errors.dificultad = "Debe Seleccionar un nivel de Dificultad"
      }
       if (!formulario.duracion || formulario.duracion <= 0){
          errors.duracion = "Debe Ingresar al menos alguna Cantidad de Horas"
      }
      if (formulario.duracion > 500){
        errors.duracion = "Debe Ingresar una Cantidad de Horas Menor a 500"
    }
       if (!formulario.temporada){
          errors.temporada = "Debe Seleccionar una Temporada del Año"
      }
       if (!formulario.CountryId || formulario.CountryId.length === 0){
          errors.CountryId = "Debe Seleccionar  al menos un Pais a la Actividad"
      }

      return errors;
    };


 /***************** Manejadores de los eventos del FORM ******************************************************************************************* */


    useEffect(() => {                    // <------| useEffect para que se ejecute cada vez que cambie el formulario
        setErrors(validate(formulario))
    }, [formulario])                    // <------|  El array de dependencias esta vacio, por lo que se ejecuta solo cuando se monta el componente




    function changeHandler(event) {

      
      if ( event.target.name === "CountryId") {
        if (!formulario.CountryId.includes( event.target.value)) {  // <------|  Si el array CountryId no incluye el value, lo agrega
          setFormulario({
            ...formulario,
            CountryId: [...formulario.CountryId,  event.target.value]  // <------|  Agrega el value al array CountryId
          });
        }
      } else {
        setFormulario({ ...formulario, [ event.target.name]:  event.target.value });
      }
    }
     

    
     

    
  const submitHandler = async (event) => {
            event.preventDefault();               //<------|  Previene que se recargue la pagina al enviar el formulario

            const aux = Object.keys(errors)       //<------|  Si el objeto errors tiene alguna propiedad, significa que hay errores
             if(aux.length===0){
              setFormulario({
                ...formulario,
                [event.target.name]: event.target.value
            })
  
            axios.post("/activities", JSON.stringify(formulario), {  //<------|  Enviamos el formulario a la ruta /activities en formato JSON(me aseguro que llegue en ese formato si osi)
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(res => {
              alert("Formulario enviado correctamente");
            })
            .catch(err => {
              alert(err);
            });
          };
        };
          

        

  const removeSelected = (id) => {
          const newSelected = formulario.CountryId.filter((countryId) => countryId !== id);
          setFormulario({ ...formulario, CountryId: newSelected });
        };

        

/*************************FORMULARIO***************************************************************** */


    return(
        <>

            <form action="" onSubmit={submitHandler} className={style.Formulario}>


{/* /****************************************************************************************** */ }   


            <div>
            <fieldset>

            <label htmlFor="name">Nombre de Actividad: </label>
            <input type="text" name="name" id="" value={formulario.name} onChange={changeHandler} />
            { errors.name 
            ? <span className={style.error}>❌{errors.name}</span>
            : <span >✅</span> } 
           
            </fieldset>
            </div>
     

{/* /****************************************************************************************** */ }


            <div>
            <fieldset>

            <label htmlFor="description">Descripcion: </label>
            <textarea name='description' placeholder='Escribe tu mensaje...' cols="30" rows="5" type="text" value={formulario.description} onChange={changeHandler} ></textarea>
            {  errors.description
            ? <span className={style.error} >❌{errors.description}</span>
            : <span >✅</span>} 
            
            </fieldset>
            </div>


{/* /****************************************************************************************** */ }      


            <div>
            <fieldset>

                <label htmlFor="dificultad">Dificultad: </label>
                <p>
                  <input type="range" id="dificultad" name="dificultad" min="1" max="5" defaultValue="1" value={formulario.dificultad} onChange={changeHandler} />
                  <span className={style.range_value}>{formulario.dificultad}</span> 
                </p>
               
             {  errors.dificultad 
             ? <span className={style.error} >❌{errors.dificultad}</span>
             : <span >✅</span> }           
         
            </fieldset>
            </div>
       

{/* /****************************************************************************************** */ }


            <div>
            <fieldset>

                <label htmlFor="duracion">Duración (horas):</label>
                <input type="number" id="duracion" name="duracion" min="0.5" step="0.5"  placeholder="Ingrese la duración en horas"  value={formulario.duracion} onChange={changeHandler} required />
            {  errors.duracion 
            ? <span className={style.error} >❌{errors.duracion}</span>
            : <span >✅</span> } 
          
            </fieldset>
            </div>


{/* /****************************************************************************************** */ }


            <div>
            <fieldset className={style.fieldset}>

                <label htmlFor="">Temporada del Año:</label><br/>
                
                <input type="radio" name="temporada" value="Verano" checked={formulario.temporada === "Verano"} onChange={changeHandler} />
                <label class="container" htmlFor="temporada">VERANO</label><br/>
               
                <input type="radio" name="temporada" value="Otoño" checked={formulario.temporada === "Otoño"} onChange={changeHandler} />
                <label class="container" htmlFor="temporada">OTOÑO</label><br/>
              
                <input type="radio" name="temporada" value="Invierno" checked={formulario.temporada === "Invierno"} onChange={changeHandler} />
                <label class="container" htmlFor="temporada">INVIERNO</label><br/>

                <input type="radio" name="temporada" value="Primavera" checked={formulario.temporada === "Primavera"} onChange={changeHandler} />
                <label class="container" htmlFor="temporada">PRIMAVERA</label><br/> 
           {  errors.temporada 
           ? <span className={style.error} >❌{errors.temporada}</span>
           : <span >✅</span>} 
          
            </fieldset>
            </div>


{/* /****************************************************************************************** */ }
           
           
        <div>

            <fieldset>
          <div>

                      <label htmlFor="CountryId">País ID:</label>
                      <select name="CountryId" id="" value={formulario.CountryId} onChange={changeHandler} className={style.labelPaisId}>
                        <option value="">Selecciona un país</option>
                        {
                        allCountryId.map((id) => ( <option value={id} key={id}> {id} </option> ))
                        }                     
                      </select>
                    
                  <div className={style.divCountries}>
                             {formulario.CountryId.length > 0 && (
                          
                          <div>
                           
                            <ul>
                             {
                             formulario.CountryId.map((id) =>  <div  className={style.divCountry} key={id}>
                             <button onClick={() => removeSelected(id)}>X</button>{id}</div>  )   
                            }
                            </ul>
                          </div>
                       )}
                  </div>
            </div>

        {  errors.CountryId 
        ? <span className={style.error} >❌{errors.CountryId}</span>
        : <span >✅</span>} 

            </fieldset>
            </div>


{/* /****************************************************************************************** */ }
            
                   
        {
             Object.keys(errors).length ===0                                                  //<------|  Si el objeto errors tiene alguna propiedad, significa que hay errores, no se habilita el boton
             ? ( <input type="submit" className={style.form__submit} value="Enviar Formulario"/>) 
             : null
        }


{/* /****************************************************************************************** */}        
           
           
            </form>

        </>
    )
}

export default Form;    
