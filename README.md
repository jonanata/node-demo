# node-demo
node example 

# Introduction <br>  
The application allows users to explore the characters of the Star Wars universe as well as the details related to each one of them such as movies where they appear, home world, race, etc. Users can search characters by name in the given search bar.  <br> 
The backend act as middleware between the frontend and the data sources by consuming the SWAPI and local JSON file and providing its own API to the frontend.  <br>  
For the search function, it will query the SWAPI data source first. If no result, for example “Grogu”, it will query the local JSON files. If it is still no result, the frontend will display “Result Not Found”. Otherwise, it will display the character details as a grid.  <br>  

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
