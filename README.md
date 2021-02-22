<h1 align="left">:computer: Agilizei Bootcamp - Desafio 02  </h1>

Project developed to meet the Agilizei Bootcamp Challenge 02 requirements.

## Introduction
This project contains the interface test automation of the <a href="https://demo.realworld.io/#/">Conduit website</a>. 
The automation will cover only the new user registration flow.



## Challenge Requirements

- Create a test for user registering
- Create a test for user login
- Create a test for article creation and post
- Use Page Objects. 
- Create assertions with routes and validations on screen.
- Split the responsability of each route.
- Setup a pipeline on Azure Devops.
- Publish the report on Azure Devops.


## Environment Setup
**Prerequisites:** 
* <a href="https://nodejs.org/en/download/"> NodeJS </a> 

1. Clone the project

2. To initialize the project issue the below command in project root directory.
```
npm install
```


## How to run?

Issue the below commands in project root directory:
```
npm run cy:open
Electron: `npm run cy:run:electron`
Chrome: `npm run cy:run:chrome`
Firefox: `npm run cy:run:firefox`

```

The execution will run headless.


After execution is completed the videos are available in cypress/videos

- Login

![login gif](https://user-images.githubusercontent.com/20997661/95933181-5104d180-0da4-11eb-9530-6f55b092724c.gif)

- Registering

![cadastro gif](https://user-images.githubusercontent.com/20997661/95933317-a0e39880-0da4-11eb-88e0-13819aca292c.gif)

- Articles

![artigos gif](https://user-images.githubusercontent.com/20997661/95933312-9fb26b80-0da4-11eb-8c1a-40e6e88c6571.gif)


## Azure DevOps Pipeline + Reports

The project runs in an Azure pipeline:

- https://dev.azure.com/diegohdb/Agilizei%20Bootcamp%20N2/_build/results?buildId=5&view=results

![azure](https://user-images.githubusercontent.com/20997661/95932641-c66fa280-0da2-11eb-8bec-821b2fcf5d46.png)



## Author
<a target="_blank" href="https://github.com/diegohdb/diegohdb">👤 Diego Bezerra </a>

<a target="_blank" href="https://www.linkedin.com/in/diegohdb/">
  <img align="left" alt="LinkdeIN" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
</a>
<a target="_blank" href="https://www.instagram.com/diegohdb/">
  <img align="left" alt="Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />
</a>
<a target="_blank" href="mailto:diegohdb@gmail.com">
  <img align="left" alt="Gmail" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg" />
</a>
