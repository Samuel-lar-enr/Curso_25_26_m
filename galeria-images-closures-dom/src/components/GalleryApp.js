import { imagesData } from "../data/imagenes";
import { createImageGrid } from "./ImageCard";

export function createGalleryApp(){

    //contenedor principal
    const container = document.createElement("div");
    container.className='min-h-screen bg-linear-to-br from-purple-100 via-white to-pink-300 text-center'

    //header<-----------------------------------------------------
    const header = document.createElement("header")
    header.className="bg-white shadow-lg sticky top-0 z-40"

    const headerContentDiv = document.createElement("div")
    headerContentDiv.className="max-w-7xl mx-auto px-6 py-6"

    const headerTitle= document.createElement("h1")
    headerTitle.className="text-3xl font-bold text-purple-800 mb-2"
    headerTitle.textContent = "🎨 Galeria de Imágenes"

    const headerSubtitle= document.createElement("p")
    headerSubtitle.className="text-gray-600"
    headerSubtitle.textContent = "Aprende Clousures, funciones fabrica y manipulación DOM "

    headerContentDiv.appendChild(headerTitle)
    headerContentDiv.appendChild(headerSubtitle)

    header.appendChild(headerContentDiv)


    //main<-------------------------------------------------------

    const main = document.createElement("main")
    main.className="max-w-7xl mx-auto px-6 py-8 text-center"

    //contador de favoritos
    const counterComponent = document.createElement("h2")
    counterComponent.textContent="aui va a ir la imagen de componente favoritesCounter"

    //modal de imagen
    const imgModal = document.createElement("h2")
    imgModal.textContent= "aui va a ir la imagen de componente imgModal"

    //grid de imágenes
    const gridComponent = document.createElement("h2")
    gridComponent.textContent= "aui va a ir la imagen de componente grid";
    const ImageGrid = createImageGrid(imagesData)

    main.appendChild(ImageGrid.element)


    //añadimos todo al main
    main.appendChild(counterComponent)
    main.appendChild(imgModal)
    main.appendChild(gridComponent)

    

    //footer<-----------------------------------------------------
    const footer = document.createElement("header")
    footer.className="bg-gray-900 shadow-lg sticky bottom-0 z-40 text-center"


    const footerContentDiv = document.createElement("div")
    footerContentDiv.className="max-w-7xl mx-auto px-6 py-6"

    const footerText = document.createElement("p")
    footerText.className="text-gray-400"
    footerText.textContent="🥶🥶☆*: .｡. o(≧▽≦)o .｡.:*☆🥵🥵----> Ejercicio DOM by Samuel LE🥶🥶<----☆*: .｡. o(≧▽≦)o .｡.:*☆🥵🥵"

    footerContentDiv.appendChild(footerText)
    footer.appendChild(footerContentDiv)


    //Añadimos todo al container 
    container.appendChild(header)
    container.appendChild(main)
    container.appendChild(footer)








    return {
        element: container,

    }
}