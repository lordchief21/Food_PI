import {React} from 'react';
import FoodCard from '../Card/FoodCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {getFood} from '../../Redux/action/index';
import Pagination from '../Pagination/Pagination';
import NavBar from '../NavBar/NavBar';
import CardList from '../CardList/CardList'
import styles from './Home.module.css'
import bgVideo from '../LandingPage/Assets/Video/background.mp4'





export default function Home() {
  
  const dispatch = useDispatch();
  const allFood = useSelector((state) => state.food);
  

  const foodNumber = 9
  
  //Renderizadores de estados
   const [currPage, setCurrPage] = useState(1);
   const [foodPerPage, setFoodPerPAge] = useState(foodNumber);
   

   
  
   //Lógica de paginado
  const indexOfLastFood = currPage * foodPerPage;                //Generamos dos index para ubicarnos en el slice
  const indexOfFirstFood = indexOfLastFood - foodPerPage;
  const foodCurr =  allFood?.slice(indexOfFirstFood, indexOfLastFood);
  

 //Los useEffect


  useEffect(() => {
    dispatch(getFood());
  }, [dispatch]);


  

   //Lógica de paginado

  const paginate = (numberOfPage) => {
    setCurrPage(numberOfPage)
  }
  



            //Handlers

  function handleClick(e){
    e.preventDefault();
    dispatch(getFood())
    setCurrPage(1)
  }



  //Código

  return (
    <div className={styles.container}>
      {/* <h1>ESTO ES UNA PRUEBA DE FOOD</h1>
      <button onClick={e => {handleClick(e)}}>NO ME ROMPAS PLIS!!</button> */}


      <NavBar className={styles.NavBar} setCurrPage = {setCurrPage}/>

      
      <Pagination 
      foodPerPage ={foodPerPage}
      allFood = {allFood?.length}
      paginate = {paginate} 
      onChange ={t => {console.log(t.target.value)}}
      />
     

     <CardList foodCurr ={foodCurr} />
      
      
    </div>
  );
}