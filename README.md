# Semana 8 Entrega final

En la herramienta Cypress se desarrollaron las pruebas unitarias. La herramienta faker.js se utilizó para la generación de datos aleatorios. 

En la herramienta RIPuppet se desarrollaron las preuabs de reconocimiento.

La información de las pruebas exploratorias se encuentra en la wiki (https://github.com/MiguelDuba/Semana8/wiki)

Para las pruebas se usó la siguiente versión de la aplicación Ghost:

Versión Ghost 4.41.3


## Instrucciones para instalar Ghost
* Para la versión de ghost que se desea ejecutar se puede instalar docker en su sistema operativo (https://docs.docker.com/engine/install/)
* * Una vez se tenga docker instalado, en una terminal se debe ejecutar el siguiente comando para la versión 4.41.3 de Ghost: 
* * `docker run -d -e url=http://localhost:2368 -p 2368:2368 --name ghost_4.41.3 ghost:4.41.3`
* * Después se puede abrir la aplicación Ghost usando la url http://localhost:2368/ghost para las pruebas en cypress
*  Para el correcto funcionamiento es necesario instalar la extensión xpath para cypress (npm install -D cypress-xpath)
* Asegurarse de que la aplicación está en ejecución antes de hacer las pruebas

### Acceso
* Usuario: test@test.com
* Contraseña: 12345678910
* Las instrucciones para ejecutar las pruebas de las respectivas herramientas se encuentran en el Readme correspondiente cada carpeta


## Integrantes
* Krishtian Barrera
* * kd.barrera@uniandes.edu.co
* Sara Maya
* * s.mayav@uniandes.edu.co
* Sara Ramirez
* * sg.ramirez940@uniandes.edu.co
* Miguel Dueñas
* * m.duenasb@uniandes.edu.co

## Registro de reporte de incidencias

Varias de las incidencias encontradas se añadieron al registro de incidencias Jira ubicado en la siguiente URL:
* https://proyectopruebasautomatizadas.atlassian.net/jira/projects
* Nombre del proyecto: Pruebas Automatizadas Entrega Final.
* Acceso:
  * correo: smayav@outlook.com
  * Usuario: UsuarioPrueba 
  * Contraseña: UsuarioPrueba
