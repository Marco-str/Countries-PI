import { useState} from "react";


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


    // const [error , setError] = useState({

    //     name: "",
    //     description: "",
    //     dificultad: "",
    //     duracion: "",
    //     temporada: "",
    //     CountryId: ""
    // });

    
    
    
    // const validate = (formulario)=>{
    //     if (formulario.name) {
    //         setError("");
    //     } else {
    //         setError("El nombre de la actividad es obligatorio");
    //     }
    // };
    
    // useEffect(() => {
    //     validate()
    // }, [formulario]) 
    
    // const [paises, setPaises] = useState([]);
    
        const changeHandler = (event) => {
            setFormulario({
                ...formulario,
                [event.target.name]: event.target.value
            })

            
            // setError(validate({
            //     ...formulario,
            //     [event.target.name]: event.target.value
            // }))
        };
    
        const submitHandler = async (event) => {
            event.preventDefault();
          
            axios.post("http://localhost:3001/activities", JSON.stringify(formulario), {
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
          
            alert("Formulario enviado");
          };
          


    return(
        <>


            <form action="" onSubmit={submitHandler} className={style.Formulario}>
            
            <div>
            <fieldset>

            <label htmlFor="name">Nombre de Actividad: </label>
            <input type="text" name="name" id="" value={formulario.name} onChange={changeHandler} />
             {/* {  error.name && <span>{error.name}</span> } */}
            </fieldset>
     
            </div>
     
            <div>
            <fieldset>

            <label htmlFor="description">Descripcion: </label>
            <textarea 
              name='description' 
              placeholder='Escribe tu mensaje...' 
              cols="30" rows="5" 
              type="text" 
              value={formulario.description}
              onChange={changeHandler}
              ></textarea>
              {/* className={errors.message && 'warning'} */}
            {/* {  error.description && <span>{error.description}</span>} */}
            </fieldset>
            </div>
            
            <div>
                <fieldset>
                <label htmlFor="dificultad">Dificultad: </label>
                <p>1<input
                      type="range"
                      id="dificultad"
                      name="dificultad"
                      min="1"
                      max="5"
                      defaultValue="1"
                      value={formulario.dificultad}
                      onChange={changeHandler}
                   />   
                   5</p>          
                </fieldset>
            </div>
       

            <div>
            <fieldset>

            
                <label htmlFor="duracion">Duración (horas):</label>
                <input 
                  type="number" 
                  id="duracion" 
                  name="duracion"               
                  min="0" 
                  step="0.5" 
                  placeholder="Ingrese la duración en horas" 
                  value={formulario.duracion} onChange={changeHandler}
                  required 
                />
            {/* {  error.duracion && <span>{error.duracion}</span>} */}
            </fieldset>
            </div>

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

                {/* <p>Temporada seleccionada: {formulario.temporada}</p> */}
            {/* {  error.temporada && <span>{error.temporada}</span>} */}
          
            </fieldset>
            </div>

            <div>
            <fieldset>
            <label htmlFor="CountryId">Pais ID: </label>
            <input type="search" name="CountryId" id="" value={formulario.CountryId} onChange={changeHandler}  />
           
            <select name="CountryId" value={formulario.CountryId} onChange={changeHandler}>
          <option value="">Selecciona un país</option>
          {/* {paises.map((pais) => (
            <option key={pais} value={pais}>
              {pais}
            </option>
          ))} */}
        </select>
           
           
            {/* {  error.CountryId && <span>{error.CountryId}</span>} */}

            </fieldset>
            </div>
            
            
                    
                    <input type="submit" className={style.form__submit} value="Entrar"/>
            </form>

        </>
    )

}

export default Form;    
