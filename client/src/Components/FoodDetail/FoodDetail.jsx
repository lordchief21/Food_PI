import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {getFoodDetail} from '../../Redux/action/index';
import { useParams } from "react-router-dom";



export default function FoodDetail() {

    const {id} = useParams()
    const dispatch = useDispatch();
    const foodDetail = useSelector((state) => state.foodDetail)


    const stepLog = foodDetail?.step_by_step.split(".")
    
  


    useEffect(() => {
        dispatch(getFoodDetail(id));
    
      }, [dispatch,id]);
      
      console.log(foodDetail)

    return(
        <div>
            <div>
                <img src={foodDetail?.image} alt="Imagen" />
            </div>
            <div>
                <h2>name:{foodDetail?.name}</h2>
                <h3>id: {foodDetail?.id}</h3>
                <p>resume: {foodDetail?.plate_resume}</p>
                <ol>{stepLog?.map(el => <li>{el}</li>)} </ol>
                <ul>
                    {foodDetail?.diets.map(el => <li>{el.name}</li>)}
                </ul>

            </div>
        </div>
    )
}