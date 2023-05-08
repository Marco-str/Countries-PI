import style from './landingPage.module.css';

import {Link} from 'react-router-dom';





const Landing = () => {

   

    return(
        <>
        <div className={style.contenedor}>

            <div>

        <h1 className={style.title}>WELCOME TO </h1>
        <h1 className={style.title}>COUNTRY APP</h1>
            </div>

        </div>

            <div>
            <Link to= "/home" > <input type="submit" className={style.form__submit} value="Entrar"/></Link>
        
            </div>

        </>
    )

}

export default Landing;    

