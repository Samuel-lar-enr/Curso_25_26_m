import { publicaciones } from '../db/db';
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

export default function CreateEjercicio7() {

    const noFetching =()=> publicaciones

    const blogCreator = (publicaciones) => {
        const contenedor = document.createElement("div");
        contenedor.classList.add("blog-container");

        publicaciones.forEach(publicacion => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("post")

            const titulo = document.createElement("h3")
            titulo.classList.add("post-title")
            titulo.textContent= publicacion.titulo
            tarjeta.appendChild(titulo)

            const autor = document.createElement("p")
            autor.classList.add("post-meta")
            autor.textContent= `${publicacion.autor}  | ${publicacion.fecha}`
            tarjeta.appendChild(autor)

            const contenido = document.createElement("p")
            contenido.classList.add("post-content")
            contenido.textContent= `${publicacion.contenido}`
            tarjeta.appendChild(contenido)

            const etiquetas= document.createElement("div")
            etiquetas.classList.add("tags-container")

            publicacion.etiquetas.forEach(etiqueta=>{
                const tag = document.createElement("span")
                tag.classList.add("tag")
                tag.textContent= etiqueta 
                etiquetas.appendChild(tag)
            
            })
            tarjeta.appendChild(etiquetas)

            const likes = document.createElement("span")
            likes.classList.add("likes-count")
            likes.textContent= `❤️${publicacion.likes} likes`
            
            tarjeta.appendChild(likes)
            
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
        v1Wrapper.appendChild(blogCreator(noFetching()))
        mainContainer.appendChild(v1Wrapper)
        //verison sincrona 
        const v2Wrapper= document.createElement("div")
        v2Wrapper.innerHTML="<h3> Versión Asíncrona </h3>"
        fetching("publicaciones")
            .then(data => {
                console.log("DATA RECIBIDA:", data);
                v2Wrapper.appendChild(blogCreator(data))
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