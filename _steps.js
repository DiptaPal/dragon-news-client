/* 
Basic Project Setup
--------------------
1. create firebase app
2. get select web icon in firebase
3. create a react app
4. install the firebase on project
5. install the react router
6. get firebase configuration inside firebase.config.js
7. make sure to export app from firebase config
8. install a css framework
    (if install react bootstrap make sure that to import bootstrap css in the index.js file)
9. install the react icon(or fontawesome icon) on project if needed
10. 
*/



/* 
Router setup
------------
1. create Route folder for Route and Private route
2. in Route folder, we create routes.js file and we also create the routes and export it for using app js
3. in app js, create <RouterProvider> with router={routes}[routes import from routes.js file]
4. create a layout folder and make Main.js file for set fix component(Header, Footer) and change-able component(Outlet)

*/



/* 
Server Setup
-------------
1. mkdir folder_name (mkdir means make directory)
2. cd folder_name
3. npm init -y
4. create index.js
5. in index.js:
    const express = require('express')
    const app = express();
    const port = 5000;

    app.get('/', (req, res) =>{
        res.send('Hello World')
    })

    app.listen(port, ()=>{
        console.log(`Server running on port: ${port}`);
    });


6. npm install express
7. node index.js
8. if we change in index.js then every time we need to re-run the the server by node index.js . so, if we not to do this then we need to install nodemon for auto refresh: 
    npm install -g nodemon

9. now, we can run server by: nodemon index.js
10. but we cannot access data from server for cors error. it happens for privacy. For that, we need to install:     npm install cors
*/