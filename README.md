# Reveal.io Application

Reveal is a simple fullstack application developed with javascript. It allows users to share secrets with a few simple clicks. After creating, the secret can be shared with a link. Be careful when opening the link though - it can only be revealed once, the secret will self-destruct itself after reading.

The project is split into two parts:

1. Frontend - React web application
2. Backend RESTful API - Node-Express application
3. Mongo database

## Getting Started

### Prerequisite

1. The depends on the Docker and Docker compose. You will need to download and install Docker compose from [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/).
2. Environment variables will need to be set. These environment variables include database connection details.

### Run containers

- From project root, type `docker-compose up` to build the app with the Compose file, and run it.

- Open your localhost [https://localhost/](https://localhost/) in your browser
