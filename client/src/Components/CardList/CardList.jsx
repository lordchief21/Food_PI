import React from "react";
import { Link } from "react-router-dom";
import FoodCard from "../Card/FoodCard";

export default function CardList({foodCurr}) {



    return (
        <div>
            
            {
                foodCurr?.map(p => {
                return(
                    <Link to={"/home/" + p.id}>
                        <FoodCard name={p.name} id={p.id} diets={p.diets.map(el => <li>{el.name}</li>)} health_score={p.health_score} image ={p.image} />
                    </Link>
                )})
            }

        </div>
    )
}