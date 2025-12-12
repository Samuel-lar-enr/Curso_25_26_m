export default function CreateEjercicio11() {
    const state = {
        cache: new Map(),
        isLoading: false,
    };

    // --- debounce que muestra loader ANTES de esperar ---
    const debounce = (fn, delay, onStart) => {
        let timeout;
        return (...args) => {
            // Acciones inmediatas (loader)
            if (onStart) onStart();

            clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), delay);
        };
    };

    // --- SEARCH FUNCTION ---
    const search = async (query) => {
        const term = query.trim().toLowerCase();

        if (!term) {
            root.innerHTML = "";
            return;
        }

        // 1. Buscar en localStorage
        const localKey = `rm-${term}`;
        const localData = localStorage.getItem(localKey);

        if (localData) {
            const results = JSON.parse(localData);
            state.cache.set(term, results); // sincronizamos memoria
            renderCharacters(results);
            return;
        }

        // 2. Buscar en cache de RAM
        if (state.cache.has(term)) {
            renderCharacters(state.cache.get(term));
            return;
        }

        // 3. Si no existe → llamada a API
        try {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${term}`
            );

            if (!response.ok) {
                root.innerHTML = "";
                root.appendChild(displayErrors());
                return;
            }

            const data = await response.json();

            // Guardamos SOLO data.results en memoria
            state.cache.set(term, data.results);

            // Guardamos en localStorage con la key de las palabras del buscador
            localStorage.setItem(localKey, JSON.stringify(data.results));

            renderCharacters(data.results);

        } catch (err) {
            root.innerHTML = "";
            root.appendChild(displayErrors());
        }
    };

    // --- UI ELEMENTS ---
    const displayErrors = () => {
        const msg = document.createElement("div");
        msg.innerHTML = `<h3 class="error">Personaje no encontrado</h3>`;
        return msg;
    };

    const displayLoading = () => {
        const loader = document.createElement("div");
        loader.classList.add("loader");
        loader.textContent = "Cargando...";
        return loader;
    };

    const renderCharacters = (characters) => {
        root.innerHTML = "";

        const grid = document.createElement("div");
        grid.classList.add("projects-grid");

        grid.innerHTML = characters
            .map(
                (character) => `
                    <div class="user-card">
                        <h3>${character.name}</h3>
                        <p class="user-info">Status: ${character.status}</p>
                        <p class="user-info">Species: ${character.species}</p>
                        <p class="user-info">Gender: ${character.gender}</p>
                        <p class="user-info">Origin: ${character.origin.name}</p>
                        <img src="${character.image}" alt="${character.name}">
                    </div>`
            )
            .join("");

        root.appendChild(grid);
    };

    // --- RENDER MAIN COMPONENT ---
    let root;

    const render = () => {
        const container = document.createElement("div");

        const input = document.createElement("input");
        input.type = "search";
        input.placeholder = "Busca un personaje...";
        input.classList.add("input");

        const debouncedSearch = debounce(
            (e) => search(e.target.value),
            1500,                   // delay real de llamada
            () => {                 // acción inmediata al teclear → loader
                root.innerHTML = "";
                root.appendChild(displayLoading());
            }
        );

        input.addEventListener("input", debouncedSearch);

        root = document.createElement("div");
        root.classList.add("results-container");

        container.appendChild(input);
        container.appendChild(root);

        return container;
    };

    return { render };
}
