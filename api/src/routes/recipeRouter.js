const { Router } = require('express');
const {getRecipesApi, postRecipe, recipeResult} = require('../controllers/recipeControllers');



const router = Router();


router.get("", async (req, res) => {
    try {
        
        const foodQuery = req.query.name
        let getInfoApi = await recipeResult();

        if(foodQuery) {
            let foodResult = getInfoApi.filter(el => el.name.toLowerCase().includes(foodQuery.toLowerCase()))
            foodResult.length ? res.status(200).send(foodResult): res.status(404).send("No tengo la receta que buscas :(");
        }else res.status(200).send(getInfoApi)
    
    } catch (error) {
        console.log(error)
    }
})


router.get("/:id", async (req, res) => {
    const idFood  = req.params.id;
    const getFood = await recipeResult();
    const foodId = getFood.find(el => el.id == idFood);
    res.status(200).send(foodId)
})

router.post("/create", postRecipe)


module.exports= router