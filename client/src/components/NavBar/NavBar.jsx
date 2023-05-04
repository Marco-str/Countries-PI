import { Link } from 'react-router-dom';



/*Imagenes*/
import home from "../../Imagenes/work-from-home.png";
import Logout from "../../Imagenes/salida-de-emergencia.png";
import Form from "../../Imagenes/lista-de-verificacion.png";
import Menu from "../../Imagenes/menu.png";
import style from './NavBar.module.css';

const NavBar = () => {

  


    return(

        
        <div className={style.mainContainer}>
            
           
            
            <Link class={style.form__submit} to='/home'><img src={home}  className={style.contact__icon} alt="home" /></Link>
            
            
            <Link  class={style.form__submit} to='/create'><img src={Form}  className={style.contact__icon} alt="formulario" /></Link>

                            
            <Link  class={style.form__submit} to='/AboutMe'>About Me</Link>

                          
            <Link  class={style.form__submit} to='/home'><img src={Menu}  className={style.contact__icon} alt="menu" /></Link>
            
                           
            <Link class={style.form__submit} to= "/"> <img src={Logout} className={style.contact__icon} alt="logout" /> Cerrar Sesion</Link>

                        
                   

        </div>

    )
}

export default NavBar;