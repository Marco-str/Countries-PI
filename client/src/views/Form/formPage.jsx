import { useState } from "react";

import axios from "axios";

const Form = () => {

    const [formulario , setFormulario] = useState({

        name: "",
        description: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        CountryId: ""


    });


    const [error , setError] = useState({

        name: "",
        description: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        CountryId: ""


    });


    const changeHandler = (event) => {
    
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        })

        validate({
            ...formulario,
            [event.target.name]: event.target.value
        })

    };



    const validate = (formulario)=>{

        let error = {};

        if(formulario.name){
            setError({...error, name: ""})
        }else{
            error.name = "El nombre es obligatorio"
            setError({...error, name: "El nombre de la actividad es obligatorio"})
        }

        if(formulario.description){
            setError({...error, description: ""})
        }else{
            error.description = "La descripcion es obligatoria"
            setError({...error, description: "La descripcion es obligatoria"})
        }

        if(formulario.dificultad && !Number(1-5)){
           setError({...error, dificultad: ""})
        }else{
            error.dificultad = "La dificultad es obligatoria y debe contener un valor de 1 a 5"
            setError({...error, dificultad: "La dificultad es obligatoria y debe contener un valor de 1 a 5"})
        }

        if(formulario.duracion && !Number()){
            setError({...error, duracion: ""})
        }else{
            error.duracion = "La duracion es obligatoria y debe ser un numero"
            setError({...error, duracion: "La duracion es obligatoria y debe ser un numero"})
        }

        if(formulario.temporada ){
            setError({...error, temporada: ""})
        }else{
            error.temporada = "La temporada es obligatoria"
            setError({...error, temporada: "La temporada es obligatoria"})
        }

        if(formulario.CountryId ){
            setError({...error, CountryId: ""})
        }else{
            error.CountryId = "El CountryId es obligatorio"
            setError({...error, CountryId: "El CountryId es obligatorio"})
        }

        return error;


    };

    const submitHandler = (event) => {
        event.preventDefault();  //<-- para que no se recargue la pagina

        alert("Formulario enviado");
        //const response = await axios.post("http://localhost:3001/activity", formulario)
        axios.post("http://localhost:3001/activity", formulario)
        .then(res=>alert(res))
        .cath(err=>alert(err))
    };


    return(
        <>
                 <h1>Esta es la vista de Form</h1>


            <form action="" onSubmit={submitHandler}>


            <div>

            <label htmlFor="">Nombre de Actividad: </label>
            <input type="text" name="name" id="" value={formulario.name} onChange={changeHandler} />
           {  error.name && <span>{error.name}</span>}
     
            </div>
     
            <div>

            <label htmlFor="">Descripcion: </label>
            <input type="text" name="description" id="" value={formulario.description} onChange={changeHandler}/>
            {  error.description && <span>{error.description}</span>}

            </div>
            
            <div>

            <label htmlFor="">Dificultad: </label>
            <input type="text" name="dificultad" id="" value={formulario.dificultad} onChange={changeHandler}/>
            {  error.dificultad && <span>{error.dificultad}</span>}

            </div>

            <div>

            <label htmlFor="">Duracion: </label>
            <input type="text" name="duracion" id="" value={formulario.duracion} onChange={changeHandler}/>
            {  error.duracion && <span>{error.duracion}</span>}

            </div>

            <div>

            <label htmlFor="">Temporada del Año: </label>
            <input type="text" name="temporada" id="" value={formulario.temporada} onChange={changeHandler}/>
            {  error.temporada && <span>{error.temporada}</span>}

            </div>

            <div>

            <label htmlFor="">Pais ID: </label>
            <input type="text" name="CountryId" id="" value={formulario.CountryId} onChange={changeHandler}/>
            {  error.CountryId && <span>{error.CountryId}</span>}

            </div>
            
                    <button type="submit">SUBMIT</button>
            </form>

        </>
    )

}

export default Form;    



/*
{
    
    "name": "Tomar mate",
    "description": "pasear por cada panaderia buscando facturas",
    "dificultad": "1",
    "duracion": "60",
    "temporada": "Verano",
    "CountryId": "ARG"
    

}
*/