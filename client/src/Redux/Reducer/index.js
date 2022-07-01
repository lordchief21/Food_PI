import { GET_FOOD, GET_DIET, FILTER_BY_DIET,FILTER_ASC_DESC,FILTER_BY_ORIGIN, GET_DETAIL } from "../action";


const initialState = {
    food : [],
    foodSup: [],
    diets : [],
    foodDetail: []
}



export default function rootReducer(state= initialState, action) {

    switch (action.type) {
        case GET_FOOD:
            return {
                ...state,
                food : action.payload,
                foodSup: action.payload
            };
        
        case GET_DIET:
            return {
                ...state,
                diets: action.payload
            };

        case GET_DETAIL:
            return {
                ...state,
                foodDetail: action.payload
            }

        case FILTER_BY_DIET:
            
            const allRecipe = [...state.foodSup];
            console.log(allRecipe)
            console.log(action.payload)
            const dietFiltered = action.payload == "All" ? allRecipe : allRecipe.filter(f => f.diets?.map(d => d.name).includes(action.payload))
            console.log(dietFiltered)
        
            return{
                ...state,
                food: dietFiltered

            };

        case FILTER_ASC_DESC:
            const allFoodSort = [...state.food];

            if (action.payload === 'AtoZ') {
                allFoodSort.sort( (s , d) =>  { 
                    if(s.name > d.name){ 
                        return 1
                    }else {
                        return -1}
                    })
            } else if (action.payload === 'ZotA') {
                allFoodSort.sort((s, d) => {
                    if (s.name < d.name) {
                        return 1
                    }else{
                        return -1
                    }
                })
            }
           
            console.log(allFoodSort)
                
            return {
                ...state,
                food: allFoodSort,
            }
        
        case FILTER_BY_ORIGIN:
            const allFoodOrigin = state.foodSup
                
            const filterByOrigin = action.payload ==="Created"? allFoodOrigin.filter(o => o.createdInDb) : action.payload === "API"? allFoodOrigin.filter(o => !o.createdInDb): allFoodOrigin

            console.log(filterByOrigin)
                
            return {
                ...state,
                food: filterByOrigin
             };
    
        default: return{
            state
        }
    }


}