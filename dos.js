/* Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/

function mostrar() {

  let nombre;
  let carrera;
  let sexo;
  let materia;
  let nota;
  let edad;
  let promFisica;
  let acumFisica = 0;
  let contFisica = 0;
  let contQuimica = 0;
  let contSistemas = 0; 
  let nombreJoven = 0;
  let flagJoven = 1; 
  let contCarrera = 0;
  let porcentaje = 0; 
  let flagEstudiante = 1; 
  
  

  for(let i ; i < 1; i++){

    
    nombre = prompt("Ingrese su nombre");
        
    carrera = prompt("Ingrese una carrera (fisica / quimica / sistemas)");
    while (carrera != "fisica" && carrera != "quimica" && carrera != "sistemas"){
      carrera = prompt("Error. Reingrese una carrera (fisica / quimica / sistemas)");
    }

    sexo = prompt("Ingrese el sexo  (f / m / b):").toLowerCase();
    while (sexo != "f" && sexo != "m" && sexo != "b")
    {
      sexo = prompt("Debe ingresar m para masculinos, f para femeninos o b para no binarios. Ingrese un sexo válido:").toLowerCase();
    }

    materia = parseInt(prompt("Ingrese la cantidad de materia entre 1 y 5"));
    while (materia < 1 && materia >5){
      materia = parseInt(prompt("Error. Reingrese la cantidad de materia entre 1 y 5"));      
    }
    
    nota = parseInt(prompt("Ingrese el promedio de la nota"));
    while (nota <0 && nota >10 ){
      nota = parseInt(prompt("Ingrese el promedio de la nota"));
    }

   
    edad = parseInt(prompt("Ingrese edad:"));
    while (isNaN(edad) || edad < 0)
    {
      edad = parseInt(prompt("Error. Ingrese una edad válida:"));
    }

    switch (carrera){
      case "fisica":
        contFisica ++;
      break;
      case "quimica":
        contQuimica ++;
      break;
      case "sistemas":
        contSistemas ++;
      break;
      }

      if (flagJoven || edad < MasJoven){
        MasJoven = edad;
        nombreJoven = nombre; 
        flagJoven = 0; 
        }

        
    
  contCarrera++;
  }//fin del for


if(promFisica != 0){
  promFisica = acumFisica / contFisica
}

porcentaje = contFisica *100 / contCarrera;
porcentaje = contQuimica * 100 / contCarrera;
porcentaje = contSistemas * 100 / contSistemas; 

document.write(`a) El nombre del mejor promedio de los alumnos que estudian Fisica ${promFisica}  </br> `);
document.write(`b) El nombre de la alumna mas joven ${nombreJoven} </br>`);
document.write(`c) Porcentaje de estudiantes que estudia cada carrera ${porcentaje} </br>`);
document.write(`d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica </br>`);
}
