import { useState} from "react";
import { useEffect } from "react";


import axios from "axios";

import style from "./formPage.module.css";

const Form = () => {

    const [formulario , setFormulario] = useState({

        name: "",
        description: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        CountryId: ""
    });


//***************VALIDACIONES************************************************************************** */


    const [errors , setErrors] = useState({

        name: "",
        description: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        CountryId: ""
    });

    
    const validate = (formulario) => {
    
      const errors = {}

      if(formulario.name.length < 3){
          errors.name= "Debe Asignarle un Nombre a la Actividad"
      }
       if(formulario.description.length < 10){
          errors.description= "La Descripcion debe Tener al menos 10 Caracteres"
      }
       if (!formulario.dificultad){
          errors.dificultad = "Debe Seleccionar un nivel de Dificultad"
      }
       if (!formulario.duracion){
          errors.duracion = "Debe Ingresar al menos alguna Cantidad de Horas"
      }
       if (!formulario.temporada){
          errors.temporada = "Debe Seleccionar una Temporada del Año"
      }
       if (!formulario.CountryId){
          errors.CountryId = "Debe Seleccionar  al menos un Pais a la Actividad"
      }

      return errors;
    };


 /***************** Manejadores de los eventos del FORM ******************************************************************************************* */


    useEffect(() => {                    //useEffect para que se ejecute cada vez que cambie el formulario
        setErrors(validate(formulario))
    }, [formulario])


        function changeHandler(event) {
          
          setFormulario({                       //<------|  Cada vez que cambie el formulario, se actualiza el estado
             ...formulario,
              [event.target.name]: event.target.value });
        
          setErrors(
            validate({                          //<------Le agregamos el validate para que valide cada vez que cambie el formulario
              ...formulario,
              [event.target.name]: event.target.value
          }))
        }
    
        const submitHandler = async (event) => {
            event.preventDefault();               //<------|  Previene que se recargue la pagina al enviar el formulario

            const aux = Object.keys(errors)       //<------|  Si el objeto errors tiene alguna propiedad, significa que hay errores
             if(aux.length===0){
              setFormulario({
                ...formulario,
                [event.target.name]: event.target.value
            })
  
            axios.post("http://localhost:3001/activities", JSON.stringify(formulario), {  //<------|  Enviamos el formulario a la ruta /activities en formato JSON(me aseguro que llegue en ese formato si osi)
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
            <fieldset>

                <label htmlFor="">Temporada del Año:</label><br/>
                
                <input type="radio" name="temporada" value="Verano" checked={formulario.temporada === "Verano"} onChange={changeHandler} />
                <label htmlFor="temporada">VERANO</label><br/>
               
                <input type="radio" name="temporada" value="Otoño" checked={formulario.temporada === "Otoño"} onChange={changeHandler} />
                <label htmlFor="temporada">OTOÑO</label><br/>
              
                <input type="radio" name="temporada" value="Invierno" checked={formulario.temporada === "Invierno"} onChange={changeHandler} />
                <label htmlFor="temporada">INVIERNO</label><br/>

                <input type="radio" name="temporada" value="Primavera" checked={formulario.temporada === "Primavera"} onChange={changeHandler} />
                <label htmlFor="temporada">PRIMAVERA</label><br/> 
           {  errors.temporada 
           ? <span className={style.error} >❌{errors.temporada}</span>
           : <span >✅</span>} 
          
            </fieldset>
            </div>


{/* /****************************************************************************************** */ }
           
           
            <div>
            <fieldset>

            <label htmlFor="CountryId">Pais ID: </label>
            <input type="search" name="CountryId" id="" value={formulario.CountryId} onChange={changeHandler}  />
        {  errors.CountryId 
        ? <span className={style.error} >❌{errors.CountryId}</span>
        : <span >✅</span>} 

            </fieldset>
            </div>


{/* /****************************************************************************************** */ }
            
                   
        {
             Object.keys(errors).length ===0                                                  //<------|  Si el objeto errors tiene alguna propiedad, significa que hay errores, no se habilita el boton
             ? ( <input type="submit" className={style.form__submit} value="Entrar"/>) 
             : null
        }


{/* /****************************************************************************************** */}        
           
           
            </form>

        </>
    )
}

export default Form;    
