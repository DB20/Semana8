### Instrucciones para la ejecución de pruebas en RIPuppet

NOTA: Antes de la ejecución de las pruebas de reconocimiento se debe asegurarse de usar la versión de node 12.22.1 para evitar errores al momento de ejecutarlas. Para esto se puede:
* Instalar en el dispositivo nvm (https://github.com/nvm-sh/nvm)
* Instalar con nvm la versión de node necesaria (en este caso la 12.22.1)
* Dejar en uso esa versión con el comando `nvm use 12.22.1` en la terminal

*IMPORTANTE: Debido a que se usó git.ignore al subir el proyecto para los node.modules, si hay dificultad al momento de ejecutar las pruebas tener en cuenta: ubicarse en la carpeta 
pruebas-reconocimiento" dentro de la carpeta "reconocimiento" en la terminal y usar el comando `npm install`. 
Del mismo modo, para poder ver los resultados, ubicarse en la carpeta "results" y ejecutar el comando `npm install -g http-server`.

## Ejecución de las pruebas
* Antes de ejecutar las pruebas, asegurarse de que la aplicación Ghost se encuentra en ejecución.
* Para ejecutar las pruebas, en la terminal ir a la carpeta "reconocimiento", luego ubicarse en la carpeta "pruebas-reconocimiento", y desde ahí ejecutar el comando `node index.js`.
* La ejecución de las pruebas puede tardar unos 30 minutos aproximadamente.
* Una vez haya finalizado la ejecución, en la terminal ir a la carpeta "results" la cual se genera dentro de la carpeta "pruebas-reconocimiento" al ejecutar las pruebas.
* Desde esa ubicación ejecutar el comando `http-server`. En la terminal saldrá una url disponible para abrirla en un navegador. 
* Una vez ubicado ahí, ir a la opción "report" donde se podrá observar el reporte generado para cada uno de los navegadores evaluados.
