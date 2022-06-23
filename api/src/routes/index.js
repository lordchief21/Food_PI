const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeRouter = require('./recipeRouter')
const dietRouter = require('./dietRouter');
const { route } = require('./recipeRouter');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/recipe", recipeRouter)
router.use("/diet", dietRouter)


module.exports = router;
