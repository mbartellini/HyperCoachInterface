Instalación del API:
--------------------
1) Descomprimir el archivo "API v3.0.0 Installer.zip" en el directorio de instalación.
2) Descargar de https://nodejs.org/en/ la versión 14.18.0 o superior de node.js correspondiente a la plataforma.
3) Utilizando la consola de línea de comandos o una terminal, posicionarse en el directorio creado en el paso 1, escribir "npm install" (sin las comillas) y presionar la tecla Enter. 
4) Aguardar a que se descarguen e instalen todos los módulos necesarios y que en la consola se muestre la leyenda "added YYY packages from ZZZ contributors and audited YYY packages in WWW.WWWs found 0 vulnerabilities".

Iniciar el API:
---------------
1) Utilizando la consola de línea de comandos o una terminal, posicionarse en el directorio de instalación, escribir "npm start" (sin las comillas) y presionar la tecla Enter.
2) Aguardar a que en la consola se muestre la leyenda "Server is ready to take our messages".

Detener el API:
---------------
1) Presionar Ctrl+C la consola de línea de comandos o terminal donde se está ejecutando el API (o cerrar la misma)
2) Escribir "y" (sin comillas) y presionar la tecla Enter. 

Acceder a la documentación del API:
-----------------------------------
1) Utilizando un navegador Web, acceder a la URL "http://localhost:8080/docs/"

Resetear la base de datos del API:
----------------------------------
1) En caso de que estuviera ejecutando, detener el API.
2) Copiar el archivo "exercise.sqlite3" que se encuentra en el archivo "API v3.0.0 Installer.zip" a el subdirectorio "db" del directorio de instalación.