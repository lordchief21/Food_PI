import React from "react";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { newRecipe } from "../../Redux/action";
import { Link } from "react-router-dom";
import { getDiet } from "../../Redux/action";




export default function FoodCreate() {

    const dispatch = useDispatch();
    
    const stateDiets = useSelector(state => state.diets);

    useEffect(() => {
        dispatch(getDiet()) 
    },[dispatch])


    const [newFood, setNewFood] = useState({

        name: "",
        plate_resume: "",
        health_score: 0,
        step_by_step: "",
        diets: [],
        image: ""

    })

    function handlerInputChange(n) {
        setNewFood({
            ...newFood,
            [n.target.name]: n.target.value
        })
    }


    const handlerSelectDiet = (e) => {
        setNewFood({
            ...newFood,
            diets: [...newFood.diets, e.target.value]
        
        })
       
    };

    function handleSubmit(e){
        e.preventDefault();
        
                dispatch( newRecipe(newFood))
                setNewFood({
                    name: "",
                    plate_resume: "",
                    health_score: 0,
                    step_by_step: "",
                    diets: [],
                    image: "" 
                })
                alert('Recipe created successfully')
                
        }
        


    return (
        <div>
            <div>
                <Link to = '/' ><button>Volver</button></Link>
                <h2>Listo para ser un cheff. Crea tu receta !! </h2>
            </div>
            <form  onSubmit={e =>handleSubmit(e)}>
                <div>
                    <label>name: </label>
                    <input 
                    type="text"
                    value={newFood.name}
                    name = "name"
                    onChange={n=>handlerInputChange(n)}
                    />
                </div>
                <div>
                    <label>Plate Resume: </label>
                    <input 
                    type="text"
                    value={newFood.plate_resume}
                    name = "plate_resume"
                    
                    onChange={n => handlerInputChange(n)}
                    />
                </div>
                <div>
                    <label>health_score: </label>
                    <input 
                    type="number"
                    value={newFood.health_score}
                    name = "health_score"
                   
                    onChange={n => handlerInputChange(n)}
                    />
                </div>
                <div>
                    <label>Step by step: </label>
                    <input 
                    type="text"
                    value={newFood.step_by_step}
                    name = "step_by_step"
                    
                    onChange={n => handlerInputChange(n)}
                    />
                </div>
                <div>
                    <label>image: </label>
                    <input 
                    type="text"
                    value={newFood.image}
                    name = "image"
                    
                    onChange={n => handlerInputChange(n)}
                    />
                </div>
                <div>
                    <select  onChange={(e) => handlerSelectDiet(e)}>
                        
                    {
                        stateDiets?.map(el => (
                            <option value={el}>{el}</option>
                            
                        ))
                    }
                    </select>
                    <p> You Diets is / are: { newFood.diets.map( e => e + ", ")}</p>
                </div>
                <button type="submit" onClick={e => handleSubmit(e)}>Crear</button>
                
            </form>

        
        </div>
    )
}