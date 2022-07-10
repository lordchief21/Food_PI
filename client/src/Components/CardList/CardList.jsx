import React from "react";
import { Link } from "react-router-dom";
import FoodCard from "../Card/FoodCard";
import styles from './CardList.module.css';

export default function CardList({foodCurr}) {



    return (
        <div className={styles.container}>
            
            {
                foodCurr?.map(p => {
                return(
                    <Link key={p.id} to={"/home/" + p.id} className={styles.link}>
                        <FoodCard name={p.name} id={p.id} diets={p.diets.map((el, i) => <li key={i} >{el.name}</li>)} health_score={p.health_score} image ={p.image} />
                    </Link>
                )})
            }

        </div>
    )
}