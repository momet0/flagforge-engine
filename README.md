# SaaS Project Management API 🚀

Una API de nivel profesional para una plataforma SaaS de gestión de proyectos (estilo Trello/Asana), desarrollada con **NestJS**, **TypeScript** y **PostgreSQL**.

Este proyecto está diseñado siguiendo principios de arquitectura limpia, modularidad estricta e inyección de dependencias, sirviendo como un paralelo de alta robustez a los estándares de desarrollo en Spring Boot.

## 🛠️ Tecnologías y Ecosistema

* **Framework:** [NestJS](https://nestjs.com/) (v11+) con Express v5.
* **Lenguaje:** TypeScript (Tipado estricto y asincronía nativa).
* **Base de Datos:** PostgreSQL (Ejecutado localmente mediante Docker).
* **ORM:** [TypeORM](https://typeorm.io/) (Data Mapper pattern, equivalente a JPA/Hibernate).
* **Validación:** Class-Validator & Pipes (Validación de DTOs en tiempo de ejecución).

---

## 🚀 Arquitectura del Proyecto

A diferencia de la estructura tradicional por capas globales, este backend utiliza una **Arquitectura Modular**. Cada recurso (ej. `Projects`) encapsula sus propios Controladores, Servicios, Entidades y DTOs, promoviendo un bajo acoplamiento.

```text
src/
├── app.module.ts         # Módulo raíz (Spring Boot Application Context)
├── main.ts               # Punto de entrada y configuración global
└── projects/             # Módulo Funcional de Proyectos
    ├── dto/              # Data Transfer Objects (Validación de Request Body)
    ├── entities/         # Entidades de TypeORM (Mapeo de Tablas)
    ├── projects.controller.ts
    ├── projects.module.ts
    └── projects.service.ts
🏃‍♂️ Requisitos Previos
Asegúrate de tener instalado:

Node.js (v18 o superior)

Docker y Docker Compose

🔧 Configuración e Instalación
Clonar el repositorio:

Bash
git clone <url-de-tu-repositorio>
cd saas-project
Instalar dependencias:

Bash
npm install
Levantar la Base de Datos (PostgreSQL):

Bash
docker compose up -d
Iniciar el servidor en modo desarrollo:

Bash
npm run start:dev
El servidor estará disponible en: http://localhost:3000

🛣️ Endpoints Disponibles (Hasta el momento)
Proyectos (/projects)
POST /projects - Crea un nuevo proyecto. (Requiere name en el Body).

GET /projects - Obtiene el listado de todos los proyectos.

GET /projects/:id - Obtiene el detalle de un proyecto específico por su UUID.


---

### 💾 Sube los cambios a GitHub

Una vez que guardes el archivo, aprovecha para hacer tu commit y mantener el perfil activo con este comando en tu terminal:

```bash
git add README.md
git commit -m "docs: actualizar README con la estructura real del proyecto"
git push origin main