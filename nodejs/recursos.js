module.exports ={
    mascotas: [
        {tipo: "Perro", nombre: "Obha", dueno: "Arnulfo"},
        {tipo: "Perro", nombre: "Luna", dueno: "Noraly"},
        {tipo: "Pez", nombre: "Tiburoncin", dueno: "Angel"},
        {tipo: "Pez", nombre: "Molly", dueno: "Angel"},
        {tipo: "Gallo", nombre: "Chiquilin", dueno: "Ian"},
    ],

    veterinarias: [
        {nombre: "Angel", apellido: "Sanchez", documento: "1234"},
        {nombre: "Arnulfo", apellido: "Sanchez", documento: "4321"},
        {nombre: "Ian", apellido: "Sanchez", documento: "2213"},
        {nombre: "Noraly", apellido: "Nina", documento: "2604"}
    ],

    duenos: [
        {nombre: "Noraima", apellido: "Gomez", documento: "1302"},
        {nombre: "Alberto", apellido: "Ochoa", documento: "1236"},
        {nombre: "Jose", apellido: "Ortega", documento: "9874"},
        {nombre: "Juan", apellido: "Perez", documento: "3456"}
    ],
    consultas: [
        {
            mascota: 0, 
            veterinaria: 0, 
            enzabezado: '', 
            fechaCreacion: new Date(),
            fechaEdicion: new Date(),
            historia: '',
            diagnostico: "",
        },
    ],
};