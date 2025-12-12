import { usuariosConHabilidades } from '../db/db';
import fetching from '../utils/fetching';

// Contenedor principal: "users-container"
// Tarjeta de cada usuario: "user-card"
// Nombre del usuario: "user-name"
// Edad y email: "user-info"
// Desarrollo Web en entorno Cliente - 2º DAW DAW - IES HLanz -
// Profesor: Isaías FL 9 / 17
// Contenedor de habilidades: "skills-container"
// Cada habilidad: "skill-tag"
// Nivel del usuario: "level-badge"
// Si es senior: añadir clase "senior" al level-badge
// Si es junior: añadir clase "junior" al level-badge

export default function CreateEjercicio6() {
    
//   {
//     "id": 1,
//     "nombre": "Ana García",
//     "edad": 28,
//     "email": "ana@example.com",
//     "habilidades": [
//       "JavaScript",
//       "React",
//       "CSS"
//     ],
//     "nivel": "Senior"
//   },
    const noFetching =()=> usuariosConHabilidades

    const cardUserCreator = (usuariosConHabilidades) => {
        const contenedor = document.createElement("div");
        contenedor.classList.add("users-container");

        usuariosConHabilidades.forEach(usuario => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("user-card")

            const name = document.createElement("h3")
            name.classList.add("user-name")
            name.textContent= usuario.nombre
            tarjeta.appendChild(name)

            const edad = document.createElement("p")
            edad.classList.add("user-info")
            edad.textContent= `${usuario.edad} años | ${usuario.email}`
            tarjeta.appendChild(edad)

            const habilidades= document.createElement("div")
            habilidades.classList.add("skills-container")

            usuario.habilidades.forEach(habilidaduser=>{
                const habilidad = document.createElement("span")
                habilidad.classList.add("skill-tag")
                habilidad.textContent= habilidaduser 
                habilidades.appendChild(habilidad)
            
            })
            tarjeta.appendChild(habilidades)

            const nivel = document.createElement("span")
            nivel.classList.add("level-badge")
            nivel.textContent= usuario.nivel
            if(usuario.nivel === "Senior"){
                nivel.classList.add("senior")
            }else{
                nivel.classList.add("junior")
            }
            tarjeta.appendChild(nivel)
            
            contenedor.appendChild(tarjeta)
        });
        
    
        return contenedor;
    };

    function render  (){
        //aqui decido donde pintar el objeto en el DOM
        const mainContainer= document.createElement("div")
        //verison sincrona 
        const v1Wrapper= document.createElement("div")
        v1Wrapper.innerHTML="<h3> Versión Síncrona </h3>"
        v1Wrapper.appendChild(cardUserCreator(noFetching()))
        mainContainer.appendChild(v1Wrapper)
        //verison sincrona 
        const v2Wrapper= document.createElement("div")
        v2Wrapper.innerHTML="<h3> Versión Asíncrona </h3>"
        fetching("usuariosConHabilidades")
            .then(data => {
                console.log("DATA RECIBIDA:", data);
                v2Wrapper.appendChild(cardUserCreator(data))
            })
            .catch((err)=>{
                console.log("Error",err);
                throw err
            })

        mainContainer.appendChild(v2Wrapper)

        return mainContainer

    }

    return {
        render
    }

}