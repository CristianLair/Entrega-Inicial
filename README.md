Facultad de ciencias naturales. 
Stack 
El proyecto esta armado con NodeJS por el cual corre un entorno de Heroku. 

Se compone por:

Armado web en servidor (SSR)
REST API

Keywords: NodeJS,EJS,API,MongoDB,Heroku

Levantar el proyecto (facultad)

Descargar el repo

Instalar modulos en el /website y en la /api mediante npm i
Para que funcione el sitio es necesario primero utilizar npm i en api

Levantar API

Levantar una instancia local de MongoDB que exponga el puerto 27017.
Crear una base llamada registro-usuarios en MongoDB.
Levantar el servicio con el comando node index.js dentro de api/src. Opcionalmente se puede usar nodemon index.js si se va a trabajar sobre la API.

Levantar website

Una vez corriendo el servicio, levantar el proyecto website con los comandos node app.js o nodemon app.js en la carpeta /website.
