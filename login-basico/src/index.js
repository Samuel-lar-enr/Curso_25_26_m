//import css

import { initialApp } from "./app";
import  bcryptjs  from "bcryptjs";

const salt = bcryptjs.genSaltSync(10);
const passwordHash = bcryptjs.hashSync("12345", salt)
console.log(passwordHash)
initialApp();


