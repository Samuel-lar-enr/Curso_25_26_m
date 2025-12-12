
const CreateApp = () => {
    const app = document.querySelector("#app")

    const header = document.createElement("header")
    const title = document.createElement("h1")
    title.textContent = "MoviFlix Samuel"

    header.appendChild(title)
    app.appendChild(header)

    const footer = document.createElement("footer")
    const footerText = document.createElement("p")
    footerText.textContent = "© 2025 MoviFlix Samuel. Todos los derechos reservados."

    footer.appendChild(footerText)
    app.appendChild(footer)

    //contenedor principal
    const main = document.createElement("main")
    main.className = "main-container"

    //contenedor de filtros
    const filtersContainer = document.createElement("div")
    filtersContainer.className = "filters-container"

    const searchInput = document.createElement("input")
    searchInput.type = "text"
    searchInput.className = "search-input"
    searchInput.placeholder = "Buscar películas..."

    const select = document.createElement("select")
    select.className = "select"

    const option1 = document.createElement("option")
    option1.value = "defoult"
    option1.textContent = "defoult"

    const option2 = document.createElement("option")
    option2.value = "A-Z"
    option2.textContent = "A-Z"

    const option3 = document.createElement("option")
    option3.value = "Z-A"
    option3.textContent = "Z-A"


    select.appendChild(option1)
    select.appendChild(option2)
    select.appendChild(option3)

    filtersContainer.appendChild(searchInput)
    filtersContainer.appendChild(select)
    main.appendChild(filtersContainer)



    


    


}