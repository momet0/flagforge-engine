# FlagForge Engine 🚀

Un motor de Feature Flags (Banderas de Funcionalidad) y Configuración Remota de alto rendimiento y arquitectura multi-tenant, desarrollado con NestJS, TypeScript y PostgreSQL.

Inspirado en plataformas de nivel empresarial como LaunchDarkly y Unleash, este sistema permite a aplicaciones externas activar o desactivar características en producción en tiempo real, segmentar configuraciones por entornos y gestionar cambios críticos de software sin necesidad de realizar nuevos despliegues (re-deploys).

## 🏗️ Desafíos Técnicos y Arquitectura

Este proyecto está diseñado para demostrar dominio en patrones avanzados de backend modernos, sirviendo como un paralelo de alta robustez a los estándares de desarrollo en Spring Boot (Spring Cloud Config / Spring Security):

- Jerarquía Multi-Tenant: Estructura relacional estricta donde un Proyecto gestiona múltiples Entornos (Dev, Staging, Prod), y cada uno de ellos aísla sus propias configuraciones mediante llaves de API únicas.
    
- Persistencia Robusta: Modelado relacional con TypeORM utilizando el patrón Data Mapper (equivalente a JPA/Hibernate) sobre PostgreSQL.
    
- Validación en Tiempo de Ejecución: Pipas globales de NestJS (ValidationPipe) integradas con class-validator para asegurar un tipado estricto de DTOs antes de tocar la capa de servicios.
    

src/  
├── app.module.ts            # Módulo raíz (Spring Application Context)  
├── main.ts                  # Configuración global del servidor y bootstrap  
├── projects/                # Módulo raíz de aplicaciones cliente  
│   ├── dto/                 # Data Transfer Objects de proyectos  
│   ├── entities/            # Entidad Project (Tabla principal)  
│   ├── projects.controller.ts  
│   ├── projects.module.ts  
│   └── projects.service.ts  
└── environments/            # Módulo de entornos y segregación de datos  
    ├── dto/                 # Data Transfer Objects de entornos  
    ├── entities/            # Entidad Environment (Relación ManyToOne con Project)  
    ├── environments.controller.ts  
    ├── environments.module.ts  
    └── environments.service.ts  
  

## 🛠️ Stack Tecnológico

- Framework: NestJS (v11+) con Express v5.
    
- Lenguaje: TypeScript (Tipado estricto y asincronía nativa).
    
- Base de Datos: PostgreSQL (Instancia local contenerizada).
    
- ORM: TypeORM.
    
- Contenedores: Docker & Docker Compose.
    

## 🔧 Configuración del Entorno de Desarrollo

1. Clonar el repositorio:  
    git clone https://github.com/momet0/flagforge-engine 
    cd flagforge-engine
    
2. Instalar dependencias de Node.js:  
    npm install
    
3. Levantar PostgreSQL con Docker:  
    docker compose up -d
    
4. Iniciar el servidor en modo desarrollo (Hot-Reload):  
    npm run start:dev  
    La API estará escuchando peticiones en: http://localhost:3000
    

## 🛣️ Endpoints Base Actuales

### 📁 Proyectos (/projects)

- POST /projects - Registra una nueva aplicación o microservicio en la plataforma.
    
- GET /projects - Lista todos los proyectos.
    
- GET /projects/:id - Obtiene el detalle de un proyecto por UUID.
    
- PATCH /projects/:id - Modifica metadatos del proyecto.
    
- DELETE /projects/:id - Elimina el proyecto y sus entornos asociados en cascada.
