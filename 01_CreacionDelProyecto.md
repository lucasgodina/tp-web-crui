# Creación del proyecto

En este documento se detallará un paso a paso de cómo fue creado el proyecto.
También nos sirve de guía para despejar dudas a la hora de preparar la defensa del trabajo.

## Paso 1: Creación del repositorio

Creamos un nuevo repositorio en GitHub, clonamos en nuestra computadora y luego creamos los archivos necesarios

-   index.html
-   styles.css
-   main.js

## Paso 2: Estructura de la página web

Definimos la estructura básica de la página web en el archivo index.html. Utilizamos HTML para crear los elementos necesarios y organizarlos de manera lógica.

Ejemplo de estructura en index.html:

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Mi Proyecto Web</title>
		<link rel="stylesheet" href="styles.css" />
	</head>
	<body>
		<header>
			<h1>Bienvenidos a Mi Proyecto Web</h1>
		</header>
		<main>
			<section id="contenido">
				<h2>Contenido Principal</h2>
				<p>Este es el contenido principal de la página.</p>
			</section>
			<button id="miBoton">Haz clic aquí</button>
		</main>
		<script src="main.js"></script>
	</body>
</html>
```

Esta estructura básica incluye un encabezado, una sección principal de contenido y un botón interactivo.

## Paso 3: Estilo de la página web

Definimos el estilo de la página web en el archivo styles.css. Utilizamos CSS para darle un diseño atractivo y mejorar la experiencia del usuario.

Ejemplo de estilos en styles.css:

```css
body {
	font-family: Arial, sans-serif;
	background-color: #f0f0f0;
	margin: 0;
	padding: 0;
}

header {
	background-color: #4caf50;
	color: white;
	text-align: center;
	padding: 1em 0;
}

main {
	margin: 20px;
}

button {
	background-color: #4caf50;
	color: white;
	border: none;
	padding: 10px 20px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
}
```

Estos estilos básicos aseguran que la página tenga una apariencia coherente y profesional.

## Paso 4: Funciones de la página web y uso de la API

Implementamos las funciones necesarias en el archivo main.js para que la página web sea interactiva. Utilizamos JavaScript para manejar eventos y manipular el DOM.

Además, integramos una API para obtener datos dinámicos y mostrarlos en la página. Para esto, utilizamos la función fetch() para hacer solicitudes HTTP y procesar las respuestas.

Ejemplo de uso de fetch():

```javascript
fetch('https://api.example.com/data')
	.then((response) => response.json())
	.then((data) => {
		// Procesar y mostrar los datos en la página
		console.log(data);
	})
	.catch((error) => {
		console.error('Error al obtener los datos:', error);
	});
```
