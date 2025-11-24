// BOTÓN QUE BAJA HACIA EL FORMULARIO
document.getElementById("btn-registro").addEventListener("click", function () {
  document.getElementById("registro").scrollIntoView({ behavior: "smooth" });
});

// MANEJO DEL FORMULARIO REAL (Bootstrap Modal)
const form = document.getElementById("form-registro");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const modal = new bootstrap.Modal(document.getElementById("modalConfirm"));
  modal.show();

  form.reset();
});

// Validador con prompt
document.getElementById("btn-validar").addEventListener("click", function () {

  // Captura de datos
  const nombreUsuario = prompt("Ingresa tu nombre completo:");
  const emailUsuario = prompt("Ingresa tu correo electrónico:");
  const passwordUsuario = prompt("Ingresa tu contraseña:");

  // Validaciones
  if (!nombreUsuario || nombreUsuario.trim() === "") {
    console.log("Error: El campo 'nombre' no puede estar vacío");
  }
  else if (!emailUsuario || emailUsuario.trim() === "") {
    console.log("Error: El campo 'email' no puede estar vacío");
  }
  else if (
    !emailUsuario.includes("@") ||
    !emailUsuario.includes(".") ||
    emailUsuario.indexOf(".") < emailUsuario.indexOf("@") + 2
  ) {
    console.log("Error: El correo electrónico debe contener '@' y un punto '.' válido");
  }
  else if (!passwordUsuario || passwordUsuario.trim() === "") {
    console.log("Error: El campo 'contraseña' no puede estar vacío");
  }
  else if (passwordUsuario.length < 8) {
    console.log("Error: La contraseña debe tener al menos 8 caracteres");
  }
  else {
    console.log(`✅ Registro exitoso. ¡Bienvenido, ${nombreUsuario}!`);
  }
});
