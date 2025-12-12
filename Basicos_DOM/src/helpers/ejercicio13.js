import fetching from "../utils/fetching";


export default function CreateEjercicio13() {
    const setHoteles = new Set()
  
    const projectCreator = (projects) => {
        const contenedor = document.createElement("div");
        contenedor.classList.add("portfolio-container");

        contenedor.appendChild(headerCreator())
        contenedor.appendChild(BodyCreator())
        contenedor.appendChild(footerCreator())

        
        return contenedor;
    }

    const headerCreator =() =>{
        const header = document.createElement("header");
        header.classList.add("portfolio-container");
        header.innerHTML = `<h1>Booking Agency 🖥️</h1>`
        
        return header;
    }

    const BodyCreator = () => {
        const container = document.createElement("main");
        container.classList.add("portfolio-container");

        
        //creamos el form
        const form = document.createElement("form");
        //creamos el select
        const select = document.createElement("select")
        select.classList.add("select")
        //creamos cada option
        fetching("hoteles")
        .then(data=>{
            
            data.forEach(hotel => {
                setHoteles.add(hotel.ciudad)
            });
            
            setHoteles.forEach(ciudad=>{
                const option = document.createElement("option")
                option.textContent= ciudad

                select.appendChild(option)
            })
        })
        form.appendChild(select)

        //creamos el checkin
        const checkin = document.createElement("input")
        checkin.type="Date"
        checkin.placeholder= "Fecha de checkin"
        checkin.classList.add("checkin")
        form.appendChild(checkin)
        //creamos el chekout
        const checkout = document.createElement("input")
        checkout.type="Date"
        checkout.placeholder= "Fecha de checkout"
        checkout.classList.add("checkout")
        form.appendChild(checkout)

        //numero de huespedes
        const numHuespedes = document.createElement("input")
        numHuespedes.type="Number"
        numHuespedes.min=1
        numHuespedes.value=1
        numHuespedes.placeholder= "Número de huespedes"
        numHuespedes.classList.add("numHuespedes")
        numHuespedes.id="Huespedes"
        form.appendChild(numHuespedes)

        //boton
        const btn = document.createElement("button")
        btn.type="submit"
        btn.placeholder="Buscar Hotel"
        
        form.appendChild(btn)




        container.appendChild(form)
        const searchResultsContainer = document.createElement("div");
        searchResultsContainer.classList.add("search-results");
        container.appendChild(searchResultsContainer);

        btn.addEventListener("click", e => {
            e.preventDefault();
            
            const select = document.querySelector(".select");
            const checkin = document.querySelector(".checkin");
            const checkout = document.querySelector(".checkout");

            if (checkin.value && checkout.value) {
                const diasEntreFechas = diasEntre(checkin.value, checkout.value);

                fetching("hoteles")
                .then(data => {
                    const datafiltrada = data.filter(hotel =>
                        hotel.ciudad === select.value &&
                        diasEntreFechas.every(dia => hotel.horario.includes(dia))
                    );

                    // Limpiamos SOLO el contenedor de resultados de búsqueda
                    searchResultsContainer.innerHTML = "";
                    searchResultsContainer.appendChild(cardsCreator(datafiltrada));
                })
                .catch(err => console.error(err));
            }
        });

        const carritoContainer = document.createElement("div");
        carritoContainer.classList.add("cart-container");
        container.appendChild(carritoContainer);

        const carrito= JSON.parse(localStorage.getItem("carrito")) ?? []
           
        if(carrito.length > 0){
            const title= document.createElement("h3")
            title.textContent= "Carrito"
            container.appendChild(title)

            
            carritoContainer.appendChild(cardsCreator(carrito))
            container.appendChild(carritoContainer)

        }
        //boton2
        const btn2 = document.createElement("button")
        btn.type="submit"
        btn.placeholder="Vaciar carro"

        btn2.addEventListener("click",e=>{
            e.preventDefault()
            localStorage.setItem("carrito",JSON.stringify([]))
            container.querySelector(".projects-grid")?.remove()
        })

        container.appendChild(btn2)
        return container

    }

    const cardsCreator= (data)=>{
        const container= document.createElement("div")
        container.classList.add("movies-container")
        data.forEach(hotel=>{
            const card= document.createElement("div")
            card.classList.add("project-card")

            const title= document.createElement("h3")
            title.textContent= hotel.nombre

            const calle = document.createElement("p")
            calle.textContent= `calle:${hotel.calle} | valoracion:${hotel.valoracion}`

            const precio = document.createElement("p")
            precio.textContent= `Precio/d:${hotel.precio_por_dia}$`

            card.appendChild(title)
            card.appendChild(calle)
            card.appendChild(precio)

            card.addEventListener("click",e=>{
                //e.defaultPrevented()
                const carrito= JSON.parse(localStorage.getItem("carrito")) ?? []

                const checkin = document.querySelector(".checkin")
                const checkout = document.querySelector(".checkout")
                const diasTotales = diasEntre(checkin.value, checkout.value).length;
                const numHuespedes = document.querySelector(".numHuespedes")
                
                carrito.push({
                    nombre: hotel.nombre,
                    valoracion: hotel.valoracion,
                    totalPersonas: numHuespedes.value,
                    precio: hotel.precio_por_dia,
                    totalPrecio: (diasTotales*hotel.precio_por_dia)*Number(numHuespedes.value),
                })

                localStorage.setItem("carrito",JSON.stringify(carrito))
                
                const cart_container = document.querySelector(".cart-container")
                

            })

            

            container.appendChild(card)
        })
        return container
    }

    function diasEntre(checkin, checkout) {
    const diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    
    let inicio = new Date(checkin);
    let fin = new Date(checkout);

    let dias = [];

    // recorrer desde checkin hasta checkout (sin incluir checkout)
    while (inicio < fin) {
        dias.push(diasSemana[inicio.getDay()]);
        inicio.setDate(inicio.getDate() + 1);
    }

    return dias;
    }

  
  
    const footerCreator =() =>{
        const footer = document.createElement("footer");
        footer.classList.add("portfolio-container");
        footer.innerHTML = `<h3>hecho con amor</h3>
                            <h5 href="#">©️Samuel Lara Enríquez</h5>`
        
        return footer;
    }
  
  
    const render = () =>{
        return projectCreator()
    }
  
  
  
    return {
        render
    }
}
