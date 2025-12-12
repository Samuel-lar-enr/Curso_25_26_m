import {  proyectos } from '../db/db';
import fetching from '../utils/fetching';

// Contenedor principal: "portfolio-container"
// Contenedor de filtros: "filter-buttons"
// Cada botón de filtro: "filter-btn"
// Botón activo: clase adicional "active"
// Contador de proyectos: "projects-count"
// Grid de proyectos: "projects-grid"
// Tarjeta de proyecto: "project-card"
// Badge de destacado: "featured-badge"
// Contenido de la tarjeta: "project-card-content"
// Título: "project-title"
// Descripción: "project-description"
// Contenedor de tecnologías: "tech-stack"
// Cada tecnología: "tech-badge"



export default function CreateEjercicio10() {


    const noFetching =()=> proyectos
    // {
    //   "id": 4,
    //   "titulo": "Blog Personal",
    //   "descripcion": "Sistema de blogging con Markdown y comentarios",
    //   "tecnologias": ["Next.js", "Markdown", "Tailwind CSS"],
    //   "imagen": "https://via.placeholder.com/300x200/7c3aed/ffffff?text=Blog",
    //   "url": "https://ejemplo-blog.com",
    //   "destacado": false,
    //   "fechaFinalizacion": "2023-11-30"
    // }
    const projectCreator = (projects) => {
    const contenedor = document.createElement("div");
    contenedor.classList.add("portfolio-container");

    const title = document.createElement("h2");
    title.classList.add("restaurant-title");
    title.textContent = "📋 Portafolio de Proyectos";

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("filter-buttons");

    const btnTodos = document.createElement("button");
    btnTodos.classList.add("filter-btn", "active");
    btnTodos.type = "button";
    btnTodos.textContent = "Todos";
    buttonsContainer.appendChild(btnTodos);

    const arraybotones = [];

    // Crear botones únicos
    projects.forEach(project => {
        project.tecnologias.forEach(tecnologia => {
            if (!arraybotones.includes(tecnologia)) {
                arraybotones.push(tecnologia);

                const btn = document.createElement("button");
                btn.classList.add("filter-btn");
                btn.type = "button";
                btn.textContent = tecnologia;
                buttonsContainer.appendChild(btn);
            }
        });
    });

    contenedor.appendChild(title);
    contenedor.appendChild(buttonsContainer);

    // Contenedor para las cards
    const cardsZone = document.createElement("div");
    contenedor.appendChild(cardsZone);

    // Render inicial
    cardsZone.appendChild(cardsCreator(projects));

    // EVENT LISTENERS PARA CADA BOTÓN
    const botones = contenedor.querySelectorAll(".filter-btn");

        botones.forEach(boton => {
            boton.addEventListener("click", () => {

                // Quitar .active del botón previo
                botones.forEach(b => b.classList.remove("active"));
                boton.classList.add("active");

                const tecnologiaElegida = boton.textContent;

                // Borrar las cards anteriores
                cardsZone.innerHTML = "";

                if (tecnologiaElegida === "Todos") {
                    // Mostrar todos
                    cardsZone.appendChild(cardsCreator(projects));
                } else {
                    // Filtrar proyectos por tecnología
                    const filtrados = projects.filter(project =>
                        project.tecnologias.includes(tecnologiaElegida)
                    );

                    cardsZone.appendChild(cardsCreator(filtrados));
                }
            });
        });

        return contenedor;
    }

    function cardsCreator(array){
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("projects-grid");

        array.forEach(proyecto=>{
            const card = document.createElement("div");
            card.classList.add("project-card");

            if(proyecto.destacado){
                const badge = document.createElement("span")
                badge.classList.add("featured-badge");
                badge.textContent= "⭐";
                card.appendChild(badge)
            }

            const titulo = document.createElement("h4")
            titulo.classList.add("project-title");
            titulo.textContent= proyecto.titulo;
            card.appendChild(titulo)

            const content = document.createElement("p")
            content.classList.add("project-description");
            content.textContent= proyecto.descripcion;
            card.appendChild(content)

            const tecnologies = document.createElement("div");
            tecnologies.classList.add("tech-stack");

            proyecto.tecnologias.forEach(tecnologia =>{
                const tecnologie = document.createElement("span");
                tecnologie.classList.add("tech-badge");
                tecnologie.textContent= tecnologia
                tecnologies.appendChild(tecnologie)
            })

            card.appendChild(tecnologies)

            cardContainer.appendChild(card)

        })
        return cardContainer;
    }


    function render  (){
        // //aqui decido donde pintar el objeto en el DOM
         const mainContainer= document.createElement("div")
        // //verison sincrona 
        const v1Wrapper= document.createElement("div")
        v1Wrapper.innerHTML="<h3> Versión Síncrona </h3>"
        v1Wrapper.appendChild(projectCreator(noFetching()))
        mainContainer.appendChild(v1Wrapper)
        //verison sincrona 
        const v2Wrapper= document.createElement("div")
        v2Wrapper.innerHTML="<h3> Versión Asíncrona </h3>"
        fetching("proyectos")
            .then(data => {
                console.log("DATA RECIBIDA:", data);
                v2Wrapper.appendChild(projectCreator(data))
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