# Documentación del Proyecto PotterAPI
## Descripción General
Este proyecto es una página web interactiva que permite a los usuarios obtener información sobre personajes de la serie de novelas "Harry Potter". La página utiliza una API para obtener datos de los personajes y mostrarlos en una tabla. Los usuarios deben ingresar la palabra "characters" en el campo de texto y presionar el botón "Enviar" para ver la información.

## Estructura del Proyecto
El proyecto está compuesto por tres archivos principales:

1. **index.html**: Contiene la estructura HTML de la página.
2. **styles.css**: Contiene los estilos CSS para la página.
3. **main.js**: Contiene la lógica JavaScript para interactuar con la API y actualizar la página.

- **index.html**
Este archivo define la estructura de la página web. Incluye un encabezado con un logo, un formulario para ingresar la palabra clave, un área de notificación, y una tabla para mostrar los datos de los personajes.

- **styles.css**
Este archivo define los estilos visuales de la página. Incluye estilos para el encabezado, el formulario, la tabla, y otros elementos de la página. También incluye estilos responsivos para asegurar que la página se vea bien en diferentes tamaños de pantalla.

- **main.js**
Este archivo contiene la lógica JavaScript que maneja la interacción con la API y la actualización de la página. A continuación, se explica en detalle cada parte del código JavaScript.

## Explicación del Código JavaScript
### Variables Globales
```js
const API_BASE_URL = 'https://potterapi-fedeperin.vercel.app/es/';
const FORM_ID = 'form';
const URL_INPUT_ID = 'urlInput';
const NOTIFICATION_ID = 'notification';
const CHARACTER_TABLE_ID = 'characterTable';
```
Estas variables globales almacenan los identificadores de los elementos HTML y la URL base de la API.

### Evento DOMContentLoaded

```js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById(FORM_ID);
    form.addEventListener('submit', handleFormSubmit);
});
```
Este evento asegura que el código JavaScript se ejecute una vez que el DOM esté completamente cargado. Se agrega un evento de envío al formulario para manejar la lógica cuando el usuario presiona el botón "Enviar".

### Función handleFormSubmit
```js
function handleFormSubmit(event) {
    event.preventDefault();
    const urlInput = document.getElementById(URL_INPUT_ID).value;

    if (!isValidUrl(urlInput)) {
        document.getElementById('container-table').style.display = 'none';
        showNotification('Ingresar "characters"', 'error');
        return;
    }

    const apiUrl = `${API_BASE_URL}${urlInput}`;
    fetchData(apiUrl);
}
```
Esta función se ejecuta cuando el formulario es enviado. Previene el comportamiento por defecto del formulario, valida la entrada del usuario, y si es válida, construye la URL de la API y llama a la función "fetchData".

### Función isValidUrl
```js
function isValidUrl(url) {
    return url === 'characters';
}
```
Esta función valida que la entrada del usuario sea exactamente "characters".

### Función showNotification
```js
function showNotification(message, notificationType = 'success') {
    const notification = document.getElementById(NOTIFICATION_ID);
    notification.innerHTML = message;
    notification.style.display = 'flex';
    if (notificationType === 'success') {
        notification.style.color = 'green';
    } else {
        notification.style.color = 'red';
    }
}
```
Esta función muestra un mensaje de notificación en la página. El color del mensaje depende del tipo de notificación (éxito o error).

### Función fetchData
```js
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
        showNotification(`Error: ${error.message}`, 'error');
    }
}
```
Esta es una función asincrónica que realiza una solicitud a la API utilizando "fetch". Si la solicitud es exitosa, convierte la respuesta a JSON y llama a la función "displayData" para mostrar los datos. Si hay un error, muestra un mensaje de error.

### Función displayData
```js
function displayData(data) {
    document.getElementById('container-table').style.display = 'block';
    const tableBody = document.querySelector('tbody');
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
```
Esta función muestra los datos de los personajes en la tabla. Primero, limpia cualquier dato existente en la tabla. Luego, para cada personaje en los datos, crea una nueva fila en la tabla y llena las celdas con la información del personaje.

## Conceptos Importantes
### Función Asincrónica
Una función asincrónica es una función que permite realizar operaciones asincrónicas, como solicitudes a una API, sin bloquear el hilo principal de ejecución. En este proyecto, la función "fetchData" es asincrónica y utiliza _await_ para esperar la respuesta de la API antes de continuar con la ejecución del código.

### Manipulación del DOM
El código JavaScript manipula el DOM para actualizar la página en respuesta a las acciones del usuario. Esto incluye mostrar y ocultar elementos, actualizar el contenido de las notificaciones, y llenar la tabla con datos de los personajes.

### Validación de Entrada
La función "isValidUrl" asegura que la entrada del usuario sea válida antes de realizar la solicitud a la API. Esto ayuda a prevenir errores y mejorar la experiencia del usuario.