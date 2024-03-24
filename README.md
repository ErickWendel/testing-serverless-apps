# Example of how to run e2e and unit tests on serverless apps using LocalStack and Jest
[![Build Status](https://github.com/ErickWendel/testing-serverless-apps/workflows/Docker%20Actions/badge.svg)](https://github.com/ErickWendel/testing-serverless-apps/actions)

Code samples of my video on [testing serverless applications](https://youtu.be/rwyhw9UYHkA). 

It uses **Jest** as test runner, **LocalStack** as a mock server for AWS Services, **serverless framework** to deploy apps on AWS and **GitHub Actions** as continuous integration platform.

Note that it uses **ECMAScript Modules** empowered by **Node.js v20** without any bundlers (NICE).

Leave your star 🌟 in the project 💚

- In the ./tests folder I put two examples: [**e2e**](./test/e2e/listBuckets.test.js) and [**unit**](./test/unit/listBuckets.test.js) tests folder and there you can take a look on how to make those tests. 
- In [./src/factory.js](./src/factory.js) you can take a look on how to configure the **AWS SDK v3** to point it to localStack when in development mode.
  
## Running
![Testando aplicacnes serverless](https://github.com/ErickWendel/testing-serverless-apps/assets/8060102/41ea502b-8d62-4592-9311-91ae1e269113)
### Pre reqs

- Install Docker & Docker-compose
- Install Node.js v20

### Running

- run `docker-compose up -d localstack`
- restore node.js dependencies `npm ci`
- run tests `npm t` or press `F5` on VSCode.

  

