# multimedia-compressrom

![Angular.js](https://img.shields.io/badge/angular.js-%23E23237.svg?style=for-the-badge&logo=angularjs&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
![Spotify](https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white)
![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white)

## Whats SpotyROM?

Project developed for the implementation of various multimedia mechanisms, including:

- A trivia game related to Formula 1.
- Information about Formula 1 drivers and circuits.
- Image compressor.

The implementation is MVP, which involves creating an initial version of a product with a minimal set of features that is sufficient to attract early users and validate the concept's viability.

## Angular

If u have NodeJS already in your computer you have to follow the next steps:

- To create the repo first you have to execute the following command in shell:
  ```shell
  ng new multimedia-compressrom --no-standalone --routing --ssr=false --style=css
  ```
- Build `npm install` for installing the app.
- Run `npm start` for starting the app. It will open automatically the path `http://localhost:4200/` in your default browser.

## Docker

Also the application is able to run thanks to Docker by following the next steps:

First of all you should create both file to run the application [Dockerfile](./Dockerfile) y `dockerignore`.

### Create image

There are two ways to create a docker images:

- Create image using `Visual Studio`

  1. Install Extension `Docker` into `Visual Studio`
  2. After installing, open `Dockerfile` file and do rigth click and click `Build Image` and press enter when pop-up is visible.

- On the other hand, you have to open PowerShell terminal and execute the next command:
  ```
      docker build --pull --rm -f "Dockerfile" -t compressrom:latest "."
  ```

### Run service

Once you have created the image for running the service you have to open the PowerShell and execute the next command.

```terminal
  docker run -p 4200:4200 compressrom
```

And open in the browser the next url: `http://localhost:4200/`.
