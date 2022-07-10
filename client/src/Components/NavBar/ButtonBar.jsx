import { Link } from "react-router-dom"
import homeImg from './AssetsButton/homeImg.png';
import createImg from './AssetsButton/createImg.png';
import resetImg from './AssetsButton/resetImg.png';
import styles from './ButtonBar.module.css';


const ButtonBar = ({setCurrPage}) => {
    
    
    
    
    return(
       <div className={styles.navigation}>
            <ul>
                <li className={styles.list} >
                    <Link to="/home">
                        <span className= {styles.icon}><img src={homeImg} alt = "HomeImg" /></span>
                        <span className= {styles.text}> Home</span>
                    </Link>
                </li>

                <li className= {styles.list}>
                    <Link to="Create">
                        <span className= {styles.icon}><img src={createImg} alt = "createImg" /></span>
                        <span className= {styles.text}> Create</span>
                    </Link>
                </li>
                <li className= {styles.list}>
                    <Link  to="/">
                        <span className= {styles.icon}><img src={resetImg} alt = "resetImg" /></span>
                        <span className= {styles.text}> Reset</span>
                    </Link>
                </li>
                <div className={styles.indicator}></div>
            </ul>
       </div>
    )
}




export default ButtonBar
