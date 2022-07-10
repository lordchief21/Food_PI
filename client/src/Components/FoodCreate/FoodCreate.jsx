import React from "react";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getFood, newRecipe } from "../../Redux/action";
import { Link } from "react-router-dom";
import { getDiet } from "../../Redux/action";
import styles from './FoodCreate.module.css';
import ButtonBar from '../NavBar/ButtonBar';
import imageLogo from '../LandingPage/Assets/Logo/Logo.png'
import { useNavigate } from "react-router-dom";



export default function FoodCreate() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const stateDiets = useSelector(state => state.diets);
    const stateFood = useSelector( state => state.food)

    useEffect(() => {
        dispatch(getDiet()) 
        dispatch(getFood())
    },[dispatch])

  

    const [newFood, setNewFood] = useState({

        name: "",
        plate_resume: "",
        health_score: 0,
        step_by_step: "",
        diets: [],
        image: "",

    })

    const [val, setVal] = useState({})


    function validation(newFood) {
        const validate = {}
        const notNumber = /[1-9]/;
        const notSpace = /[\s]/;
        const notAlpha = /[A-z]/

        if(notNumber.test(newFood.name)) validate.name ="No puede tener numeros";
        if(notSpace.test(newFood.name[0])) validate.name = "No puede tener espacios";

        if(stateFood?.find(e => e.name.toUpperCase() === newFood.name.toUpperCase())){
            const foodFilter = stateFood?.find(e => e.name.toUpperCase() === newFood.name.toUpperCase())
            validate.name =foodFilter ? <Link to={`/home/${foodFilter?.id}`}>La receta {foodFilter?.name} ya fue creada. Presiona para verla !</Link> : 0
            
            console.log("log foodFilter", newFood.name)
                
        } ;

        if(notSpace.test(newFood.plate_resume[0])) validate.plate_resume = "No puede tener espacios";

        if(Number(newFood.health_score) < 0) validate.health_score = "Vamos tan mala receta soy ?";
        if(Number(newFood.health_score) > 100) validate.health_score = "En All Foods solo los mejores llegan hasta 100 !!";
        if(notAlpha.test(newFood.health_score)) validate.health_score ="Inserte el mejor número entre 0-100 para mí !";

        if(notSpace.test(newFood.step_by_step[0])) validate.step_by_step = "No puede tener espacios";

        if(!newFood.diets.length  ) validate.diets = "Por lo menos soy una dieta !"

        console.log("log nFL", newFood.diets) 
        console.log("log validate", validate)   
        return validate
    }

    const res = Object.values(val).length > 0 ? true: false


    function handlerInputChange(n) {
        setNewFood({
            ...newFood,
            [n.target.name]: n.target.value
        })
        setVal(
            validation({
                ...newFood,
                [n.target.name]: n.target.value
            })
           
        )
        console.log("Este viene de val ", n.target.name)
    }


    const handlerSelectDiet = (e) => {

        const res = newFood.diets.filter(
            (ele) => ele !== e.target.innerHTML 
            
          );


        console.log("Val Res", res)
        console.log("Val dietsnF", newFood.diets)
        
        if(res.includes(e.target.value)){
            alert("Ya se eligió esta dieta")
            setNewFood({
                ...newFood,
                diets: [...newFood.diets]
            
            })
            setVal(
                validation({
                    ...newFood,
                    diets: [...newFood.diets]
                })
            )
            
        }  else {
             console.log("PRRR")
            setNewFood({
                ...newFood,
                diets: [...newFood.diets, e.target.value ]
            
            })
            setVal(
                validation({
                    ...newFood,
                    diets: [...newFood.diets, e.target.value]
                })
            ) 
        }
         
       
    };

    function handlerDeleteDiet(e)  {

        const dietFilter = newFood.diets.filter(
          (ele) => ele !== e.target.innerHTML 
          
        );

          console.log("flag nF", newFood.diets)
            console.log("flag dF", dietFilter)
        
        setNewFood({
          ...newFood,
          diets: dietFilter,
        });
        setVal(
          validation({
            ...newFood,
            diets: [...dietFilter]
          })
        );
    };

    function handleSubmit(e){
        e.preventDefault();

                 
                    newRecipe(newFood).then(() => {
                        setNewFood({
                            name: "",
                            plate_resume: "",
                            health_score: 0,
                            step_by_step: "",
                            diets: [],
                            image: "" 
                        })
                        navigate("/home")
                    }).catch((error) =>{
                        console.log(error)
                    })
                
        
               
            
                
                
        }
    
       


    return (
        <div className={styles.container}>
            <div className={styles.containerBar}>
                <img className={styles.imgBar} src={imageLogo} alt="" />
                <h2>Listo para ser un chef. Crea tu receta !! </h2>
                <div><ButtonBar /></div>
            </div>
            <form className={styles.containerForm}  onSubmit={e =>handleSubmit(e)}>
                <div className={styles.containerInput}>
                    <label>name: </label>
                    <input 
                    type="text"
                    value={newFood.name}
                    name = "name"
                    onChange={n=>handlerInputChange(n)}
                    />
                    {
                        val?.name ? (
                            <p>{val.name}</p>
                        ):<p></p>
                    }
                </div>
                <div className={styles.containerInput}>
                    <label>Plate Resume: </label>
                    <input 
                    type="text"
                    value={newFood.plate_resume}
                    name = "plate_resume"
                    
                    onChange={n => handlerInputChange(n)}
                    />
                    
                   { val?.plate_resume ? (
                            <p>{val.plate_resume}</p>
                        ):<p></p>
                    }
                </div>
                <div className={styles.containerInput}>
                    <label>health_score: </label>
                    <input 
                    type="text"
                    value={newFood.health_score}
                    name = "health_score"
                    onChange={n => handlerInputChange(n)}
                    />
                      {
                        val?.health_score ? (
                            <p>{val.health_score}</p>
                        ):<p></p>
                    }
                </div>
                <div className={styles.containerInput}>
                    <label>Step by step: </label>
                    <input 
                    type="text"
                    value={newFood.step_by_step}
                    name = "step_by_step"
                    
                    onChange={n => handlerInputChange(n)}
                    />
                    { val?.step_by_step ? (
                            <p>{val.step_by_step}</p>
                        ):<p></p>
                    }
                </div>
                <div className={styles.containerInput}>
                    <label>image: </label>
                    <input 
                    type="text"
                    value={newFood.image}
                    name = "image"
                    
                    onChange={n => handlerInputChange(n)}
                    />
                </div>
                <div className={styles.containerDiets}>
                    <select  onChange={(e) => handlerSelectDiet(e)}>
                        
                    {
                        stateDiets?.map(el => (
                            <option value={el}>{el}</option>
                            
                        ))
                    }
                    </select>
                    <ul>
                        {
                            
                            newFood.diets.length > 0  ? 
                                newFood.diets.map((ele) => (
                                    <li key={ele} name={ele} onClick={e => handlerDeleteDiet(e)} >{ele}</li>
                                ))
                            : (
                                <p className={""}>{val.diets}</p>
                                )
                        }
                    </ul>
                </div>
                <button type="submit" disabled={res}   onClick={e => handleSubmit(e)}>Crear</button>
                
            </form>

        
        </div>
    )
}

