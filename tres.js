/* Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas)*/

function mostrar() {


  let juguete; 
  let origen;
  let precio;
  let respuesta;
  let flagMasBarato = 1;
  let recaudacionTotal =0;
  let acumPrecioImp = 0;
  let cantImportados =0;
  let cantMuñeca =0;
  let cantRomp =0;
  let cantPelota =0;
  let precioMasBarato; 
  let promjuguete = 0;


  do{
    juguete = prompt("Ingrese el tipo de juguete (muñeca / rompecabezas / pelota)");
    while (juguete != "muñeca" && juguete != "rompecabezas" && juguete != "pelota");
    juguete = prompt("Error. Reingrese el tipo de juguete (muñeca / rompecabezas / pelota)");

    origen = prompt("Ingrese el origen del juguete (nacional / importado)");
    while (origen != "nacional" && origen != "importado"){
      origen = prompt("Error: reingrese el origen del juguete (nacional / importado)");  
    }

    precio = parseInt(prompt("Ingrese el precio (1000/5000)"));
    while (isNaN(precio) || precio < 1000 || precio > 5000){
      precio = parseInt(prompt("Error. Reingrese el precio (1000/5000)"));
    }

    if(origen =="importado")
   {
	   acumPrecioImp += precio;
	   cantImportados ++;
   }
   recaudacionTotal +=precio;

   switch (juguete){
    case "muñeca":
      cantMuñeca ++;
    break;
    case "rompecabezas":
      cantRomp ++;
    break;
    case "pelota":
      cantPelota ++;
    break;
    }

    if (juguete =="rompecabezas" && origen == "nacional" && (flagMasBarato || precio < precioMasBarato)){
      precioMasBarato = precio;
      flagMasBarato = 0; 
      }
    

  respuesta = prompt("¿Desea ingresar otra juguete? (si/no)");
} while(respuesta == "si");


if(cantMuñeca < cantRomp && cantMuñeca < cantPelota){
  jugMasVendido = "muñeca";
}else if ( cantRomp <= cantMuñeca && cantRomp < cantPelota){
  jugMasVendido = "rompecabeza";
}else{
  jugMasVendido = "pelota"; 
}


if (cantImportados != 0){
promjuguete = acumPrecioImp / cantImportados;
} 



 document.write(`a- El tipo de juguete mas vendido es ${jugMasVendido} </br>`); 

  document.write(`b- El promedio de juguetes importados es ${promjuguete} </br>`);

if(precioMasBarato > 0)
 {
    document.write(`d- El rompecabezas nacional mas barato es ${precioMasBarato} </br>`); 
 } 

 if(recaudacionTotal > 0)
 {
   document.writet(`c- La recaudacion total es ${recaudacionTotal} </br>`);	  
   document.write(`e- La percepcion de iva es :${recaudacionTotal * 0.21} </br>`);			
 }
 
}
