
const notas = [1,2,3,4,5,6,7,8,9,10];

const cursos = ["mañana", "tarde", "noche"];

const alumnos = ["lucas", "mario", "luis", "carla", "milagros", "susana"];

let turnos = {
  mañana: [],
  tarde: [],
  noche: []
};


document.addEventListener("DOMContentLoaded", () => {
  const btnIniciar = document.getElementById("Iniciar-Inscripcion");
  const btnMostrarAlumnos = document.getElementById("Mostrar-Alumnos");
  const btnMostrar = document.getElementById("Mostrar-Turnos");
  const btnColor   = document.getElementById("cambio-Color");
  const btnEliminarPRimero = document.getElementById("Eliminar-Primero");
  const btnAgregarPrimero  =  document.getElementById("Agregar-Primero");
  const btnAgregarUltimo = document.getElementById("Agregar-Ultimo");
  const btnEliminarUltimo = document.getElementById("Eliminar-Ultimo");
  const btnAgregarSeparador = document.getElementById("Separador");
  const btnOrdenarxNombre = document.getElementById("Ordenar-Alumnos");
  const btnInclude = document.getElementById("Include");
  const btnIndexOf = document.getElementById("Index-Of");
  const btnSlice = document.getElementById("Slice-Turnos");
  const btnNumerados = document.getElementById("Alumnos-Numerados");
  const btnMayus     = document.getElementById("Alumnos-Mayus");
  const btnLargos    = document.getElementById("Nombres-Largos");
  const btnStats     = document.getElementById("Stats-Turnos");
  const btnVerificar = document.getElementById("btnVerificar");
  const btnResumen = document.getElementById("btnResumen");
  const resultado = document.getElementById("resultado");



  if (btnIniciar) btnIniciar.addEventListener("click", iniciarInscripcion);
  if (btnMostrarAlumnos) btnMostrarAlumnos.addEventListener ("click" , MostrarAlumnos );
  if (btnMostrar) btnMostrar.addEventListener("click", mostrarTurnos);
  if (btnColor)   btnColor.addEventListener("click" , cambiarColor);
  if (btnEliminarPRimero) btnEliminarPRimero.addEventListener("click",eliminarPrimero);
  if (btnAgregarPrimero) btnAgregarPrimero.addEventListener("click",agregarPrimero);
  if(btnAgregarUltimo) btnAgregarUltimo.addEventListener("click",AgregarUltimo);
  if (btnEliminarUltimo) btnEliminarUltimo.addEventListener("click",EliminarUltimo);
  if (btnAgregarSeparador) btnAgregarSeparador.addEventListener("click",AgregarconJoin);
  if (btnOrdenarxNombre) btnOrdenarxNombre.addEventListener("click", OrdenarAlfabeticamente);
  if (btnInclude) btnInclude.addEventListener("click" ,Inclusion);
  if (btnIndexOf) btnIndexOf.addEventListener("click",BuscarConIndexOf);
  if (btnSlice) btnSlice.addEventListener("click" , MostrarTurnosConSlice);
  if (btnNumerados) btnNumerados.addEventListener("click", MostrarAlumnosNumerados);
  if (btnMayus)     btnMayus.addEventListener("click", MostrarAlumnosMayusculas);
  if (btnLargos)    btnLargos.addEventListener("click", FiltrarNombresLargos);
  if (btnStats)     btnStats.addEventListener("click", EstadisticasTurnos);

   // ===== some: verificar inscripción con PROMPT =====
  if (btnVerificar && resultado) {
    btnVerificar.addEventListener("click", () => {

      let nombre = prompt("Ingrese el nombre a verificar:");

      if (nombre === null) {
        resultado.textContent = "❌ Búsqueda cancelada";
        return;
      }

      nombre = nombre.trim().toLowerCase();

      if (nombre === "") {
        resultado.textContent = "⚠️ No ingresaste ningún nombre";
        return;
      }

      resultado.textContent = alumnoYaInscripto(nombre)
        ? "✅ Ya está inscripto en algún turno"
        : "❌ No está inscripto en ningún turno";

    });
  }

    if (btnResumen && resultado) {
    btnResumen.addEventListener("click", () => {
      const r = resumenTurnos();

      resultado.innerHTML = `
        🌅 Mañana: ${r.mañana} <br>
        🌇 Tarde: ${r.tarde} <br>
        🌙 Noche: ${r.noche} <br>
        📊 Total: ${r.total}
      `;
    });
  }


});






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




function cambiarColor() {
    document.body.classList.toggle("cambio-Color")

    const btnColor = document.getElementById("cambio-Color");
    if (document.body.classList.contains("cambio-Color")) {
        btnColor.textContent = "Modo Claro";
    } else {
        btnColor.textContent = "Modo Oscuro";
    }
}

function MostrarAlumnos (){

  alert("Los alumnos por el momento que estan por inscibirse son: " +alumnos);

  
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

      alert("Se agrego: " + nombre);
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

function AgregarconJoin() {

  let textoIntermedio = alumnos.join(" // ");

  alert(
    "Array normal: " + alumnos + 
    "\nCon separador: " + textoIntermedio +
    "\n\nTurno Mañana: " + (turnos.mañana.length ? turnos.mañana.join(" // ") : "Nadie") +
    "\nTurno Tarde: " + (turnos.tarde.length ? turnos.tarde.join(" // ") : "Nadie") +
    "\nTurno Noche: " + (turnos.noche.length ? turnos.noche.join(" // ") : "Nadie")
  );

}

function OrdenarAlfabeticamente() {

  alumnos.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  turnos.mañana.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  turnos.tarde.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  turnos.noche.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  alert(
    "ALUMNOS (A-Z): " + (alumnos.length ? alumnos.join(" , ") : "Nadie") +
    "\n\nTurno Mañana (A-Z): " + (turnos.mañana.length ? turnos.mañana.join(" , ") : "Nadie") +
    "\nTurno Tarde (A-Z): " + (turnos.tarde.length ? turnos.tarde.join(" , ") : "Nadie") +
    "\nTurno Noche (A-Z): " + (turnos.noche.length ? turnos.noche.join(", ") : "Nadie")
  );
}


function Inclusion() {
  let nombre = prompt("Ingrese el nombre a buscar:");

  if (nombre === null) {
    alert("Cancelaste la búsqueda.");
    return;
  }

  nombre = nombre.trim().toLowerCase();

  let contenido = alumnos.includes(nombre);

  alert(contenido ? "✅ El alumno está en el registro." : "❌ El alumno NO está.");
}


function BuscarConIndexOf() {
  let nombre = prompt("Ingrese el nombre a buscar:");

  if (nombre === null) {
    alert("Cancelaste la búsqueda.");
    return;
  }

  nombre = nombre.trim().toLowerCase();

 
  let indice = alumnos.indexOf(nombre);

  if (indice !== -1) {
    alert("✅ Encontrado: " + alumnos[indice] + "\nPosición: " + indice);
  } else {
    alert("❌ No está en el array.");
  }
}

function MostrarTurnosConSlice() {
  let cantidad = prompt("¿Cuántos alumnos querés ver por cada turno? ");

  if (cantidad === null) {
    alert("Cancelaste.");
    return;
  }

  cantidad = parseInt(cantidad);

  if (Number.isNaN(cantidad) || cantidad <= 0) {
    alert("Cantidad inválida. Ingresá un número mayor a 0.");
    return;
  }

  //  slice NO modifica el array original
  let vistaManiana = turnos.mañana.slice(0, cantidad);
  let vistaTarde   = turnos.tarde.slice(0, cantidad);
  let vistaNoche   = turnos.noche.slice(0, cantidad);

  alert(
    "📌 Vista previa con SLICE (" + cantidad + " por turno)\n\n" +
    "Turno Mañana: " + (vistaManiana.length ? vistaManiana.join(", ") : "Nadie") + "\n" +
    "Turno Tarde: "  + (vistaTarde.length ? vistaTarde.join(", ") : "Nadie") + "\n" +
    "Turno Noche: "  + (vistaNoche.length ? vistaNoche.join(", ") : "Nadie")
  );
}

//foreach recorre uno por el array
function MostrarAlumnosNumerados() {

  if (alumnos.length === 0) {
    alert("No hay alumnos.");
    return;
  }

  let texto = "📋 Lista numerada:\n\n";

  alumnos.forEach(function(nombre, indice){
    texto += (indice + 1) + ") " + nombre + "\n";
  });

  alert(texto);
}


 // map transforma datos crea un nuevo array pasa a mayuscula
function MostrarAlumnosMayusculas() {

  let mayus = alumnos.map(function(nombre){
    return nombre.toUpperCase();
  });

  alert("🔠 En mayúsculas:\n" + mayus.join(", "));
}


//filter filtra devuelve elementros con una condicion
function FiltrarNombresLargos() {

  let largos = alumnos.filter(function(nombre){
    return nombre.length > 5;
  });

  alert("📏 Nombres largos:\n" + (largos.length ? largos.join(", ") : "Ninguno"));
}


function EstadisticasTurnos() {

  const datos = Object.entries(turnos);

  let texto = "📊 Estadísticas:\n\n";

  datos.forEach(function([turno, lista]){
    texto += turno + ": " + lista.length + " alumnos\n";
  });

  alert(texto);
}


function alumnoYaInscripto(nombre){

  return turnos.mañana.some(a => a === nombre) ||
         turnos.tarde.some(a => a === nombre)  ||
         turnos.noche.some(a => a === nombre);

}


function resumenTurnos(){

  const arrays = [turnos.mañana, turnos.tarde, turnos.noche];
  const nombres = ["mañana", "tarde", "noche"];

  return arrays.reduce(function(acc, array, i){

    acc[nombres[i]] = array.length;
    acc.total += array.length;

    return acc;

  }, { total: 0 });

}


//| Método      | Cuándo usarlo                                |
//| ----------- | -------------------------------------------- |
//| `indexOf`   | strings o números simples                    |
//| `some`      | solo saber SI existe  true o flaso           |
//| `find`      | querés el elemento                           |
//| `findIndex` | querés la posición (busca posicion)          |
//| `reduce`    | todo 1resultado cuenta suna total estadistica|
//| `map`       | converti /trasnforma                         |
//| `some`      | hya alguno?                                  |



//| Método    | Devuelve    | Uso típico      |
//| --------- | ----------- | --------------- |
//| some      | boolean     | existe          |
//| find      | elemento    | buscar          |
//| findIndex | número      | posición        |
//| filter    | array nuevo | filtrar         |
//| map       | array nuevo | transformar     |
//| reduce    | 1 valor     | acumular        |
//| indexOf   | número      | posición simple |
