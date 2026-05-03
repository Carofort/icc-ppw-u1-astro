# 01. Instalación y Configuración de Astro

*Carolina Fortmann*

### 1.- Descripción de la práctica:

Este proyecto utiliza **Astro 5.x** como framework principal, aprovechando su capacidad para generar sitios estáticos y optimizados. 
Es importante verificar que la configuracion de *Node.js* y *pnpm* estén correctas:

*   Verificar la versión de *Node.js* con: ```node --version```
*   Verificar la versión de *pnpm* con: ```pnpm --version```

#### ¿Qué se realizó?
*   Se inicializa un proyecto Astro con la plantilla mínima.
*   Se configura la salida estática y la identidad del sitio.
*   Se crea la primera página de inicio funcional utilizando componentes de Astro.


### 2.- Capturas:

#### 1. Creación del Proyecto:
![Instalación de Astro](evidencias/assets/01-instalacion.png)

**Descripción:** Se muestra el proceso de configuración inicial con el CLI de Astro, donde se seleccionó la plantilla minimalista y la configuración de TypeScript.


#### 2. Información del entorno:
![Astro Info](evidencias/assets/01-astro-info.png)

**Descripción:** Se usa el comando `pnpm astro info` para validar que el proyecto está configurado con salida estática y reconociendo el gestor de paquetes pnpm.


#### 3. Home page funcionando en ```localhost:4321```:
![Sitio en Localhost](evidencias/assets/01-localhost.png)

**Descripción:** Vista del navegador en ```http://localhost:4321```. Se confirma que los componentes de Astro están renderizando correctamente el título y la descripción de la página.


#### 4. Build de producción:
![Build de Producción](evidencias/assets/01-build.png)

**Descripción:** Resultado final tras ejecutar ```pnpm build```, mostrando la generación exitosa de los archivos HTML y los recursos listos para producción.