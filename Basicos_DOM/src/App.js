import { Createejercicio1 } from "./helpers/ejercicio1";
import CreateEjercicio10 from "./helpers/ejercicio10";
import CreateEjercicio11 from "./helpers/ejercicio11";
import CreateEjercicio12 from "./helpers/ejercicio12";
import CreateEjercicio13 from "./helpers/ejercicio13";
import { CreateEjercicio2 } from "./helpers/ejercicio2";
import { CreateEjercicio3 } from "./helpers/ejercicio3";
import CreateEjercicio4 from "./helpers/ejercicio4";
import CreateEjercicio5 from "./helpers/ejercicio5";
import CreateEjercicio6 from "./helpers/ejercicio6";
import CreateEjercicio7 from "./helpers/ejercicio7";
import CreateEjercicio8 from "./helpers/ejercicio8";
import CreateEjercicio9 from "./helpers/ejercicio9";

export default function createApp() {
    const appDiv = document.getElementById("app");
    
    //appDiv.appendChild( CreateEjercicio2().render());

    //const ejercicio3 = CreateEjercicio3();
    //appDiv.appendChild(CreateEjercicio3().render());

    //const ejercicio4 = CreateEjercicio4()
    //appDiv.appendChild(CreateEjercicio4().render());

    //const ejercicio5 = CreateEjercicio5()
    //appDiv.appendChild(ejercicio5.render());

    //const ejercicio6 = CreateEjercicio6()
    //appDiv.appendChild(ejercicio6.render());
    
    //const ejercicio7 = CreateEjercicio7()
    //appDiv.appendChild(ejercicio7.render());

    //const ejercicio8 = CreateEjercicio8()
    //appDiv.appendChild(ejercicio8.render());

    //const ejercicio9 = CreateEjercicio9()
    //appDiv.appendChild(ejercicio9.render());

    //const ejercicio10 = CreateEjercicio10()
    //appDiv.appendChild(ejercicio10.render());

    //const ejercicio11 = CreateEjercicio11()
    //appDiv.appendChild(ejercicio11.render());

    //const ejercicio12 = CreateEjercicio12()
    //appDiv.appendChild(ejercicio12.render());

    const ejercicio13 = CreateEjercicio13()
    appDiv.appendChild(ejercicio13.render());


//   return (
//     <div>app</div>
//   )
}

