# Prueba Técnica de React - Gestión de Tareas

Este proyecto es una aplicación de gestión de tareas desarrollada en React como parte de una prueba técnica. Permite a los usuarios iniciar sesión, ver su perfil, gestionar tareas y realizar acciones como editar, agregar y eliminar tareas.

## Instalación

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/Theminox/PruebaTecnica_React.git
    ```

2. Navega hasta el directorio del proyecto:

    ```bash
    cd PruebaTecnica_React
    ```

3. Instala las dependencias utilizando npm o yarn:

    ```bash
    npm install
    ```

    Esto instalará todas las dependencias necesarias según lo especificado en el archivo `package.json`.

## Uso

1. Inicia la aplicación:

    ```bash
    npm start
    ```

2. Abre tu navegador y accede a [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

## Funcionalidades Principales

### 1. Login

- Permite a los usuarios iniciar sesión utilizando un correo electrónico y una contraseña.
- Las credenciales de prueba son:
  - Correo electrónico: user@example.com
  - Contraseña: password

### 2. Perfil

- Muestra información del usuario, como nombre, correo electrónico, teléfono y ciudad.
- Permite editar la información del usuario.
- Permite navegar a la sección de tareas.

### 3. Gestión de Tareas

- Muestra una lista de tareas.
- Permite agregar nuevas tareas.
- Permite editar una tarea existente.
- Permite eliminar tareas.
- Permite navegar a la sección de perfil y cerrar sesión.

## Tecnologías Utilizadas

- React
- React Router
- react-magic-motion
- JWT
- HTML
- CSS
- JavaScript

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```plaintext
react-tareas/
│
├── public/                   # Archivos públicos, incluyendo index.html
│   ├── index.html            # Página principal
│   └── ...
│
├── src/                      # Código fuente de la aplicación
│   ├── components/           # Componentes de React
│   │   ├── Login.js          # Componente de login
│   │   ├── Perfil.js         # Componente de perfil
│   │   ├── Tareas.js         # Componente de tareas
│   │   └── ...               # Otros componentes
│   │
│   ├── styles/               # Archivos de estilos CSS
│   │   ├── Login.css         # Estilos para el login
│   │   ├── Perfil.css        # Estilos para el perfil
│   │   ├── Tareas.css        # Estilos para las tareas
│   │   └── ...               # Otros archivos de estilos
│   │
│   ├── App.js                # Componente principal
│   ├── auth.js               # Funciones de autenticación
│   ├── index.js              # Punto de entrada de la aplicación
│   └── ...
│
├── package.json              # Lista de dependencias del proyecto
├── package-lock.json         # Archivo de bloqueo de versiones de npm
└── README.md                 # Este archivo
