import style from './landingPage.module.css';

/*Para las validationes*/
import {useState} from 'react';
import {Link} from 'react-router-dom';




const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ;/* /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ */
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,8}$/i


const Landing = ({ login }) => {

    const [inputs, setInputs] = useState({
       usuario: "",
        email: "",
        contraseña: ""
    })
    
    
    const [errors, setErrors] = useState({
        usuario: "",
        email: "",
        contraseña: ""
    })
    
    const validate = (inputs) => {
    
        const errors = {}

        if(!inputs.usuario){
            errors.usuario= "DEBE HABER UN USUARIO"
        }else if(!inputs.email){
            errors.email= "DEBE HABER UN EMAIL"
        }else if (!inputs.contraseña){
            errors.contraseña = "DEBE HABER UNA CONTRASEÑA"
        }else if (!regexEmail.test(inputs.email)){
            errors.email="EL EMAIL DEBE TENER UN FORMATO CORRECTO"
        }else if (!regexPassword.test(inputs.contraseña)){
            errors.contraseña= "LA CONTRASEÑA DEBE TENER AL MENOS 6 CARACTERES, UNA MAYUSCULA, UNA MINUSCULA, UN NUMERO Y UN CARACTER ESPECIAL"
        }
        return errors;
    
    }
    const handleChange = (event) => {
    
        setInputs({
            ...inputs,
            [event.target.name] : event.target.value
        })
        
        setErrors(
            validate ({
            ...inputs,
            [event.target.name] : event.target.value
        }))
    
    
    }
    
    
    const handleSubmit =(event) => {
    
        event.preventDefault()
    
        const aux = Object.keys(errors)
        if(aux.length===0){
    
    
            setInputs({
                ...inputs,
                [event.target.name] : event.target.value
            })
            
            setErrors(
                validate ({
                ...inputs,
                [event.target.name] : event.target.value
            }))
    
            login(inputs)
    
            return alert ("INFORMACION VALIDA")
        
        
        }
        return alert ("LA INFORMACION NO ES VALIDA")

    }

    return(
        <>

        <div className={style.container}>
                 

    <form action="" onSubmit={handleSubmit} className={style.form}>
        <h2 className={style.form__title}>Inicia Sesion</h2>
        
   
        <div className={style.form__container}>


            <div className={style.form__group}>
                <input type="text" name="usuario" autoComplete='off' value={inputs.usuario} onChange={handleChange} className={style.form__input} placeholder="                              Jhon Doe "/>
                <label for="" className={style.form__label}>Usuario:</label>
                <span className={style.form__line}></span>
                <p className="danger">{errors.usuario}</p>
            </div>
        

            <div className={style.form__group}>
                <input type="text" name="email" autoComplete='off' value={inputs.email} onChange={handleChange}id="user" className={style.form__input} placeholder="                          example@example.com "/>
                <label for="user" className={style.form__label}>Email:</label>
                <span className={style.form__line}></span>
                <p className="danger">{errors.email}</p>
            </div>

            <div className={style.form__group}>
                <input type="text" id="password" autoComplete='off' name="contraseña" value={inputs.contraseña} onChange={handleChange}className={style.form__input} placeholder=" " />
                <label for="password" className={style.form__label}>Contraseña:</label>
                <span className={style.form__line}></span>
                <p className="danger">{errors.contraseña}</p>
            </div>
        

           
            {
                        Object.keys(errors).length ===0 
                        ? (<Link to= "/home" > <input type="submit" className={style.form__submit} value="Entrar"/></Link>) 
                        : null
                        }
        
        </div>
   
   
    </form>
  </div>
        </>
    )

}

export default Landing;    