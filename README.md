# Fullstack Docker Template

This is a template for a full-stack application using:
- React (Vite) for the frontend
- Ruby on Rails API for the backend
- PostgreSQL for the database
- Docker for containerization

## Getting Started

1. Clone this repository
2. Make sure you have Docker and Docker Compose installed
3. Run the following commands:

```bash
docker compose build
docker compose up -d
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## Creating a New Project

To use this template for a new project:

1. Create a new directory with your project name:
```shell
mkdir my-new-project
cd my-new-project
```

2. Clone this template repository:
```shell
git clone https://github.com/devtechsystems/easy-bootstrap.git .
```

3. Remove the existing git history and start fresh:
```shell
rm -rf .git
git init
```

4. Build and start your application:
```shell
docker compose build
docker compose up
```

Your containers will be automatically named based on your project directory (instead of easy-bootstrap):
- my-new-project-frontend
- my-new-project-backend
- my-new-project-db
