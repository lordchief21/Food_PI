import React from "react";
import { Link } from "react-router-dom";
import bgImage from './Assets/Video/Food.mp4'
import styles from './LandingPage.module.css';
import Logo from './Assets/Logo/Logo.png'

export default function LandingPage() {
    return(
            <div className={styles.landingPage}> 
                <video autoPlay muted loop >
                    <source src={bgImage}  type="video/mp4"/>
                </video>
                
                <div className={styles.bgText}>
                    <img src={Logo} alt="AllFood"  className={styles.imageLogo}/>
                  
                    <Link to='/home'>Comencemos</Link>
                    
                </div> 

            </div>

    )
}

