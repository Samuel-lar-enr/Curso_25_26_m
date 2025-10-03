export const productos = [ 
    {
        id: 1,
        nombre: "laptop",
        precio: 1000,
        fabricante: {
            nombre: "HP",
            pais: "USA",
            contacto: {
                email: "info@hp.com",
                telefono: "+1-555-0123",
            },
        },
        especificaciones: {
            ram: "16GB",
            cpu: "Intel i7"
        } 
    },
    {
        id: 2,
        nombre: "smartphone",
        precio: 800,
        fabricante: {
            nombre: "Samsung",
            pais: "Corea del Sur",
            contacto: {
                email: "support@samsung.com",
                telefono: "+82-2-1234-5678",
            },
        },
        especificaciones: {
            ram: "8GB",
            cpu: "Snapdragon 888"
        } 
    },
    {
        id: 3,
        nombre: "tablet",
        precio: 600,
        fabricante: {
            nombre: "Apple",
            pais: "USA",
            contacto: {
                email: "contact@apple.com",
                telefono: "+1-800-275-2273",
            },
        },
        especificaciones: {
            ram: "6GB",
            cpu: "Apple M1"
        } 
    },
]