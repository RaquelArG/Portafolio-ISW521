//const numeros = [20, 15, 14, 36, 100];
//numeros.sort((a, b) => b - a);  //Sort con función anonima(arrow funtion)
//
//console.log(numeros);


//Imperativo
//for(let i = 0; i < numeros.length; i++){
//    console.log(numeros[i]);
//}
//
//Declarativo
//const declarativo = numeros.map((n) => n)
//console.log(declarativo);
//
//const precios = [100, 250, 80, 400];
//const caros = precios.filter(p => p > 150);
//console.log(caros);


//Actividad 4
//const estudiantes = [
//    {nombre : "Ana", carnet : "208245966"},
//    {nombre : "Luis", carnet : "863245966"}
//];
//
//estudiantes.map(e = `${e.nombre} (${e.carnet})`.toUpperCase());

//Actividad 5
const estudiantes = [
    {nombre : "Ana", promedio : 85},
    {nombre : "Luis", promedio : 67},
    {nombre : "Sara", promedio : 91},
    {nombre : "Tulio", promedio : 70},
    {nombre : "Ant", promedio : 100}
];

estudiantes.filter(p => p.promedio > 90);

//Actividad 6
const estudiantes = [
    {nombre : "Ana", promedio : 85},
    {nombre : "Luis", promedio : 67},
    {nombre : "Sara", promedio : 91},
    {nombre : "Tulio", promedio : 70},
    {nombre : "Ant", promedio : 100}
];
console.log(estudiantes.find(p => p.promedio > 90));

//Actividad 7
const gastos = [
    {cat: "Comida", monto: 5000},
    {cat: "Transporte", monto: 2000},
    {cat: "Comida", monto: 3000}
];

const porCategoria = gastos.reduce ((acc, g) => {
    acc[g.cat] = (acc[g.cat] || 0) + g.monto;
    return acc;
}, {}); 

const sumar = gastos.reduce((acc, g) => acc + g.monto, 0);

//Actividad 8
