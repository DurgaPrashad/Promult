# Amazon MCF Integration Platform

This project is an Amazon MCF (Multi-Channel Fulfillment) Integration Platform that includes both backend and frontend components. The backend is built with Node.js, Express, and MongoDB, while the frontend is built with React. The project is containerized using Docker and Docker Compose.

## Features

- Sync inventory with Amazon MCF
- Create orders through Amazon MCF
- Check fulfillment status

## Prerequisites

- Docker
- Docker Compose

## Project Structure

project-root/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── app.js
│   └── ... (other backend files)
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│   └── ... (other frontend files)
└── docker-compose.yml



## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd project-root
Create a .env file in the backend directory and add your configuration variables:
MONGODB_URI=mongodb://mongo:27017/amazon-mcf
MCF_API_TOKEN=your_mcf_api_token


Usage
Build and start the services using Docker Compose:

docker-compose up --build
Usage
Build and start the services using Docker Compose:

docker-compose up --build
Access the application:

Backend: http://localhost:5000
Frontend: http://localhost:3000
API Endpoints
GET /api/sync-inventory: Sync inventory with Amazon MCF
POST /api/create-order: Create a new order through Amazon MCF
Frontend Components
InventorySync: Component to sync and display inventory.
OrderManager: Component to create new orders.
FulfillmentCheck: Component to check fulfillment status.
Technologies Used
Backend:

Node.js
Express
MongoDB
Axios
dotenv
Mongoose
Frontend:

React
Axios
DevOps:

Docker
Docker Compose
License
This project is licensed under the MIT License.


### Explanation

1. **Project Title and Description**:
   - Provides the name and a brief description of the project.

2. **Features**:
   - Lists the main features of the project.

3. **Prerequisites**:
   - Lists the prerequisites needed to run the project.

4. **Project Structure**:
   - Provides an overview of the directory structure of the project.

5. **Installation**:
   - Provides step-by-step instructions to clone the repository and set up the environment variables.

6. **Usage**:
   - Provides instructions to build and start the services using Docker Compose and access the application.

7. **API Endpoints**:
   - Lists the available API endpoints for the backend.

8. **Frontend Components**:
   - Describes the main frontend components and their functionalities.

9. **Technologies Used**:
   - Lists the technologies used in the backend, frontend, and DevOps.

10. **License**:
    - Specifies the license under which the project is distributed.

This [README.md](http://_vscodecontentref_/2) file provides a comprehensive overview of the project, including setup instructions, usage, and details about the technologies used. It serves as a guide for developers to understand and work with the project.
