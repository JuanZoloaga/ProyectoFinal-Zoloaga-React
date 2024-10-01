const productosDietetica = [
    {
        id: 1,
        nombre: "Natural Pop - Premezcla Falafel",
        precio: 1800,
        categoria: "Premezcla",
        descripcion: "Premezcla para bocadito de garbanzos, arroz integral , fécula de mandioca y hortalizas",
        imagen: '../src/assets/componentes/img/imagenesProductos/Premezcla Falafel - Editado.jpg',
    },

    {
        id: 2,
        nombre: "Natural Pop - Premezcla Hamburguesa Vegetal",
        precio: 1850,
        categoria: "Premezcla",
        descripcion: "Premezcla para medallones de garbanzos, arroz integral, semillas y hortalizas. Libre de Gluten",
        imagen: '../src/assets/componentes/img/imagenesProductos/Premezcla Hamburguesa Vegetal - Editado.jpg',
    },

    {
        id: 3,
        nombre: "Natural Pop - Premezcla Fainá sin Gluten",
        precio: 1900,
        categoria: "Premezcla",
        descripcion: "Premezcla de harinas de garbanzo y arroz para preparar fainá libre de gluten. Sin TACC",
        imagen: '../src/assets/componentes/img/imagenesProductos/Premezcla FAINÁ SIN GLUTEN - Editado.jpg',
    },

    {
        id: 4,
        nombre: "Natural Pop - Premezcla Falafel Arvejas y Quinoa",
        precio: 1800,
        categoria: "Premezcla",
        descripcion: "Premezcla para bocaditos de arvejas, garbanzo, arroz, fécula de mandioca y quinoa. Libre de Gluten - SIN TACC",
        imagen: '../src/assets/componentes/img/imagenesProductos/Premezcla Falafel arvejas y quinoa - Editado.jpg',
    },

    {
        id: 5,
        nombre: "Natural Pop - Premezcla Crepes Veggie",
        precio: 1890,
        categoria: "Premezcla",
        descripcion: "Premezcla a base de harina de arroz, fécula de mandioca, almidón de maíz con análogo de huego vegetal. Libre de Gluten",
        imagen: '../src/assets/componentes/img/imagenesProductos/Premezcla Crepes Viggie - Editado.jpg',
    },

    {
        id: 6,
        nombre: "Angiola - Budin con chips de chocolate",
        precio: 2100,
        categoria: "Merienda",
        descripcion: "Budin Angiola con chips de chocolates - LIBRE DE GLUTEN",
        imagen: '../src/assets/componentes/img/imagenesProductos/Budin chocolate Angiola - Editado.jpg',
    },

    {
        id: 7,
        nombre: "Angiola - Budin sabor Vainilla",
        precio: 2100,
        categoria: "Merienda",
        descripcion: "Budin Angiola sabor Vainilla - LIBRE DE GLUTEN",
        imagen: '../src/assets/componentes/img/imagenesProductos/Budin Vainilla Angiola - Editado.jpg',
    },

    {
        id: 8,
        nombre: "Boccone - Galletitas integrales sabor avena, semillas de girasol y naranja",
        precio: 1300,
        categoria: "Merienda",
        descripcion: "Galletitas integrales sabor avena, semillas de girasol y naranja. SIN LACTOSA. VEGANA",
        imagen: '../src/assets/componentes/img/imagenesProductos/Galletitas Bocone avena girasol y naranja - Editado.jpg',
    },

    {
        id: 9,
        nombre: "Boccone - Galletitas integrales sabor avena, semillas de chía y limón",
        precio: 1300,
        categoria: "Merienda",
        descripcion: "Galletitas integrales sabor avena, semillas de chía y limón. SIN LACTOSA. VEGANA",
        imagen: '../src/assets/componentes/img/imagenesProductos/Galletitas Bocone avena chia y limon - Editado.jpg',
    },

    {
        id: 10,
        nombre: "Solo - Mani sabor cordero ahumado",
        precio: 1250,
        categoria: "Snack",
        descripcion: "Mani con cobertura sabor cordero ahumado",
        imagen: '../src/assets/componentes/img/imagenesProductos/Solo Mani con cobertura de jamon - Editado.jpg',
    },

    {
        id: 11,
        nombre: "Solo - Mani sabor cebolla a la crema",
        precio: 1250,
        categoria: "Snack",
        descripcion: "Mani con cobertura sabor cebolla a la crema",
        imagen: '../src/assets/componentes/img/imagenesProductos/Solo Mani cebolla a la crema - Editado.jpg',
    },

    {
        id: 12,
        nombre: "Solo - Mani frito salado sin piel",
        precio: 1250,
        categoria: "Snack",
        descripcion: "Mani frito salado sin piel",
        imagen: '../src/assets/componentes/img/imagenesProductos/Solo Mani frito - Editado.jpg',
    },

    {
        id: 13,
        nombre: "Antojitos - Nachos sabor cheddar",
        precio: 1500,
        categoria: "Snack",
        descripcion: "Nacho sabor queso cheddar",
        imagen: '../src/assets/componentes/img/imagenesProductos/Antojitos Nacho sabor cheddar - Editado.jpg',
    },

    {
        id: 14,
        nombre: "Antojitos - Nachos mexicano",
        precio: 1500,
        categoria: "Snack",
        descripcion: "Nacho mexicano para salsas",
        imagen: '../src/assets/componentes/img/imagenesProductos/Antojitos Nacho mexicano - Editado.jpg',
    },
    
    {
        id: 15,
        nombre: "Antojitos - Nachos sabor panceta",
        precio: 1500,
        categoria: "Snack",
        descripcion: "Nacho sabor panceta",
        imagen: '../src/assets/componentes/img/imagenesProductos/Antojito Nacho sabor panceta - Editado.jpg',
    },

];

export const getProductosDietetica = new Promise ((resolve) =>{
    resolve(productosDietetica);
})

export const getProducto = (id) => {
    return productosDietetica.find((prod)=>prod.id == id)
}

export const getCategoria = (categoria) => {
    return productosDietetica.filter((produc) => produc.categoria === categoria);
}