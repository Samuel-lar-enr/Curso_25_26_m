import { loginUsuarioArray, registrarUsuarioArray } from "./helpers/arrayHandler";
import { registrarUsuarioMapa } from "./helpers/mapHandler";
import { loginUsuarioObjeto, registrarUsuarioObjeto } from "./helpers/objectHandler";

localStorage.clear();
registrarUsuarioArray("sanmuel","fefwefws",[])
registrarUsuarioArray("PEPE","bqwdgf",[])
loginUsuarioArray("sanmuel","fefwefws",[])
loginUsuarioArray("PEPE","bqwdgf",[])

registrarUsuarioObjeto("sanmuel","fefwefws",{})
registrarUsuarioObjeto("PEPE","bqwdgf",{})
loginUsuarioObjeto("sanmuel","fefwefws",{})
loginUsuarioObjeto("PEPE","bqwdgf",{})

registrarUsuarioMapa("sanmuel","fefwefws",new Map())
registrarUsuarioMapa("PEPE","bqwdgf",new Map())
