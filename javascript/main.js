
const notas = [1,2,3,4,5,6,7,8,9,10];

const cursos = ["mañana", "tarde", "noche"];

const alumnos = ["lucas", "mario", "luis", "carla", "milagros", "susana"];

let turnos = {
  mañana: [],
  tarde: [],
  noche: []
};

function iniciarInscripcion() {
  // ✅ Reiniciar turnos para que no se acumulen si clickeás otra vez
  turnos.mañana = [];
  turnos.tarde = [];
  turnos.noche = [];

  for (let i = 0; i < alumnos.length; i++) {
    let turnoCurso = prompt("Turno para " + alumnos[i] + " (mañana/tarde/noche):");

    if (turnoCurso === null) {
      alert("Cancelaste la inscripción.");
      return;
    }

    turnoCurso = turnoCurso.toLowerCase();

    if (turnoCurso === "mañana") {
      turnos.mañana.push(alumnos[i]);
    } else if (turnoCurso === "tarde") {
      turnos.tarde.push(alumnos[i]);
    } else if (turnoCurso === "noche") {
      turnos.noche.push(alumnos[i]);
    } else {
      alert("Turno inválido. Volvé a intentar.");
      i--; // repetir mismo alumno
    }
  }

  alert("Inscripción terminada ✅");
}

function mostrarTurnos() {
  console.log("📌 Turnos finales:");
  console.log("Mañana:", turnos.mañana);
  console.log("Tarde:", turnos.tarde);
  console.log("Noche:", turnos.noche);

  alert(
    "Turno Mañana: " + (turnos.mañana.length ? turnos.mañana.join(", ") : "Nadie") + "\n" +
    "Turno Tarde: " + (turnos.tarde.length ? turnos.tarde.join(", ") : "Nadie") + "\n" +
    "Turno Noche: " + (turnos.noche.length ? turnos.noche.join(", ") : "Nadie")
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const btnIniciar = document.getElementById("Iniciar-Inscripcion");
  const btnMostrar = document.getElementById("Mostrar-Turnos");
  const btnColor   = document.getElementById("cambio-Color");
  const btnEliminarPRimero = document.getElementById("Eliminar-Primero");
  const btnAgregarPrimero  =  document.getElementById("Agregar-Primero");
  const btnAgregarUltimo = document.getElementById("Agregar-Ultimo");
  const btnEliminarUltimo = document.getElementById("Eliminar-Ultimo");


  if (btnIniciar) btnIniciar.addEventListener("click", iniciarInscripcion);
  if (btnMostrar) btnMostrar.addEventListener("click", mostrarTurnos);
  if (btnColor)   btnColor.addEventListener("click" , cambiarColor)
  if (btnEliminarPRimero) btnEliminarPRimero.addEventListener("click",eliminarPrimero);
  if (btnAgregarPrimero) btnAgregarPrimero.addEventListener("click",agregarPrimero);
  if(btnAgregarUltimo) btnAgregarUltimo.addEventListener("click",AgregarUltimo);
  if (btnEliminarUltimo) btnEliminarUltimo.addEventListener("click",EliminarUltimo);
});

function cambiarColor() {
    document.body.classList.toggle("cambio-Color")

    const btnColor = document.getElementById("cambio-Color");
    if (document.body.classList.contains("cambio-Color")) {
        btnColor.textContent = "Modo Claro";
    } else {
        btnColor.textContent = "Modo Oscuro";
    }
}

function eliminarPrimero(){

    if (alumnos.length === 0) {
        console.log("Lo siento no hay mas alumnos para eliminar...");
        return;
    }

    const eliminarPrimerAlumnno = alumnos.shift();

     // ✅ también lo elimina de los turnos filter te trae un array sin el alumno eliminado
    turnos.mañana = turnos.mañana.filter(a => a !== eliminarPrimerAlumnno);
    turnos.tarde  = turnos.tarde.filter(a => a !== eliminarPrimerAlumnno);
    turnos.noche  = turnos.noche.filter(a => a !== eliminarPrimerAlumnno);

    alert("Se elimino: " + eliminarPrimerAlumnno);
    alert("Alumnos ahora:" + alumnos.join(","));
   

}

function agregarPrimero(){
     

     let nombre =prompt("Ingrese el nombre del alumno a agregar:");
     
    
     alumnos.unshift(nombre);

     let turno = prompt("Por favor" + nombre + "Ingrese el turno al que quiere anotarse (mañana,tarde,noche)") ;

     if (turno === null) {
        alert("LO SIENTO CANCELASTE EL TTURNO ");
        return;
     }

    turno = turno.trim().toLowerCase();
     

     if (turno === "mañana") {
        turnos.mañana.unshift(nombre);

     } else if (turno === "tarde") {
        turnos.tarde.unshift(nombre);
         
     } else if (turno === "noche"){
        turnos.noche.unshift(nombre);
     } else {
        console.log("LO SIENTO INVALIDO AGREGA SOLO LAS OPCIONES CORRECTAS");
        alert("LO SIENTO AGREGA ALGO CORRECTO...");
     }

      alert("Se agrego: " + eliminarPrimerAlumnno);
    alert("Alumnos ahora:" + alumnos.join(","));
     
}

function AgregarUltimo() {

  let nombre = prompt("Ingrese el nombre del alumno a agregar:");

  alumnos.push(nombre);


  let turno = prompt("Por favor" + nombre + "Ingrese el turno a donde se quiera anotar (mañana,tarde,noche)");
  turno = turno.trim().toLowerCase();

  if (turno === "mañana") {
    turnos.mañana.push(nombre);
  } else if (turno === "tarde") {
    turnos.tarde.push(nombre);
  } else if (turno === "noche") {
    turnos.noche.push(nombre);
  }  else {
        console.log("LO SIENTO INVALIDO AGREGA SOLO LAS OPCIONES CORRECTAS");
        alert("LO SIENTO AGREGA ALGO CORRECTO...");
     }

  alert("Se agregó: " + nombre);
  alert("Alumnos ahora: " + alumnos.join(", "));
}

function EliminarUltimo() {
  if (alumnos.length === 0) {
    console.log("Lo siento no hay mas alumnos para eliminar...");
    return;
  }

  const nombre = alumnos.pop();

 
  turnos.mañana = turnos.mañana.filter(a => a !== nombre);
  turnos.tarde  = turnos.tarde.filter(a => a !== nombre);
  turnos.noche  = turnos.noche.filter(a => a !== nombre);

  alert("Se eliminó: " + nombre);
  alert("Alumnos ahora: " + alumnos.join(","));
}
