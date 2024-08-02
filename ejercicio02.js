/*
Eres una persona recién llegada al equipo de desarrollo de Jornada Millas, 
un sitio web de compra de paquetes de viaje para los principales destinos del mundo.
Como primera tarea, tu lider te ha pedido que al introducir un número por teclado, 
muestre un mensaje en la consola que indique si el número es positivo, negativo o cero.
Selecciona la opción correcta:
*/
const numero = prompt("Introduce un número:");

if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}