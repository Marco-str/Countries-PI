import { Link } from 'react-router-dom';

import style from './NavBar.module.css';

const NavBar = () => {
    return(
        <div className={style.mainContainer}>
            
            <h1>esta va a ser la posicion de la NavBar</h1>
            
            
            <Link class={style.form__submit} to='/home'>Home</Link>
            
            
            <Link  class={style.form__submit} to='/create'>Form</Link>
            
            
            <Link  class={style.form__submit} to='/AboutMe'>About Me</Link>
           

        </div>

    )
}

export default NavBar;