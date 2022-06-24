const {Diet, Recipe} = require('../db');
const API = require('../API_JSON/API_JSON')
const axios = require('axios');

const {
  API_KEY
} = process.env;

let apiArr = API.results;



const getRecipesApi = async () => {
    let recetas = apiArr;
    const url =`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    let getRecipe = (await axios(url)).data.results
    let recetasMap= getRecipe.map((receta) => ({
      id: receta.id,
      name: receta.title,
      plate_resume: receta.summary,
      health_score: receta.healthScore,
      image:receta.image,
      step_by_step:(receta.analyzedInstructions[0]&&receta.analyzedInstructions[0].steps?receta.analyzedInstructions[0].steps.map(s => s.step).join(" \n"):''),
      diets: receta.diets
    }))
    
    return recetasMap;
  
  };


  const getRecipesDb = async () => {
    let getDb = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ["name"],
            through: {attributes: []},
        }
    })

    return getDb
  };

  const recipeResult = async () => {
    const infoApi =  await getRecipesApi();  //Liberar el await al momento de usar la Url
    const infoDb = await getRecipesDb()
    const infoConcat = infoApi.concat(infoDb);
    console.log("Esto es recipeResult:  " + infoDb)
    return infoConcat
  }







  
  const postRecipe = async (req, res) => {

    try {
    
        const {name, plate_resume,health_score,image,step_by_step,diets} = req.body
        
        const createRecipe = await Recipe.create({
            name,
            plate_resume,
            health_score,
            image,
            step_by_step

        })

        const includingDiet = await  Diet.findAll({
          
             where: {name: diets}
        
        })

        createRecipe.addDiet(includingDiet)


        res.status(200).send("Recipe Creado")
    } catch (error) {
        console.log(error)
    }
    
  }


  module.exports = {
    getRecipesApi,
    postRecipe,
    recipeResult,
    
  }