import { alojamientos } from '../db/db'
import fetching from '../utils/fetching';

export default function CreateEjercicio4() {
    //closure SCOPE

    //No fetching
    const noFetching = () => alojamientos
    //renderTable
    const renderTable = (alojamientos) => {
        const container = document.createElement("div");
        container.classList.add("table-container");

        const table = document.createElement("table");
        table.classList.add("table");

        const thead= document.createElement("thead");
        const trhead= document.createElement("tr");

        ["Nombre","Ubicación","Precio","Rating"].forEach(text =>{

            const th = document.createElement("th")
            th.textContent = text
            trhead.appendChild(th)
        })
        thead.appendChild(trhead)
        table.appendChild(thead)
        //body
        const tbody= document.createElement("tbody")
        alojamientos.forEach(alojamiento => {

            const tr = document.createElement("tr")
            //nombre
            const tdNombre = document.createElement("td")
            tdNombre.textContent= alojamiento.nombre
            tr.appendChild(tdNombre)
            //ubicacion
            const ubicacion = document.createElement("td")
            ubicacion.textContent= alojamiento.ubicacion
            tr.appendChild(ubicacion)
            //precio
            const precio = document.createElement("td")
            precio.classList.add("price")
            precio.textContent= `${alojamiento.precio}$`
            tr.appendChild(precio)
            //rating
            const rating = document.createElement("td")
            rating.classList.add("rating")
            rating.textContent = `⭐`.repeat(alojamiento.rating) + ` | ${alojamiento.rating}/5`
            tr.appendChild(rating)
            
            //añadimos cada fila al tbody
            tbody.appendChild(tr)
        })
        table.appendChild(tbody)
        container.appendChild(table)

        return container;
    }
    //renderFuction
   function render(){
        //aqui decido donde pintar el objeto en el DOM
            const mainContainer= document.createElement("div")

            // versión sincrona

            // const v1Wrapper= document.createElement("div")
            // v1Wrapper.innerHTML="<h3> Versión Síncrona </h3>"
            

            // version asincrona
            const v2Wrapper= document.createElement("div")
            v2Wrapper.innerHTML="<h3> Versión Asíncrona </h3>"
            fetching("alojamientos")
            .then(data => {
                console.log("DATA RECIBIDA:", data);
                v2Wrapper.appendChild(renderTable(data))
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
