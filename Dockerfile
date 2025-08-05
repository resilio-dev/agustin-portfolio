# Etapa 1: build del frontend Angular
FROM node:20 AS build

WORKDIR /app

# Copiamos solo package.json y package-lock.json primero para aprovechar cache de dependencias
COPY package*.json ./

# Instalamos dependencias (aprovechamos cache si no cambiaron)
RUN npm install

# Ahora copiamos el resto de los archivos del proyecto
COPY . .

# Compilamos Angular en modo producción
RUN npm run build:prod

# Etapa 2: servidor NGINX para servir los archivos estáticos
FROM nginx:alpine

# Eliminamos el default.conf para evitar conflictos
RUN rm /etc/nginx/conf.d/default.conf

# Copiamos nuestro propio archivo de configuración de NGINX
COPY nginx.conf /etc/nginx/conf.d

# Copiamos el contenido build (dist) al path por defecto de NGINX
COPY --from=build /app/dist/agustin-portfolio /usr/share/nginx/html
