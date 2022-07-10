import { Link } from 'react-router-dom';
import styles from './FoodCard.module.css';


export default function FoodCard({name, id, diets,health_score, image}) {

 
  
  return (
      <div className={styles.foodContainer}>
      
        
        <img src={image} alt={name} className={styles.foodImage}  />
        <h3 className={styles.name}> {name}</h3>
        
        <div className={styles.containerDiet}>
          <div className={styles.foodScoreContainer}>
            <h2 className={styles.foodScore}>Score : {health_score}</h2>
            <svg>
              <filter id ="fireScore">
                <feTurbulence id="turbulence"  baseFrequency="0.2 0.2" numOctaves="2" seed="3">
                  <animate attributeName='baseFrequency' dur='10s' values='0.1 0.4; 0.12 0.2' repeatCount="indefinite"  ></animate>
                </feTurbulence>
                <feDisplacementMap in='SourceGraphic' scale="4"></feDisplacementMap>
              </filter>
            </svg> 
          </div>   
                 
          <ul className={styles.diets}>{diets}</ul>          
        </div>
        
        
      </div>
    
   
  )
}
