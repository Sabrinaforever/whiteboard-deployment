# Get Started

## Heroku 

1. Register [Heroku](https://signup.heroku.com/dc) account.
2. Install Heroku CLI.

      **Mac**
      ```
      brew tap heroku/brew && brew install heroku
      ```

    **Window**

    Download installer [here](https://cli-assets.heroku.com/heroku-x64.exe)

    **Ubuntu**
    ```
    sudo snap install heroku --classic
    ```

# API deployment

### Creating a Heroku app

Initialise a Git repository by doing running `git init`.

 Once you have installed Heroku CLI, login by `
 heroku login`

 Then create a Heroku app by `heroku create`. You can view your apps in your [dashboard](https://dashboard.heroku.com/apps)

### Creating a Procfile

You should have an empty file called Procfile inside the folder. This is the file that tells the dyno what commands to run. Referring back to slides if needed, create a Procfile for deployment.

### Deploying the API server
Finally, you can push your code to the repository by:

```
git commit -am "update"
git push heroku master
```

Once pushed, you can start deploying the app by `heroku ps:scale web=1`

When it is done, run `heroku open`. Your browser will open a new tab and you should see a Hello World message. The url shown in the url bar is the url of your API server.

# Updating the API

If you made some changes, you can just update the deployed API by pushing your updated code to the repository.

Inside your **app.js**, edit the app.get("/") route so that the server would send by a 'Whiteboard Academy' string instead of 'Hello world'.

Push the files by running

```
git commit -am "update"
git push heroku master
```

Once that is done, run `heroku open` again and you should see that your API server on the cloud has been updated (returning the 'Whiteboard Academy' message)

And that's deployment done! You can test your other to-do list APIs using Postman. 

# Small notes

When you console.log something, it is logged in the cloud's terminal. You can access it by doing:
```bash
heroku logs --tail
```
In the future, when you encounter errors, you can run the above command to debug.