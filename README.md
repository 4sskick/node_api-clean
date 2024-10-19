## Clean Architecture

### Directory Structure
```bash
src/
├── domain/
│   ├── entities/
│   └── interfaces/
├── use-cases/
├── infrastructure/
│   ├── database/
│   └── repositories/
└── interface/
    |__ controllers/
    |__ dto
    |__ middleware
    |__ routes
```
### Layer Breakdown

* **Domain Layer:**
  * Contains the core business logic, entities, and interfaces.
  * Independent of any other layers.
* **Use Cases Layer:**
  * Implements the application's business rules.
  * Uses the domain layer entities and interfaces.
* **Infrastructure Layer:**
  * Contains implementations of the domain layer interfaces.
  * Examples: database connections, external service integrations.
* **Interface Layer:**
  * Handles user interactions and requests.
  * Contains controllers, routes, and web framework-related code.
  * Uses the use cases layer to execute business logic.

**Note:** This is a general structure and may vary slightly depending on specific project requirements and architectural preferences.

## RUN Application

| **Development:** | **Production:** |
|---|---|
| 1. Open a terminal or command prompt. | 1. Open a terminal or command prompt. |
| 2. Navigate to the project directory. | 2. Navigate to the project directory. |
| 3. Run the following command: | 3. Run the following command: |
|   ```npm run dev``` |   ```npm run start:prod```
| 4. The application will start in development mode, watching for changes and restarting automatically. | 4. The application will be built for production and generate `dist` folder and then started. |