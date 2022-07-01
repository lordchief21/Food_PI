import axios from 'axios';

export const GET_FOOD = 'GET_FOOD';
export const GET_DIET = 'GET_DIET';
export const FILTER_BY_DIET = 'FILTER_BY_DIET';
export const FILTER_ASC_DESC ='FILTER_ASC_DESC';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';
export const GET_DETAIL = 'GET_DETAIL';
export const POST_FOOD ='POST_FOOD'


// LLamadas a las rutas de mi servidor

export function getFood() {

    return async function(dispatch) {
        const foodResult = (await axios("http://localhost:3001/recipe",{ })).data;
        return dispatch ({
            type: GET_FOOD,
            payload: foodResult

        })
    }


};

export function getDiet() {
    return async function(dispatch){
        const dietResult = (await axios("http://localhost:3001/diet",{})).data;
        return dispatch({
            type: GET_DIET,
            payload: dietResult
        })
    }
};


export function getFoodDetail(id) {
    return async function(dispatch) {
        const foodDetail = (await axios(`http://localhost:3001/recipe/${id}`)).data;
        return dispatch({
            type: GET_DETAIL,
            payload:foodDetail
        })
    }
};


export function newRecipe(recipeNew) {
    return async function (dispatch) {
        try {
        const res = await axios.post("http://localhost:3001/recipe/create", recipeNew);
        dispatch({
            type: POST_FOOD , 
            payload: res.data}, 
            alert("fOOD CREATED"));
        } catch (err) {
        alert("ERROR Could not create a Recipe");
        }
  }; 

};




// Creación de funciones para el filtrado

export function filterByDiet(payload) {
    return {
        type: FILTER_BY_DIET,
        payload: payload

    }
};

export function filteredByAlphabetic(payload){
    console.log(payload)
    return {
        type: FILTER_ASC_DESC,
        payload: payload
    }
};

export function filteredByOrigin(payload){
    
    return {
        type: FILTER_BY_ORIGIN,
        payload: payload
    }
}




