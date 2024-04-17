# Node.js Server

This project is meant to showcase the evolution of a web server built using Node.js as I study this technology more in depth.

## Folder Structure

|__ `controllers`: This directory contains the controller modules used in the callback functions for method handlers.
    |__ `friends.controller.js`: A controller module for the server's `friends` endpoint.
    |__ `messages.controller.js`: A controller module for the server's `messages` endpoint.
|__ `models`: This directory contains the server's models.
    |__ `friends.model.js`: A models file for the current friends data in the server.
|__ `.gitignore`: This file is meant to track the files that the repo and server depend on without having to upload dependencies and large directories to the repo.
|__ `package.json`: This file provides an overview into the project details such as designated scripts and dependency names.
|__`server.js`: This file contains the server's primary code, which will be evolved as the server project evolves.
