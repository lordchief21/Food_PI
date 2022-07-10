import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {getFoodDetail, umountFood} from '../../Redux/action/index';
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import styles from './FoodDetail.module.css'



export default function FoodDetail() {

    const {id} = useParams()
    const dispatch = useDispatch();
    const foodDetail = useSelector((state) => state.foodDetail)


    const stepLog = foodDetail?.step_by_step && foodDetail.step_by_step.split(".")
    
  


    useEffect(() => {
        dispatch(getFoodDetail(id));
        return () => {
            dispatch(umountFood());
          };
    
      }, [dispatch,id]);


      
      console.log(foodDetail)

    return(
        
        <div className={styles.card}>
            {foodDetail?.id ? (
                <div className={styles.cardInfo} >
                    <div>
                        <img src={foodDetail?.image} alt="Imagen" />
                    </div>
                    <div>
                        <h2 className={styles.title}>name:
                        {foodDetail?.name && foodDetail.name}
                        </h2>
                        <h3>id: 
                            {foodDetail?.id && foodDetail?.id}</h3>
                        <p>resume: 
                            {foodDetail?.plate_resume && foodDetail?.plate_resume}</p>
                        <ol style={{color:"red"}}>
                          step_by_step:  
                          {stepLog && stepLog.map((el,i) => <li key={i}>{i+1}.-{el}</li>)} 
                        </ol>
                        <ul>
                           Diets: 
                           {foodDetail?.diets && foodDetail.diets.map((el, i) => <li key={i}>{el.name}</li>)}
                        </ul>

                    </div>
                </div>
            ):(<Loading />)}
        </div>
    )
}