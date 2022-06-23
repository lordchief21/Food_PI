const getDiet = require('../controllers/dietControllers')

const { Router } = require('express');



const router = Router();


router.get("", async(req,res)=> {
    try {
       let getInfoDiet = await getDiet;
       res.status(202).send(getInfoDiet) 
    } catch (error) {
        console.log(error)
        
    }})



module.exports= router