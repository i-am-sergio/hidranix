# Usamos una imagen oficial de Node.js como base (etapa de construcción)
FROM node:22-alpine AS builder

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos primero los archivos de configuración (package.json y package-lock.json)s
COPY package*.json ./

# Instalamos las dependencias
RUN npm ci --only=production

# Copiamos el resto del código fuente
COPY . .

# Construimos la aplicación para producción
RUN npm run build

# Etapa final - servidor de producción
FROM nginx:alpine

# Copiar configuración personalizada de NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos los archivos construidos desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponemos el puerto 80 (nginx por defecto usa 80)
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]