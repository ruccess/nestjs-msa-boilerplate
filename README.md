# NestJS MSA Boilerplate (Work in Progress)

NestJS MSA Boilerplate provides a foundation for developing projects based on MSA using the NestJS framework.
It structures the development of independent, deployable, and scalable microservices.

This boilerplate is designed to be a valuable resource for learning Microservices Architecture with NestJS. 
If you plan to use it in a production environment, keep in mind that customization may be required to fit specific business needs.

##Project Status
This project is currently a work in progress, and further developments and improvements are ongoing.

## Features

1. **Microservices Architecture:** Implement a microservices architecture for developing independent and scalable services.

2. **Docker Environment:** Containerize services with Docker for consistent development, testing, and deployment environments.

3. **Authentication and Authorization:** Implement secure user authentication and authorization mechanisms using NestJS's authentication module.

4. **API Documentation:** Automatically generate API documentation using Swagger/OpenAPI.

## Microservices

### 1. Gateway Service

The Gateway service acts as the entry point for all incoming requests, routing them to the appropriate microservices.

### 2. Cat CRUD Service

The Cat CRUD service provides functionalities for creating, reading, updating, and deleting cat-related data. It serves as an example CRUD microservice.

### 3. Authentication Service

The Authentication service handles user authentication and authorization, ensuring secure access to protected resources.

## TODO List

### Gateway Service

- [ ] Implement basic routing.
- [ ] Add middleware for request validation and error handling.
- [ ] Integrate with Cat CRUD service.
- [ ] Implement authentication and authorization settings.

### Cat CRUD Service

- [ ] Implement CRUD operations for the cat entity.
- [ ] Integrate with the database using TypeORM.
- [ ] Provide test coverage

### Authentication Service

- [ ] Develop user registration and login.
- [ ] Implement jwt based authentication.


### Docker and GitHub Actions Setup
- [ ] Dockerize each microservice for consistent deployment environments.
- [ ] Implement GitHub Actions for automated CI/CD workflows.


## Getting Started

### Prerequisites

- Node.js and npm: Install the latest version of [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).
- Docker: Containerize the services using [Docker](https://www.docker.com/).

### Installation

1. Fork and Clone the repository:
```bash
git clone https://github.com/your-username/nestjs-msa-boilerplate.git
cd nestjs-msa-boilerplate
```

2. Install dependencie
```bash
npm install
```

3. Run the NestJS application:
```bash
npm run start:dev
```


### API Documentation
Explore API endpoints and test requests using the automatically generated Swagger documentation at http://localhost:3000/api.
