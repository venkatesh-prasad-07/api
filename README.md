
# Login and Signup API using JWT

Hello, this is Venkatesh Prasad. I have built a login and signup API using JWT(JSON Web Token). 
JWT token generates a unique token for every username. And all the data gets stored in MongoDB.

I have attached the collection export from Postman.

The server file consists of 2 routes: 
/signup,
/login

For signup, we need to give username and password as the input. And same goes with the login too. 

If the username already exists, it shows "User already created", else it successfully creates the user.

When it comes to login, if the password is correct, it generates a JWT token, else it shows "Authentication Error".

## Demo

This code has been deployed in Vercel, a free hosting website.

Link to the demo:
https://loginapi-venkatesh-prasad-07.vercel.app/


## Run Locally

Clone the project

```bash
  git clone https://github.com/venkatesh-prasad-07/loginapi.git
```

Go to the project directory

```bash
  cd loginapi
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

