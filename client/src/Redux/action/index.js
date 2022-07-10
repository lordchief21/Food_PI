import axios from 'axios';

export const GET_FOOD = 'GET_FOOD';
export const GET_DIET = 'GET_DIET';
export const FILTER_BY_DIET = 'FILTER_BY_DIET';
export const FILTER_ASC_DESC ='FILTER_ASC_DESC';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';
export const GET_DETAIL = 'GET_DETAIL';
export const POST_FOOD ='POST_FOOD';
export const SEARCH_BY_NAME ='SEARCH_BY_NAME';
export const UMOUNT_FOOD_DETAIL = "UMOUNT_FOOD_DETAIL";
export const FILTER_BY_HEALTH_SCORE = "FILTER_BY_HEALTH_SCORE";
export const MAYOR_98= "MAYOR_98";


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


export async function newRecipe(recipeNew) {
  
    try {
        const res = await axios.post("http://localhost:3001/recipe/create", recipeNew);
        alert("fOOD CREATED");
    } catch (err) {
        alert("ERROR Could not create a Recipe");
    }
  

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

export function filteredByHealthScore(payload){
    
    return {
        type: FILTER_BY_HEALTH_SCORE,
        payload: payload
    }
}

export function filterByCincuenta(payload) {
    return {
        type:MAYOR_98,
        payload: payload
    }
}

export  function getFoodByName (foodName) {
    return async (dispatch) => {
            
            var nameFood = (await axios.get(`http://localhost:3001/recipe?name=${foodName}`,{
                validateStatus: (status) => status })).data;
            console.log("flag status", nameFood )
            return dispatch ({
                type: SEARCH_BY_NAME,
                payload: nameFood
            })

       
    }
}



// AUXILIAR PARA EL DETAIL

export const umountFood=()=>{
    return({
        type: UMOUNT_FOOD_DETAIL
    })    
}



