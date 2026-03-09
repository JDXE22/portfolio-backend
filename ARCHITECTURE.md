# Project Architecture

This document serves as the single source of truth for the technical architecture, system design, and structural organization of the Portfolio Backend.

## System Overview

The Portfolio Backend is a RESTful API designed to manage and serve content for a personal portfolio website. It handles project showcases, "about me" information, technical stack details, and contact form submissions with email integration and image hosting.

The system is built with a focus on **Modular Clean Architecture**, ensuring that business logic is decoupled from external frameworks and delivery mechanisms.

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Web Framework**: Express.js (v5.1.0)
- **Database**: MongoDB (Atlas)
- **Object Data Modeling (ODM)**: Mongoose
- **Validation**: Zod
- **File Uploads**: Multer & Cloudinary
- **Email Service**: Nodemailer
- **Testing**: Jest & Supertest
- **Process Management**: Nodemon (Development)

## Project Structure

The project follows a modular structure where each functional domain is encapsulated within its own directory.

### Directory Tree

```text
portfolio-backend/
├── src/
│   ├── about/              # Domain: Personal biography and information
│   ├── contact/            # Domain: Contact form processing and email delivery
│   ├── projects/           # Domain: Portfolio project management
│   ├── stack/              # Domain: Technical skills and tools management
│   ├── shared/             # Cross-cutting concerns and global utilities
│   ├── http/               # HTTP-specific infrastructure (custom middleware)
│   ├── db.ts               # Database connection initialization
│   ├── index.ts            # Application entry point
│   └── server.ts           # Express application configuration
├── tests/                  # Integration tests and test utilities
└── package.json            # Dependencies and scripts
```

### Module Responsibilities

Each feature module (e.g., `projects/`) is further divided into layers:

- **`domain/`**: Contains core business logic, interfaces, and entities. It defines the "what" of the application without concern for the database or web framework.
- **`useCases/`**: Implements application-specific logic. It orchestrates the flow of data to and from the domain entities and uses the domain's business logic to achieve the goals of the use case.
- **`adapters/`**: Interfaces with the external world.
  - **Routes**: Define API endpoints using Express.
  - **Models**: Define the database schema using Mongoose.
  - **Tests**: Module-specific unit and integration tests.

### Shared Layer

The `src/shared/` directory contains logic used across multiple modules:

- **`config.env.ts`**: Centralized environment variable management.
- **`error.handler.ts`**: Global error handling middleware.
- **`cloudinary.config.ts`**: Configuration for image storage.
- **`helpers.ts`**: Reusable utility functions.

## Architectural Patterns

### Clean Architecture

The system enforces a strict separation of concerns. The innermost layer (Domain) has no dependencies on outer layers. The Use Case layer depends only on the Domain. The outermost layer (Adapters/Infrastructure) depends on the Use Case layer to perform actions.

### Data Flow

1. **Request**: An HTTP request hits an Express route in the `adapters/` layer.
2. **Validation**: Input is validated using Zod schemas.
3. **Orchestration**: The router calls a function in the `useCases/` layer.
4. **Business Logic**: The Use Case interacts with the `domain/` layer for business rules.
5. **Persistence**: The Use Case calls a method that uses the Mongoose Model in the `adapters/` layer.
6. **Response**: The result is sent back through the router to the client.

## Key Design Decisions

- **Modularization**: Each feature is isolated to prevent "spaghetti code" and make the system easier to test and scale.
- **Centralized Error Handling**: Errors are caught and formatted consistently via a global middleware, preventing implementation details from leaking to the client.
- **Environment Isolation**: Distinct configurations for development, production, and testing.

## Scalability and Maintainability

- **Extensibility**: Adding a new feature involves creating a new folder structure within `src/` without modifying existing core logic.
- **Testability**: The separation of Use Cases and Domain logic allows for easy unit testing of business rules without requiring a database or server.
- **Maintainability**: Clear boundaries between layers ensure that changes to the database (Mongoose) or web framework (Express) have minimal impact on the business logic.
