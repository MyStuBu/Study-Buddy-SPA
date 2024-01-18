# Study Buddy Single Page Application

Follow these steps to set up and run the Study Buddy spa on your local environment using Docker CLI:

### 1. Download the Repository </br></br>

### A. Start the Development Container with Docker Compose

* Open a terminal.
* Navigate to the project's root directory.
* Run the following command to start Docker Compose for development.

```shell
make dev
``` 

### B. Start the Production Container with Docker Compose
* Open a terminal.
* Navigate to the project's root directory.
* Run the following command to start Docker Compose for production.

```shell
make prod 
``` 

### 2. Get the ID of the Container

Find the CONTAINER ID of the container you've just built using the docker ps command.

```shell
docker ps
```

### 3. Enter the Container

Use the container ID to enter into the container with the exec command.

```shell
docker exec -it {container id} /bin/sh
```
