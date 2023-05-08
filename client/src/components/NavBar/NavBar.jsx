import { Link } from 'react-router-dom';



/*Imagenes*/
import home from "../../Imagenes/work-from-home.png";
import Logout from "../../Imagenes/salida-de-emergencia.png";
import Form from "../../Imagenes/lista-de-verificacion.png";
import Menu from "../../Imagenes/menu.png";
import style from './NavBar.module.css';
import aboutMe from "../../Imagenes/working.png";

const NavBar = () => {



/**************** CUADRO DE DIALOGO *********************** */


    function mostrarTexto(elemento) {
        elemento.nextSibling.style.display = "block";
     }
     
     function ocultarTexto(elemento) {
        elemento.nextSibling.style.display = "none";
     }


/********************************************************** */

    return(

        
        <div className={style.mainContainer}>
            
           
            <div className={style.contenedor_imagen}>

            <Link class={style.form__submit} to='/home'><img src={home}  className={style.contact__icon} alt="home" onmouseover={mostrarTexto(this)} onmouseout={ocultarTexto(this)} /></Link>
            <div class={style.texto_imagen}>INICIO</div>
            </div>
            
            <Link  class={style.form__submit} to='/create'><img src={Form}  className={style.contact__icon} alt="formulario" /></Link>

                            
            <Link  class={style.form__submit} to='/AboutMe'><img src={aboutMe} className={style.contact__icon} alt="formulario"/></Link>

                          
            {/* <Link  class={style.form__submit} to='/home'><img src={Menu}  className={style.contact__icon} alt="menu" /></Link> */}
            
                           
            <Link class={style.form__submit} to= "/"> <img src={Logout} className={style.contact__icon} alt="logout" /> </Link>

                        
                   

        </div>

    )
}

export default NavBar;