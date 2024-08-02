alert('Hola Mundo');
//VARIABLES
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1; //ya que lo intento en su primera vez
//let palabraVeces = 'vez'
let MaximosIntentos = 3
/*Aqui evaluamos la condicion mientras que sea diferente a las 2 var
seguir el bucle*/
while (numeroUsuario = !numeroSecreto) {

    //While-mientras que la persona no acierte hasta que verificamos, toca indentar
    let numeroUsuario = prompt("Indica un numero de 1 a a 10: ");

    //Mostrar los dato ingreesados
    console.log(numeroUsuario);
    /*
    Este codigo realiza la comparacion, DNODE RESPETAMOS LAS INDENTACIONES CADA UNO EN SU
    LUGAR ya que se cumple por medio de una estructura*/
    if (numeroUsuario == numeroSecreto) {
        /*La  condicion fue verdadera con cadena de texto y variable incluida, que es un
         formato llamado temple Strings*/
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        //Aqui colocamos condiciones anidadas, una detras de otra
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero es menor');
        } else {
            alert('El numero es mayor');
        }
        /*Operador terneario Nos permite escribir las condiciones 
        abreviadas, no siempre es conveniente para todas las situaciones*/
        //incre,emtamo el contador cuando no acierta
        //Formas aabreviadas
        //intentos = ++1
        //intentos= intentos+1;
        intentos++
        palabraVeces = 'veces';
        if (intentos > MaximosIntentos) {
            alert(`Llegaste al numero maximo de ${MaximosIntentos} intentos`);
            break
        }

        //La condicion no se cumplio
        //alert('Lo siento no acertaste el numero')
    }

}
