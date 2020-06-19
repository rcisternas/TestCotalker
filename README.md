# TestCotalker

Test de automatización, donde se realizaron pruebas A y B en Cypress.

## Pasos
1. Instalar NodeJs. https://nodejs.org/es/

2. Crear carpeta de trabajo, abrir una terminal y ubicarse en la carpeta, ejecutando.
```ruby
  npm install Cypress --save-dev
```
3. Descargar el archivo TestCotalker.js y guardarlo en la carpeta cypress/Integration
4. Crear Archivo User.json con su correo y contraseña
```ruby
  {
  "email":"*******",
  "password":"*******",
  }
```

5. Editar Archivo cypress.json para desactivar la seguridad del navegador de chrome
```ruby
  {
    "chromeWebSecurity": false
  }
```
6. Ejecutar en la terminal desde la carpeta de trabajo.
```ruby
npx cypress open
```
7. Seleccionar archivo y ejecutar pruebas.
