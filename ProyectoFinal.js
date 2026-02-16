//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

// Valores de los recargos
var edad_18 = 0.1   // 10%
var edad_25 = 0.2   // 20%
var edad_50 = 0.3   // 30%

var hijos_recargo = 0.2 // 20%

// Recargos
var recargo = 0
var recargo_total = 0
var recargoHijos = 0

// Precio final
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuántos años tiene? Ingrese solamente números")

var casado = prompt("¿Está casado actualmente? (SI / NO)")
var edad_conyuge
var edad_conyuge_numero = 0

if (casado.toUpperCase() === "SI") {
  edad_conyuge = prompt("¿Qué edad tiene su esposo/a?")
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var edad_numero = parseInt(edad)

//Comprobamos la cantidad de hijos solamente si los tienen
var hijos = prompt("¿Tiene hijos o hijas? (SI / NO)")
var cantidad_hijos_numero = 0

if (hijos.toUpperCase() === "SI") {
  var cantidad_hijos = prompt("¿Cuántos hijos o hijas tiene? Ingrese solamente números")
  cantidad_hijos_numero = parseInt(cantidad_hijos)
}

//Aquí debe calcular el recargo total basado en las respuestas ingresadas
//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if (edad_numero >= 18 && edad_numero < 25) {
  recargo = precio_base * edad_18
  recargo_total += recargo
} else if (edad_numero >= 25 && edad_numero < 50) {
  recargo = precio_base * edad_25
  recargo_total += recargo
} else if (edad_numero >= 50) {
  recargo = precio_base * edad_50
  recargo_total += recargo
}
/** 
 * 2. Recargo por la edad del conyuge
 */
if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
  recargo = precio_base * edad_18
  recargo_total += recargo
} else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
  recargo = precio_base * edad_25
  recargo_total += recargo
} else if (edad_conyuge_numero >= 50) {
  recargo = precio_base * edad_50
  recargo_total += recargo
}

/**
 * 3. Recargo por la cantidad de hijos 

**/

if (cantidad_hijos_numero > 0) {
  recargoHijos = (precio_base * hijos_recargo) * cantidad_hijos_numero
  recargo_total += recargoHijos
}

precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)