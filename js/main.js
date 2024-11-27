const api = "https://potterapi-fedeperin.vercel.app/es/";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const urlInput = document.getElementById("urlInput").value;
    // Validar formulario
    if (!formValidate(urlInput)) {
      // Si se ingrese un valor inválido, interrumpir el flujo
      return;
    }

    // Obtener datos de la API
    const apiUrl = api + urlInput;
    fetchData(apiUrl);
  });
});

function formValidate(url) {
  if (url !== "characters") {
    document.getElementById("notification").innerHTML = "Ingresar 'characters'";
    return false;
  }
  return true;
}

async function fetchData(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(response);
    // console.log(data);

    document.getElementById("notification").innerHTML = "¡Solicitud exitosa!";

    // Mostrar resultados en la tabla HTML
    showData(data);
  } catch (e) {
    document.getElementById("notification").innerHTML = "Error: " + e.message;
  }
}

function showData(data) {
  document.getElementById("tableTitle").innerText = "Personajes";
  const characterTable = document.getElementById("characterTable");
  const tableBody = characterTable.querySelector("tbody");
  characterTable.style.display = "block";
  data.forEach((character) => {
    const newRow = tableBody.insertRow();
    newRow.insertCell().textContent = character.fullName;
    newRow.insertCell().textContent = character.nickname;
    newRow.insertCell().textContent = character.hogwartsHouse;
    newRow.insertCell().textContent = character.interpretedBy;
    newRow.insertCell().innerHTML = `<img src=${character.image}>`;
    newRow.insertCell().textContent = character.birthdate;
  });
}

// Funciones Imprimir || Descargar
