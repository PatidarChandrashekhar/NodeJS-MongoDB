
## Get an API up and running

First, we create a new swagger project and test a simple "NodeJS-Hello-World" API.

## 1 Install swagger, as described as per below:
Installing on Windows
#Open a terminal.

Run the install:
npm install -g swagger

### 2 Create swagger project directory and cd to it. This is where you'll create your first project.

Execute the project create command:

swagger project create hello-world

### 3 Pick the API framework you want to use. We're going to pick express, but you can pick any of the listed frameworks:

#### ? Framework? (Use arrow keys)
####  connect
#### ❯express
####  hapi
####  restify
####  sails

Note: You must enter the number of the option.

swagger creates a skeleton project that's pre-configured to use your selected framework (in this example, Express). It then runs npm install to pick up the dependencies.

Note: Windows users see the note below regarding npm.

Change to the new project directory: cd NodeJS-Hello-World

### 4 Running the project
swagger project start
to start your API. You now have an API running with swagger!

In another terminal, run this command:

curl http://127.0.0.1:10010/hello?name=Scott

And, you'll get back the response { "message": "Hello, Scott!" }.

That's it - You have now created, started and tested your first API project with swagger!

### 5 How to Open the Swagger editor

swagger project edit

### Open project in Visual studio code

C:\SHEKHAR\DEVELOPMENTS\NodeJS\NodeJS-Hello-World>code .


