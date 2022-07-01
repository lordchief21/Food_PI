import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {getDiet,filterByDiet, filteredByAlphabetic, filteredByOrigin} from '../../Redux/action/index';


export default function NavBar({setCurrPage}) {

    const dispatch = useDispatch();
    const allDiet = useSelector(state => state.diets);
    const [sorted, setSorted] = useState(" ")
 

    useEffect(() => {
        dispatch(getDiet()) 
    },[dispatch])

 
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
    


    return(
        <div>
            
            <div>
                <select onChange={e => handleForFilterOrigin(e)} >
                <option value="All">All</option>
                <option value="Created">Created</option>
                <option value="API">API</option>
                </select>
            </div>

            <div>
                <select onChange={e => handleForAlphabetic(e)} >
                    <option value="All">All</option>
                    <option value='AtoZ'>A to Z</option>
                    <option value='ZotA'>Z to A</option>
                </select>
            </div>
            <div>
                <select  onChange={e => handleForFilterDiet(e)}>
                    <option value="All">All</option>
                    {
                        allDiet?.map(el => {
                            return (
                                <option value={el}>{el}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}