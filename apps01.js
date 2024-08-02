alert('Hola Mundo');
//VARIABLES
let numeroPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroPosible + 1)
let numeroUsuario = 0;
let intentos = 1; //ya que lo intento en su primera vez
let palabraVeces = 'vez'
/*Aqui evaluamos la condicion mientras que sea diferente a las 2 var
seguir el bucle*/
while (numeroUsuario = !numeroSecreto) {

    //While-mientras que la persona no acierte hasta que verificamos, toca indentar
    let numeroUsuario = parseInt(prompt(`Indica un numero de 1 a ${numeroPosible} porfavor : `));

    //Mostrar los dato ingreesados
    console.log(numeroUsuario);
    /*
    Este codigo realiza la comparacion, DNODE RESPETAMOS LAS INDENTACIONES CADA UNO EN SU
    LUGAR ya que se cumple por medio de una estructura*/
    if (numeroUsuario == numeroSecreto) {
        /*La  condicion fue verdadera con cadena de texto y variable incluida, que es un
         formato llamado temple Strings*/
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} veces`);
        //Aqui colocamos condiciones anidadas, una detras de otra
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero es menor');
        } else {
            alert('El numero es mayor');
        }
        //incre,emtamo el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
        if (intentos > 3) {
            alert('Llegaste al numero maximo de intentos');
            break
        }

        //La condicion no se cumplio
        //alert('Lo siento no acertaste el numero')
    }

}
