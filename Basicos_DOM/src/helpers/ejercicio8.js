import { menuRestaurante } from '../db/db';
import fetching from '../utils/fetching';

// Contenedor principal: "menu-container"
// Título del restaurante: "restaurant-title"
// Cada sección de categoría: "menu-category"
// Nombre de categoría: "category-title"
// Divisor de categoría: "category-divider"
// Contenedor de platos: "dishes-container"
// Cada plato: "dish-item"
// Contenedor de nombre y precio: "dish-header"
// Nombre del plato: "dish-name"
// Precio: "dish-price"
// Descripción: "dish-description"

export default function CreateEjercicio8() {


    const noFetching =()=> menuRestaurante
    // "categorias": [
    // {
    //   "id": 1,
    //   "nombre": "Entrantes",
    //   "platos": [
    //     {
    //       "id": 101,
    //       "nombre": "Ensalada César",
    //       "precio": 8.5,
    //       "descripcion": "Lechuga romana, parmesano, crutones"
    //     },
    const CartaCreator = (menuRestaurante) => {
        const contenedor = document.createElement("div");
        contenedor.classList.add("menu-container");

        const title = document.createElement("h2")
        title.classList.add("restaurant-title")
        title.textContent = "Restaurante Crotolamo 🥵"
        contenedor.appendChild(title)

        menuRestaurante.categorias.forEach(categoria => {

            const categoriaContainer = document.createElement("div");
            categoriaContainer.classList.add("menu-category");

            const categoriaTitle = document.createElement("h3")
            categoriaTitle.classList.add("category-title")
            categoriaTitle.textContent = categoria.nombre
            categoriaContainer.appendChild(categoriaTitle)

            const dividerTOP = document.createElement("hr");
            dividerTOP.classList.add("category-divider");
            
            categoriaContainer.appendChild(dividerTOP);    
            
            const platosContainer = document.createElement("div");
            platosContainer.classList.add("dishes-container");

            categoria.platos.forEach(plato => {
                const platoContainer = document.createElement("div");
                platoContainer.classList.add("dish-item")

                const header = document.createElement("div");
                header.classList.add("dish-header");

                const titulo = document.createElement("h5");
                titulo.classList.add("dish-name");
                titulo.textContent = plato.nombre;

                const precio = document.createElement("span");
                precio.classList.add("dish-price");
                precio.textContent = `${plato.precio} €`;

                header.appendChild(titulo);
                header.appendChild(precio);
                platoContainer.appendChild(header);

                const contenido = document.createElement("p")
                contenido.classList.add("post-content")
                contenido.textContent= `${plato.descripcion}`
                platoContainer.appendChild(contenido)

                platosContainer.appendChild(platoContainer)
            });
            const dividerBT = document.createElement("hr");
            dividerBT.classList.add("category-divider");
            
            categoriaContainer.appendChild(platosContainer)
            categoriaContainer.appendChild(dividerBT)
            contenedor.appendChild(categoriaContainer)
        });
        
    
        return contenedor;
    };

    function render  (){
        //aqui decido donde pintar el objeto en el DOM
        const mainContainer= document.createElement("div")
        //verison sincrona 
        const v1Wrapper= document.createElement("div")
        v1Wrapper.innerHTML="<h3> Versión Síncrona </h3>"
        v1Wrapper.appendChild(CartaCreator(noFetching()))
        mainContainer.appendChild(v1Wrapper)
        //verison sincrona 
        const v2Wrapper= document.createElement("div")
        v2Wrapper.innerHTML="<h3> Versión Asíncrona </h3>"
        fetching("menuRestaurante")
            .then(data => {
                console.log("DATA RECIBIDA:", data);
                v2Wrapper.appendChild(CartaCreator(data))
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