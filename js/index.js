// Aquí mi simulador. Este es una calculadora del promedio de un alumno que está cursando X materia y posee 3 notas.
// Debo destacar que me adelanté un poco y empleé un array para el acumulado. Este código tiene 2 ciclos repetitivos y un condicional simple.

let c = 0;
let acumulado = [];

cargar();
promedio();

function cargar() 
{
    for(let i=0; i<3; i++)
    {
        let c = prompt("Ingrese una nota");
        acumulado[i] = parseInt(c);
    }
}

function promedio() 
{
    let cont = 0;
    let prom = 0;
    let acum = 0;

    for(let i=0; i<3; i++)
    {   
        let c = acumulado[i];

        cont ++;
        acum = acum + c;
    }
    prom = acum/ cont;
    console.log("El promedio final es de: " + prom);

if (prom < 6)
{
    console.log("Usted deberá recursar la materia. Lo sentimos");
}
}