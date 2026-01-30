🎓 Gestor de Inscripción a Turnos – JavaScript

Aplicación desarrollada en JavaScript (ES6+) que simula un sistema de inscripción de alumnos a turnos (mañana / tarde / noche) con interacción mediante botones HTML + eventos DOM.

El proyecto está orientado a practicar lógica real de administración (altas/bajas/orden/búsquedas) y a demostrar manejo sólido de arrays, objetos y manipulación del DOM.

✨ Funcionalidades

📝 Inscribir alumnos a un turno (mañana/tarde/noche) mediante prompt

👥 Mostrar listado de alumnos y turnos

➕ Agregar alumno al inicio o al final (unshift / push)

❌ Eliminar alumno del inicio o del final (shift / pop)

🔍 Búsqueda por nombre (includes, indexOf)

🔤 Orden alfabético (sort + localeCompare)

🔗 Mostrar con separadores (join)

👀 Vista parcial de turnos sin modificar datos (slice)

🌗 Toggle de tema claro/oscuro (classList.toggle)

🧠 Caso de uso real

Modela situaciones comunes en sistemas de:

inscripción a cursos

gestión de listas por categorías

reservas por turnos

organización de usuarios por grupos

Este proyecto sirve como base para escalar a una versión con:

formulario UI real (inputs en vez de prompt)

persistencia con localStorage / backend

validaciones más completas

renderizado dinámico en HTML

🛠️ Tecnologías y conceptos aplicados

🟨 JavaScript ES6+

🧩 DOM + Eventos:

DOMContentLoaded

addEventListener("click", ...)

getElementById

classList.toggle

🧱 Estructuras de datos:

Arrays: push, pop, shift, unshift, sort, join, slice, filter

Objeto literal como mapa de turnos:

turnos = { mañana: [], tarde: [], noche: [] }


🔎 Lógica de validación y normalización:

trim()

toLowerCase()

🧠 Control de flujo:

bucles for

condicionales if/else

reintento de carga (i--)

🏗️ Arquitectura del proyecto

alumnos[] almacena el listado principal

turnos{} organiza alumnos por turno (mañana, tarde, noche)

Funciones principales:

iniciarInscripcion()

mostrarTurnos()

agregarPrimero() / AgregarUltimo()

eliminarPrimero() / EliminarUltimo()

OrdenarAlfabeticamente()

Inclusion() / BuscarConIndexOf()

MostrarTurnosConSlice()

cambiarColor()

🎯 Qué demuestra este proyecto

✔ Manejo de estructuras de datos en escenarios reales
✔ Interacción con el DOM y eventos de usuario
✔ Limpieza y normalización de inputs
✔ Operaciones típicas de administración (CRUD parcial)
✔ Pensamiento de escalabilidad (base para UI y persistencia)

🚀 Próximas mejoras

Reemplazar prompt/alert por UI con formularios

Mostrar listas en HTML (render dinámico)

Guardar turnos en localStorage

Validación avanzada (evitar nombres vacíos / duplicados)

👨‍💻 Autor

Lucas Rimbano
Frontend Developer en formación
JavaScript • DOM • Lógica de negocio • Proyectos aplicables a sistemas reales
