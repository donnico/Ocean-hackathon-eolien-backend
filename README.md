# Ocean-hackathon-eolien-backend
This repository was made for a Hackathon event, the application is a Express.js API that handle connexion of user and vote of the user on a subject.


# Getting started

you can run a postgresql in docker to start a empty database to do so run the command below:

'''docker run -d --name my_postgres_container -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=mydatabase -p 5432:5432 postgres:latest -p 5432:5432'''

Then you can run the project with

npm install

And finally to start the server you can use:

npm run start

Then you should be able to access these endpoints: 

POST /account/register
POST /account/login
POST /vote/submit
GET /vote/results