const API_BASE_URL = 'https://potterapi-fedeperin.vercel.app/es/';
const FORM_ID = 'form';
const URL_INPUT_ID = 'urlInput';
const NOTIFICATION_ID = 'notification';
const CHARACTER_TABLE_ID = 'characterTable';
const TABLE_TITLE_ID = 'tableTitle';

document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('form');
	form.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
	event.preventDefault();
	const urlInput = document.getElementById(URL_INPUT_ID).value;

	if (!isValidUrl(urlInput)) {
		showNotification('Ingresar "characters"');
		return;
	}

	const apiUrl = `${API_BASE_URL}${urlInput}`;
	fetchData(apiUrl);
}

function isValidUrl(url) {
	return url === 'characters';
}

function showNotification(message) {
	document.getElementById(NOTIFICATION_ID).innerHTML = message;
}

async function fetchData(apiUrl) {
	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(
				`Error en la solicitud. Código de estado: ${response.status}`
			);
		}
		const data = await response.json();
		showNotification('¡Solicitud exitosa!');
		displayData(data);
	} catch (error) {
		showNotification(`Error: ${error.message}`);
	}
}

function displayData(data) {
	document.getElementById(TABLE_TITLE_ID).innerText = 'Personajes';
	const characterTable = document.getElementById(CHARACTER_TABLE_ID);
	const tableBody = characterTable.querySelector('tbody');
	characterTable.style.display = 'block';
	tableBody.innerHTML = ''; // Limpiar tabla antes de agregar nuevos datos

	data.forEach((character) => {
		const newRow = tableBody.insertRow();
		newRow.insertCell().textContent = character.fullName;
		newRow.insertCell().textContent = character.nickname;
		newRow.insertCell().textContent = character.hogwartsHouse;
		newRow.insertCell().textContent = character.interpretedBy;
		newRow.insertCell().innerHTML = `<img src=${character.image} alt="${character.fullName}">`;
		newRow.insertCell().textContent = character.birthdate;
	});
}

// Funciones Imprimir || Descargar
