# Imagen base
FROM node:8.15
# Variable de entorno que tiene que coincidir con la dirección DNS para acceder al servicio
ENV PATH_SERVER=localhost
# Se establece el directorio de trabajo
WORKDIR /app
# Se copia la aplicación
COPY . /app
# Damos permiso de execución en la app y le cambiamos el grupo
RUN chmod -R u+x /app && chgrp -R 0 /app
# Se instalan todas las dependencias necesarias para la aplicación
RUN npm install
# Se expone el puerto por el cual estará escuchando el contenedor
EXPOSE 8080
# Define un usuario para que ejecute la app diferente de root
USER 1000
# Se ejecuta el script start que levanta un ambiente dev
CMD [ "npm","start" ]