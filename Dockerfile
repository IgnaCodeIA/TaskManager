# Utiliza una imagen base de Node.js para construir la aplicación
FROM node:14 AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Utiliza una imagen base de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos desde la etapa de construcción al directorio de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80 para el tráfico HTTP
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]