import { Router } from "express"
import * as controllers from '../controllers/controller.api.auth.js'
import { validarCuenta } from '../../middleware/auth.validate.middleware.js'
import { validateToken } from "../../middleware/token.validate.middleware.js"
import { validatePerfil } from "../../middleware/auth.validate.middleware.js"
const route = Router()
//Register
route.post('/cuenta', [validarCuenta],controllers.crearCuenta)
//Login
route.post('/cuenta/login', [validarCuenta],controllers.login)
//Salir
route.delete("/cuenta",[validarCuenta], controllers.logout)

route.post("/perfil",[ validateToken, validatePerfil], controllers.crearPerfil)

route.get("/perfil/:id", controllers.obtenerPerfil)

route.get("/perfil/:userName/recetas", controllers.obtenerRecetasUsuario);



export default route
