import { GET_FOOD } from "../action";


const initialState = {
    food : [],
    foodSup: [],
    diets : [],
}



export default function rootReducer(state= initialState, action) {

    switch (action.type) {
        case GET_FOOD:
            return {
                ...state,
                food : action.payload,
                foodSup: action.payload
            };
           
    
        default: return{
            state
        }
    }


}