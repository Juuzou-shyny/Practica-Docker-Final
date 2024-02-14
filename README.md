
El docker-compose.yml detalla la configuración de una aplicación compuesta por varios servicios: MongoDB, Backend, Frontend, 
y Mongo-Express, todos interconectados en una red definida como practica_net. Cada servicio cumple un rol específico:

MongoDB: Actúa como la base de datos, utilizando la imagen oficial de Mongo. Se configura con un archivo de entorno y
 se inicializa con un script específico. Se mapea el puerto 27018 del host al puerto 27017 del contenedor, permitiendo
  el acceso externo, y se define un volumen para persistir los datos.

Backend: Se construye a partir de un contexto específico (./backend) y depende directamente de MongoDB, asegurando que
 se inicie primero. Expone el puerto 3000 para comunicaciones.

Frontend: Similar al backend en términos de construcción, pero depende de este último, indicando un orden de inicio. 
El comando npm start se utiliza para iniciar la aplicación React, mapeando el puerto 4000 del host al puerto 3000 del contenedor.

Mongo-Express: Provee una interfaz web para administrar MongoDB, usando credenciales definidas en el mismo archivo de 
entorno que MongoDB y dependiendo de este para funcionar. Expone el puerto 8081.

La red practica_net facilita la comunicación entre estos servicios, mientras que los volúmenes y variables de entorno manejan 
la persistencia de datos y la configuración. Este enfoque modular permite una escalabilidad y mantenimiento eficientes de la aplicación.

-Pasos a seguir para ejecutar la aplicación:

Con tan solo ejecutar el comando docker-compose up --build, se inician todos los servicios, descargan los archivos necesarios y podrá acceder 
a la aplicación.
