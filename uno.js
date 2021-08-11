/* Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad */

function mostrar() {
  
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let respuesta; 
  let promEdadReptiles = 0 ;
  let acumEdadReptiles = 0;
  let contReptiles = 0;
  let contMamifero = 0;
  let contAve = 0; 
  let porcAve = 0;
  let contTotalAve = 0;
  let cantMasMasc;
  let mascMasJoven;
  let sexoMasc; 
  let tipoMasc;
  let flagMasc = 1; 
  
  
  do{

    nombre = prompt("Ingrese nombre de la mascota");
    while (nombre.length < 3 && nombre.length > 8){
      nombre = prompt("El nombre esta fuera del rango. Reingrese nuevamente el nombre ");
    }

    tipo = prompt("Ingrese el tipo de mascota (mamifero / ave / reptil)");
    while (tipo != "mamifero" && tipo != "ave" && tipo != "reptil"){
      tipo = prompt("Error. Reingrese el tipo de mascota");
    }

    if (sangre == "fria"){
      tipo = "reptil";
    }else{
    sangre = prompt("Ingrese el tipo de sangre (fria / calida) ");
    while (sangre != "fria" && sangre != "caliente"){
      sangre = prompt("Error. Reingrese el tipo de sangre ( fria / calida");
    }
  }
   edad = parseInt(prompt("Ingrese la edad"));
   while (edad < 0){
     edad = parseInt(prompt("Error. Reingrese la edad"));
   }

   sexo = prompt("Ingrese sexo ( “m” de macho o “h” de hembra )");
   while (sexo != "m" && sexo != "h"){
     sexo = prompt("Error. Reingrese el sexo ( “m” de macho o “h” de hembra )");
   }

   switch (tipo){
   case "mamifero":
     contMamifero ++;
   break;
   case "ave":
     contAve ++;
   break;
   case "reptil":
     contReptiles ++;
   break;
   }

   if (flagMasc || edad < mascMasJoven){
   mascMasJoven = edad;
   tipoMasc = tipo; 
   sexoMasc = sexo;
   flagMasc = 0; 
   }
  
  respuesta = prompt("¿Desea ingresar otra mascota? (si/no)");
} while(respuesta == "si");

  if(contReptiles != 0){
  promEdadReptiles = acumEdadReptiles / contReptiles;
  }

  
  if(contMamifero < contReptiles && contMamifero < contAve){
    cantMasMasc = "mamifero";
  }else if ( contReptiles <= contMamifero && contReptiles < contTotalAve){
    cantMasMasc = "reptil";
  }else{
    cantMasMasc = "ave"; 
  }
  
  porcAve = contAve * 100 / contTotalAve;



  document.write(`a- Promedio de edad de los reptiles es ${promEdadReptiles} </br>`);

  document.write(`b-El tipo de mascota mas joven es ${tipoMasc} su sexo es ${sexoMasc} y su edad es ${mascMasJoven} </br> `);

  document.write (`c- El procentaje de las aves ingresadas son ${porcAve} </br>`);

  document.write( `d- La cantidad de tipo de mascota que hay mas son de ${cantMasMasc} `);
}