# **PseudoCódigo cifrado Cesar**

+ Obtener opción cifrar o descifrarla:
   - Mediante un el bucle Do obtendremos sí o sí la información del usuario.
   - Solicitar la opción al usuario mediante prompt y esta sólo puede ser 1.- Cifrar o 2.- Descifrar. 
   - En caso de no ingresar una opción válida debemos insistir hasta que lo haga. Esto se hace mediante la sentencia if y el bucle while, el primero cumplirá con ejecutarse mientras el usuario ingrese 1 o 2 y en el caso contrario, while le pedirá al usuario, repetitivamente, que ingrese una opción válida hasta obtener lo solicitado en if.

+ Si la opción ingresada es 1 debemos solicitar frase y cifrarla:
   - Solicitar frase mediante prompt, quitar carácteres especiales y espacios para dejar sólo letras. Los espacios los quitamos dividiendo la frase con split y creando un array con ella, luego unimos el array en una nueva frase sin espacios con join.
   - el usuario debe ingresar una frase, si ingresa un número o espacio (if) debemos insistir hasta obtener una frase correcta(while)
   - Teniendo la frase debemos recorrerla usado for, luego usamos la fórmula (x-65+33)%26+5 para obtener nuestra posición de cada letra en el código Ascii correspondiente.
   - Finalmemte el código Ascii lo pasamos a la letra correspondiente con String.fromChardCode() y obtenemos la frase cifrada.   


+ Si la opción ingresada es 2 debemos solicitar frase y descifrarla:
   - Solicitar frase mediante prompt, quitar carácteres especiales y espacios para dejar sólo letras. Los espacios los quitamos dividiendo la frase con split y creando un array con ella, luego unimos el array en una nueva frase sin espacios con join.   + Si la opción ingresada es 1 debemos solicitar frase y cifrarla:
   - Solicitar frase mediante prompt, quitar carácteres especiales y espacios para dejar sólo letras. Los espacios los quitamos dividiendo la frase con split y creando un array con ella, luego unimos el array en una nueva frase sin espacios con join.
   - el usuario debe ingresar una frase, si ingresa un número o espacio (if) debemos insistir hasta obtener una frase correcta(while)
   - Teniendo la frase debemos descifrarla.

   [Diagrama de flujo Cifrado Cesar](DiagramaDeFlujo.jpg)