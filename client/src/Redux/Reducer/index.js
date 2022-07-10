import { GET_FOOD, GET_DIET, FILTER_BY_DIET,FILTER_ASC_DESC,FILTER_BY_ORIGIN, GET_DETAIL,SEARCH_BY_NAME,UMOUNT_FOOD_DETAIL ,FILTER_BY_HEALTH_SCORE, MAYOR_98} from "../action";


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
        
        case UMOUNT_FOOD_DETAIL:
            return {
                ...state,
                foodDetail: [],
            };    

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
            const allFoodSup = [...state.foodSup]

            if (action.payload === 'AtoZ') {
                const res = allFoodSort.sort( (s , d) =>  { 
                    if(s.name > d.name){ 
                        return 1
                    }else {
                        return -1}
                    })

                return {
                    ...state,
                    food: res,
                }
                
            } else if (action.payload === 'ZotA') {
                const res = allFoodSort.sort((s, d) => {
                    if (s.name < d.name) {
                        return 1
                    }else{
                        return -1
                    }})
                return {
                    ...state,
                    food: res,  
                }
            } else {
                const res = allFoodSup
                return {
                    ...state,
                    food: res,
                }
            }
           

        case FILTER_BY_ORIGIN:
            const allFoodOrigin = state.foodSup
                
            const filterByOrigin = action.payload ==="Created"? allFoodOrigin.filter(o => o.createdInDb) : action.payload === "API"? allFoodOrigin.filter(o => !o.createdInDb): allFoodOrigin

            console.log(filterByOrigin)
                
            return {
                ...state,
                food: filterByOrigin
             };

        case FILTER_BY_HEALTH_SCORE:
            const foodForHealth = [...state.food] 
            const foodForHealthForCopy = [...state.foodSup] 

             const health = foodForHealth?.filter(el => el.health_score == action.payload)

             console.log("flag filter Health ", action.payload)

            if(health.length > 0) {
                return {
                    ...state,
                    food: health
                }

            } else {
                return {
                    ...state,
                    food: foodForHealthForCopy
                }
            }
             
          


        case SEARCH_BY_NAME:

            const searchName = [...state.foodSup]
            console.log("flag actionPayload", action.payload )
             const response = action.payload
             console.log("flag response", typeof response )
            



            if(response !== "No tengo la receta que buscas") {
                const resFinal = response
                console.log("flag response if", resFinal )
                return {
                    ...state,
                    food: resFinal
                }
            } else{
                const resFinal = searchName
                console.log("flag response else", resFinal )
                
                alert("No existe la receta :( !")
                
                return {
                    ...state,
                    food: resFinal
                }
            }
        
            case MAYOR_98:
                
            const res = [...state.food]

            const info = action.payload

           console.log("Flag Mayor: ", info)

           const mayor = res.filter(el => el.health_score >= 98)

           return {
            ...state,
            food: mayor
           }

        
        default: return{
            state
        }
    }


}