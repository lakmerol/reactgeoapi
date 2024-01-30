# Reactgeoapi

This project is a basic Docker Compose example that includes a MySQL database, a .NET Core API application, and a React application.

## Getting Started

To run this project, make sure you have Docker and Docker Compose installed on your machine.

1. Clone this project to your computer:

`git clone https://github.com/lakmerol/reactgeoapi.git`

2. Start the services using Docker Compose:

`docker-compose up -d`

This command will start MySQL, the .NET Core API, and the React application.

Access the API in your browser:
API: http://localhost:5000


Access the React application in your browser:

React Application: http://localhost:3000

Stopping
After running the project, you can stop the services and remove the containers using the following command:

`docker-compose down`


This will stop all containers and clean up the network for the respective services.
