import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {getDiet,filterByDiet, filteredByAlphabetic, filteredByOrigin, getFoodByName,filteredByHealthScore, filterByCincuenta} from '../../Redux/action/index';
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'
import ButtonBar from "./ButtonBar";
import logo from '../LandingPage/Assets/Logo/Logo.png'




export default function NavBar({setCurrPage}) {

    const dispatch = useDispatch();
    const allDiet = useSelector(state => state.diets);
    const allFood = useSelector(state => state.foodSup)
    const [sorted, setSorted] = useState(" ")
    const [foodName, setFoodName] = useState("");

 

    useEffect(() => {
        dispatch(getDiet()) 
    },[])

    const healthResult = new Set(allFood?.map(el => el.health_score))
    const healthFinal = Array.from(healthResult)?.sort((a, b) => a - b )

    

    console.log("Esto es flag de healthResult", healthResult)
    console.log("Esto es flag de healthFinal", healthFinal)

 
    //Handlers

    function handleForFilterDiet(e) {
        dispatch(filterByDiet(e.target.value))
        setCurrPage(1)
        console.log(e.target.value)
    };

    function handleForAlphabetic(e) {
        dispatch(filteredByAlphabetic(e.target.value))
    };

    function handleForFilterOrigin(e) {
        dispatch(filteredByOrigin(e.target.value))
    };

    function handlerOnSubmit(e) {
        e.preventDefault()
        console.log(foodName)
        dispatch(getFoodByName(foodName))
        
    }


    function handlerNameChange(e) {
        e.preventDefault();
        setFoodName(e.target.value)

    }

   function handleForHealthScore(e){
    e.preventDefault();
    dispatch(filteredByHealthScore(e.target.value))

   }

   function handleMayor50(e) {
    e.preventDefault();
    dispatch(filterByCincuenta(e))
   }
    


    return(
        <div className={styles.container}>

            <div className={styles.containerInfo}>
                <img src={logo} className={styles.imgBar} />
                <div>
                    <input 
                    type="text"
                    placerholder = "Buscar Comida...."
                    onChange={n =>handlerNameChange(n)}
                    />
                    <button type="submit" onClick={n => handlerOnSubmit(n)}>Buscar</button>
                </div>
                <div className="">
                <ButtonBar />
                </div>
            </div>

            <div className={styles.containerFilter}>
            
                <div className={styles.containerOrigin}>
                    <select onChange={e => handleForFilterOrigin(e)} >
                    <option value="All">All</option>
                    <option value="Created">Created</option>
                    <option value="API">API</option>
                    </select>
                </div>

                <div className={styles.containerAlpha}>
                    <select onChange={e => handleForAlphabetic(e)} >
                        <option value="All">All</option>
                        <option value='AtoZ'>A to Z</option>
                        <option value='ZotA'>Z to A</option>
                    </select>
                </div>
                <div className={styles.containerDiet}>
                    <select  onChange={e => handleForFilterDiet(e)}>
                        <option value="All">All</option>
                        {
                            allDiet?.map(el => {
                                return (
                                    <option key={el} value={el}>{el}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div>
                <select  onChange={e =>handleForHealthScore(e)}>
                        <option value="All">Selecciona</option>
                        {
                            healthFinal?.map(el => {
                                return (
                                    <option key={el} value={el}>{el}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div>
                    <button onClick={(e) => handleMayor50(e)}>Health_score mayor a 98</button>
                </div>
            </div>
           
        </div>
    )
}