# Aesthetic Alchemy - aiGallery

This is the source code of Aesthetic Alchemy website.<br>
Only front end demo - [Demo](https://aestheticalchemy.netlify.app/)<br>
[Figma Link](https://www.figma.com/file/Dsuf2JYOjjqjfSKJvoBacJ/Untitled?type=design&node-id=1%3A2&mode=design&t=LbUgYvNIM0FJWYc7-1)


# Tech Stack

<p align="center">
<a href="https://react.dev/"><img src="https://user-images.githubusercontent.com/75678927/229337642-bc08741b-a9f1-4d8b-9c20-0e63ebed6fcb.png" width="70px" border="0" alt="React" title="React"/></a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://nodejs.org/"><img src="https://user-images.githubusercontent.com/75678927/229337648-36131d8b-8098-4c33-95c7-3438a7990d83.png" border="0" width="70px" alt="NodeJS" title="NodeJS"/></a>&nbsp;&nbsp;&nbsp;&nbsp; 
<a href="https://expressjs.com/"><img src="https://user-images.githubusercontent.com/75678927/229337923-e4f100a3-4378-49b0-a1c3-26e47a9f7de5.png" border="0" width="70px" alt="ExpressJS" title="ExpressJS"/></a>&nbsp;&nbsp;&nbsp;&nbsp; 
<a href="https://www.mongodb.com/"><img src="https://user-images.githubusercontent.com/75678927/229337732-ec83ff2c-3029-4dc0-a316-f10146037e8e.png" width="70px" border="0" alt="MongoDB" title="MongoDB"/></a>  
</p>

### Installation

1. - Fork the [repo](https://github.com/StevenNoronha/aiGallery)
   - Clone the repo to your local system

   ```git
   git clone https://github.com/StevenNoronha/aiGallery
   ```

2. - Front End:
     Install all the dependencies

   ```bash
   cd aiGallery
   cd frontend
   npm install # This will install all the required dependencies for the front-end
   ```

   - Run Front End:

   ```bash
   npm start
   ```

3. - Back End:
     Install all the dependencies

    ```bash
   cd ..
   cd backend/
   npm install # This will install all the required dependencies for the back-end
   ```

   Go to db.js and add ur mongoDB url in
     ```bash
   const mongoURI = 'ADD YOUR URL HERE'
     ```

   - Run Back End:

   ```bash
   nodemon index.js # For Development with nodemon
   ```
   If it shows "Connected successfully" in the terminal your good to go!
   If not add your IP address to your mongoDB server on atlas to access the db server locally from your machine

### Screenshots

![image](https://github.com/StevenNoronha/aiGallery/assets/125193808/d2ef2bee-1aec-42ff-a50e-55a4cb8681f0)

![image](https://github.com/StevenNoronha/aiGallery/assets/125193808/cfde7ab5-91ca-40bc-b677-2e2548ed7b05)

![image](https://github.com/StevenNoronha/aiGallery/assets/125193808/53080583-cdbd-4431-a898-9f0280eaacff)

![image](https://github.com/StevenNoronha/aiGallery/assets/125193808/91d1e3f9-0ca7-47fe-8f76-291818a6d949)





