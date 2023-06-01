function verificarEdad() {
  var edad = prompt("Por favor, ingrese su edad:");

  if (edad >= 18) {
    alert("Bienvenido/a. Puede acceder al sitio.");
  } else {
    alert("Este sitio contiene contenido para adultos. Usted ingresa bajo su responsabilidad.");
  }
}

verificarEdad();

function mostrarAlerta() {
  var selectElement = document.getElementById("mySelect");
  var selectedValue = selectElement.value;
  
  if (selectedValue === "") {
    alert("Por favor, seleccione una opción");
  } else {
    alert("El costo del envio es: " + selectedValue);
  }
}


window.onbeforeunload = function() {
  return "¡Atención! Estás abandonando el sitio. ¿Estás seguro?";
};