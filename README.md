# Sistema Web de Control de Biblioteca

Este proyecto es un sistema web desarrollado con **React (Frontend)** y una arquitectura de microservicios en Node.js para el backend. La comunicación entre servicios se realiza mediante un API Gateway de AWS. El sistema permite la gestión de usuarios, libros y préstamos de forma descentralizada y escalable.

# Estructura del Proyecto

```
proyecto/
├── auth/                # Microservicio de autenticación
├── usuarios/            # Microservicio de gestión de usuarios
├── libros/              # Microservicio de gestión de libros
├── prestamos/           # Microservicio de gestión de préstamos
├── gateway/             # API Gateway con Nginx
├── frontend/            # Aplicación web en React
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── libros/
│   │   │   ├── usuarios/
│   │   │   ├── prestamos/
│   │   │   ├── Register.jsx / Login.jsx / Dashboard.jsx
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── .env
│   └── vite.config.js
└── docker-compose.yml
```

##  Tecnologías Usadas

- **Frontend**: React + Vite
- **Backend**: Node.js (Express)
- **Base de Datos**: MySQL
- **Contenedores**: Docker y Docker Compose

## Instalación y Ejecución

1. Clona este repositorio:
```bash
git clone https://github.com/tuusuario/proyecto-biblioteca.git
cd proyecto-biblioteca
```

2. Inicia todo con Docker:
```bash
docker-compose up --build
```

3. En otra terminal, ve al frontend y ejecuta:
```bash
cd frontend
npm install
npm run dev
```

4. Accede al sistema desde [http://localhost:5173](http://localhost:5173)

## Variables de Entorno

En `frontend/.env`:
```
VITE_API_GATEWAY_URL=http://localhost:3000
```

## Rutas de Navegación

- `/` → Dashboard principal
- `/register` → Registro
- `/login` → Inicio de sesión
- `/usuarios` y `/usuarios/create`
- `/libros` y `/libros/create`
- `/prestamos` y `/prestamos/create`

## Licencia

Este proyecto fue creado con fines académicos.
