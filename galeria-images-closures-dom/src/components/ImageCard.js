import { imagesData } from "../data/imagenes";
//  {
//     id: 1,
//     title: 'MontaÃ±as al atardecer',
//     category: 'naturaleza',
//     url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
//     author: 'John Doe',
//     date: Date.now() - 86400000 * 1,
//   },



export function createImageCard(image,onImageclick,onFavoriteToggle){
//contenedor card
const card =  document.createElement("div");
card.className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group relative"
card.dataset.imageId= image.id;

const imagen = document.createElement("img")
imagen.src = image.url;
imagen.alt = image.title;
imagen.className="w-full h-64 object-cover group-hover:opacity-75 transition-opcacity"
//img.onerror=()=>img.src= "aui un url que simbolice imagen no disponible"

card.appendChild(imagen)

//gestionar el corazond el favorito

//info de la imagen
const info = document.createElement("div")
info.className="p-4 bg-white"

const title = document.createElement("h3")
title.className="font-bold text-lg text-gray-800 mb-2"
title.textContent = image.title;
info.appendChild(title)

const author = document.createElement("p")
author.className="font-semibold text-sm text-gray-600 mb-2"
author.textContent = image.author;
info.appendChild(author)

//introducir en card toda la info
card.appendChild(info)

// evento de la tarjeta

card.onclick = ()=> {
    alert(image.id); // recuerda que lo sustituiré por onImageCLick
}

return {
    element: card,
    //*****aquí irán las funciones
    // isFavorite<- es favorita la imagen
    // setFavorite<_ convierte la imagen en favorite */

}

}

export function createImageGrid(images,onImageclick,onFavoriteToggle){

    //Creamos un map privado que guarde las tarjetas
    const cards = new Map();
    const grid = document.createElement("div")
    grid.className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"

    //Crar cada tarjeta con createImageCard
    images.forEach(image => {
        const cardComponente = createImageCard(
            image,
            onImageclick,
            onFavoriteToggle
        );
        grid.appendChild(cardComponente.element)
        cards.set(image.id,cardComponente)

    });

    return{
        element: grid,
       
    }
    
}

export function createImageModal(){
    //cerra la imagen modal
    //que sea click o ESC

    return{
        element,
        xxx,
        xxx
    }
}
