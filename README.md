First run npm 

Create .env file and add. this: 'PORT = 7000' and JSON_SECRET = 'anything'

Add database config in config.json. (I have used postgres)

Run command: 'npm run migrate:up'

Run: npm start

Before updating user data, required token

So that run this api for geeting token: POST - http://localhost:7000/api/token, body - {"email":"xyz@gmail.com"}


for updating data run this api and provide Bearer token in headers also body like this: 
request body:

{

    "name":"Dhruv",
    "email":"dg@gmail.com",
    "dob":"2003-10-20",
    "gender":"male",
    "phone":"9875643210",
    "address":"Demo Testing"

}

or

{

    "name":"Dhruv",
    "dob":"2003-10-20",
    "gender":"male",
    "address":"Demo Testing"

}
