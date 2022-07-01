import { Link } from 'react-router-dom';


export default function FoodCard({name, id, diets,health_score, image}) {

 
  
  return (
      <div>
        
        <h1>{health_score}</h1>
        <img src={image} alt="#" />
        <h2>name: {name}</h2>
        <h3>diets: {diets}</h3>
        
      </div>
    
   
  )
}
