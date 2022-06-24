import axios from 'axios';

export const GET_FOOD = 'GET_FOOD'


// LLamadas a las rutas de mi servidor

export function getFood() {

    return async function(dispatch) {
        const foodResult = (await axios("http://localhost:3001/recipe",{ })).data;
        return dispatch ({
            type: GET_FOOD,
            payload: foodResult

        })
    }


}