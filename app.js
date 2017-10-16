function phrase(){ //Función con la cúal obtendremos la información del cliente.
	do{ //mediante el bucle do obtendremos sí o sí la información que necesitamos ejecutar.
		var answer = prompt("¿Qué desea hacer: 1)Cifrar o 2)Descifrar?"); //Obteniendo la opción a realizar,
		if(answer != "") { //si la la opción ingresada es diferente a un string vacío y	
			if(answer =="1"){ //esta es igual a 1
				cipher(); //debemos cifrar,				
			} else if(answer == "2"){ //en caso de que la opción sea 2
				decipher(); //debemos descifrar
			} else{ //si la opción no es ni 1, ni 2,
				alert("Por favor ingrese una opción válida"); //debemos dar el siguiente mensaje a nuestro cliente "Ingrese una opción válida" por medio de una ventana en la web.
			}
		}
	} while(answer == ""|| (answer != "1" && answer !=="2")); //si la opción es un string vacío, o es diferente a 1 y a 2 debe repetir el mensaje hasta obtener una opción valida.
}
phrase();

function cipher(){ //Función con la cual en caso de que el cliente haya escogido la opción 1 cifraremos.
	do { //mediante el bucle do obtendremos sí o sí la información que necesitamos ejecutar, osea una frase válida.
	    var phrase1 = prompt("Ingrese la frase a cifrar"); //Obteniendo la frase a cifrar,
	    var phraseCipher = phrase1.split(" ").join(""); //quitando los espacios en la frase ingresada, split separa la cada palabrade la frase y los convierte en un arrego y con join "" (vacío) unimos el arreglo en una nueva frase sin espacios.
	    if (phrase1 == "") { // Si la frase es un string vacío
	    	alert("Debe ingresar una frase válida"); // debemos enviar un mensaje solicitando una opción válida
	    } 	   
    } while (phrase1 == ""); // Solicitamos la frase hasta que se nos entregue una válida

    var phraseAcsii = [];// Pasando las letras de la frase a código Ascii
    for (var i = 0; i < phraseCipher.length; i++) { // recorriendo la frase letra por letra
    	((phraseCipher.charCodeAt(i) - 65 + 33) % 26) + 65; // aplicando fórmula para obtener código Ascii
    }    

    var phraseCipherOk = []; // Pasando el código Ascii a letras del alfabeto.
    for (var i = 0; i < phraseAcsii.length; i++) { // recorriendo el código Ascii
    	String.fromCharCode(phraseAcsii()) // Asignando la letra correspondiente a cada posisión Ascii
    }	return phraseCipherOk.push();
}

function decipher(){ //Función com la cual en caso de que el cliente haya escogido la opción 1 cifraremos.
	do { //mediante el bucle do obtendremos sí o sí la información que necesitamos ejecutar, osea una frase válida.
	    var phrase1 = prompt("Ingrese la frase a cifrar"); //Obteniendo la frase a cifrar,
	    var phraseDescipher = phrase1.split(" ").join(""); //quitando los espacios en la frase ingresada, split separa la cada palabrade la frase y los convierte en un arrego y con join "" (vacío) unimos el arreglo en una nueva frase sin espacios.
	    if (phrase1 == ""|| isNaN(phraseDescipher)== false) { //si la frase ingresada es igual a un string vacío o es un número 
	    	alert("Debe ingresar una frase válida"); //le dará el mensaje 
	    } 	   
    } while (phrase1 == ""|| isNaN(phraseDescipher)== false); // hasta que ingrese una opción válida.

}


