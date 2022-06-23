const {Diet, Recipe} = require('../db');
const API = require('../API_JSON/API_JSON')
const axios = require('axios')



const getDiet = async () => {

    try {
        // Descomentaremos esta cuando ya tengamos la lógica final para proceder con los request ( 150 request por día)
        // const url ='https://api.spoonacular.com/recipes/complexSearch?apiKey=aa8c67c7841e46c6bb383427620c4362&number=100&addRecipeInformation=true'
        // let getDiet = (await axios(url)).data.results

        let apiArr = API.results;

        console.log("Esto es de apiAr:   " + apiArr)

        
        //Seteamos para usarlo al momento de 
        let dietArr = [];
        let dietMap = apiArr.map((el) => {
            let diet = el.diets;
            let dietSplitted = diet;
            dietArr.push(dietSplitted)
        });

        let dietFlat = dietArr.flat();

        const dietSet = new Set(dietFlat);
        const dietResult = Array.from(dietSet)

        const dietUpToDb = dietResult.map(async el => {
            await Diet.findOrCreate({
                where:{name: el}
            })
        })

    
        // console.log("Esto es de dietMap:   " + dietResult);
        return dietResult

    } catch (error) {
        console.log(error)
    }
    


};





module.exports = getDiet()