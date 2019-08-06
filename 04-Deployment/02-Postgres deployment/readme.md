# Get Started

## Install packages
```
npm install
```
## Create Tables
```
npm run init
```

Start applications
```
nodemon app.js
```


# Background
You know how to deploy an API application to a cloud server now but the database is still not deployed yet. 

You task will be to deploy your database so your cloud API can access it as well.

# Walk through

## Creating an app
Postgres Database is an add-on of an Heroku app. So the first step is to create an app just like in previous task:
```
git init
heroku login
heroku create
```
## Postgres add-ons

Create a Postgres add-on to your app by:
```
heroku addons:create heroku-postgresql:hobby-dev
```
A new database should be set up on the cloud. 
To view the tables on your cloud database you can run:
```
heroku pg:psql
\dt
```

## Connecting your API server to cloud database
Heroku has a really nice dashboard for managing your cloud applications. Go to the [datastores](https://data.heroku.com/) and you should be able to see a postgresql database on the table. 

![datastores](https://github.com/kwnath/whiteboard-challenges/blob/master/04-Backend/04-Deployment%20(new)/02-Postgres%20deployment/statics/datastores.png?raw=true)

Click into it and click the **Settings** tab. Click the View Credentials... button to view your database configurations.

![credential](https://github.com/kwnath/whiteboard-challenges/blob/master/04-Backend/04-Deployment%20(new)/02-Postgres%20deployment/statics/creds.png?raw=true)

With reference to **configs/dev/db-config.json**. Create a similar file inside the **configs/prod** folder but with the configuration replaced with the cloud configurations.

Finally, to initialise the tables on the cloud database run `STAGE=prod npm run init`. The environment variable STAGE will tells the application to import the config from the prod folder.

You should now be connected to the cloud database. You can test your API application now using Postman and send a GET request to http://localhost:8077/products to see if it works. 
