# # Usa una imagen base liviana de Node.js
# FROM node:22-slim

# # Establece el directorio de trabajo dentro del contenedor
# WORKDIR /app

# # Copia solo los archivos necesarios para instalar dependencias
# COPY package*.json ./

# # Instala solo las dependencias de producción
# RUN npm install --omit=dev

# # Copia el resto de los archivos del proyecto
# COPY . .

# # Expone el puerto en el que la app escucha
# EXPOSE 5000

# # Usa variables de entorno (opcional si manejas configuración por env)
# ENV NODE_ENV=production

# # Comando para ejecutar tu app
# CMD ["node", "index.js"]

# Usamos una imagen oficial de Node.js
FROM node:22-alpine

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos primero los archivos de package para aprovechar el cache
COPY package*.json ./

# Instalamos las dependencias (usamos npm ci para instalación limpia)
RUN npm ci --only=production

# Copiamos el resto del código fuente
COPY . .

# Exponemos el puerto que usa la aplicación
EXPOSE 5000

# Definimos el usuario no-root para mayor seguridad
USER node

# Comando para iniciar la aplicación
CMD ["node", "index.js"]