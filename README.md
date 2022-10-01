First run npm 

Create .env file and add. this: 'PORT = 7000'

Add database config in config.json.

Run command: 'npm run migrate:up'

request body:

{

    "updatedName":"Darshak",
    "updatedEmail":"dg@gmail.com",
    "updatedDob":"2003-05-20",
    "updatedGender":"male",
    "updatedPhone":"9875643210",
    "updatedAddress":"Demo Testing",
    "email":"rocky@gmail.com"

}

or

{

    "updatedName":"Darshak",
    "updatedDob":"2003-05-20",
    "updatedGender":"male",
    "updatedAddress":"Demo Testing",
    "email":"rocky@gmail.com"

}
