import { Link } from 'react-router-dom';

import style from './NavBar.module.css';

const NavBar = () => {
    return(
        <div className={style.mainContainer}>
            
            <h1>esta va a ser la posicion de la NavBar</h1>
            
            <Link to='/home'>Home</Link>
            
            <Link to='/create'>Form</Link>
            
            <Link to='/detail'>Detail</Link>


        </div>

    )
}

export default NavBar;