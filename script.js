let Nombre = prompt("Ingrese su Nombre")
    alert ("Bienvenido Tutor/a  "  +  Nombre)

    

// La entrada para ver a la seleccion cuesta $11.000 para menores de 5, $15.000 entre 5 y 10 y $22.000 mayores de 10.

let edad = Number(prompt("ingrese edad"))
if (edad > 0 && edad < 5 ){
    alert("Usted debe pagar $11.000 cada entrada")
} else if (edad >= 5 && edad < 10) {
    alert("Usted debe pagar $15.000 cada entrada")
} else if (edad >= 10 && edad <70) {
    alert("Usted debe pagar $22.000 cada entrada")
} else{
    alert("Para comprar una entrada debe ingresar su edad")
}

let compra = Number(prompt("ingrese cantidad de entradas"))
if (compra >= 1  && compra <= 4){
    alert("usted retirará  " + compra + "  entradas en la puerta del estadio el dia sabado")
} else {
    alert("No se permite retirar mas de cuatro entradas por persona") 
}





//agrego aparte un case //

/*
let opcionIngresada = prompt("Ingrese 1 para comprar manzanas, 2 para comprar naranjas y 3 para comprar peras")
switch (opcionIngresada) {
case "1": 
   alert("elegiste Manzanas")
  break
case "2":
    alert("elegiste peras")
    break
case "3":
    alert("elegiste naranjas")
    break
  default:
    alert("OTRA OPCION")
     break
}

*/
