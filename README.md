# node-demo
node example 

# Installation <br>
The application requires node.js 18.12.0, which can be installed by:  <br>
apt install nodejs <br>
apt install npm <br>
nvm install 18.12.0 <br><br>
To install dependency, in your terminal, please go to the “test” folder: <br>
nvm use 18.12.0; <br>
npm install <br>
cd client <br>
npm install <br><br>
The application includes frontend (/test/client/) and server (/test/server/). To start the application, in your terminal, please go to the “test” folder, and run the following commands: <br>
//start server <br>
cd server <br>
nvm use 18.12.0; npm start <br>
//start client <br>
cd client <br>
nvm use 18.12.0; npm start <br><br> 
Open browser and go to the homepage by following the link  http://localhost:3000 : <br> 
If you are not using “localhost”, please update the “proxy” value in /test/client/package.json <br><br> 

For more information , please read the documents in /test/doc/ 
