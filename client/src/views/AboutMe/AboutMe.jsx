import style from './AboutMe.module.css'

import imagenPersonal from '../../Imagenes/WhatsApp Image 2023-04-29 at 9.53.43 PM (1).jpeg'
import logoLinkedin from '../../Imagenes/linkedin-icon.svg'
import logoFacebook from '../../Imagenes/facebook.svg'
import logoInstagram from '../../Imagenes/icons8-instagram.svg'
import logoTwitter from '../../Imagenes/twitter.svg'
import logoGithub from '../../Imagenes/github-icon.svg'




const AboutMe = () => {

return(
    <>
   

    <div className={style.container}>

        <div className={style.tituloPrincipal}>

             <h1>Proyecto Individual de Henry:  Countries</h1>
        </div>

        <div className={style.datosPersonales}>

                <h1>Mi Nombre es Marco Salazar Torrealba</h1>
                <p>Actualmente tengo 25 años</p>
                <p>Vivo en Buenos Aires La Plata</p>
                <p>Estudio en Henry</p>
                <p>Me gusta la programacion, y actualmetne estoy desarrollaando mi proyecto individual</p>

        </div>
                
              <div className={style.imagen}>
           
                    <img src={imagenPersonal} alt="foto de marco, autor del proyecto" />
              </div>

              <div class={style.contact}>
      
      <a href="https://www.facebook.com/marco.salazartorrealba" class={style.contact__link}>
        <img src={logoFacebook} alt="" class={style.contact__icon}/> 
      </a>
      
      <a href="https://twitter.com/marcos_nattu" class={style.contact__link}>
        <img src={logoTwitter} alt="" class={style.contact__icon}/>
      </a>
      
      <a href="https://github.com/Marco-str" class={style.contact__link}>
        <img src={logoGithub} alt="" class={style.contact__icon}/>
      </a>

      <a href="https://www.linkedin.com/in/marcosalazartorrealba/" class={style.contact__link}>
        <img src={logoLinkedin} alt="" class={style.contact__icon}/>
      </a>

      <a href="https://www.instagram.com/marcos_str/" class={style.contact__link}>
        <img src={logoInstagram} alt="" class={style.contact__icon}/>
      </a>


      </div>

    </div>
        
    </>
)

}

export default AboutMe;    