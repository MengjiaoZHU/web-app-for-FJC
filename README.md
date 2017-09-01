# OCDV Portal

OCDV Portal is a web-app made for The New York City Mayor's Office to Combat Domestic Violence (OCDV). It's currently deployed on AWS: http://ocdvportal.nyc/

The technique stack is MEAN Stack, which represents for  "MongoDB", "Express", "AngularJS" and  "Node.js".

**What we have:**  
  
Currently, we have already implement a template front end design and a backend for register and login functions. The frontend is implemented with Angular 2. For our backend, we implemented it in Node.js with Express and MongoDB.
  
_Front End:_  
Our front end design is currently implemented with Angular 2. For now, our interface design contains mainly three parts, 1) The information pages that provide various resources and information that users might need, including locations of Family Justice Centers, testimonials, technology tips for using the app safely, etc. 
2) The OCDV portal that users can log in, upload and manage their records of incidences, evidences of being abused, and keep track of their court days, etc. The portal is not fully functional yet within the newly deployed version on AWS. We'll fix that soon.

3) Escape button: This function is to help users quickly close our website without any trace in case the abusers suddenly come. By clicking this button, user will be redirected to a new tab and redirects the old page to google to hide the browsing history.

We are also working on a new design with improved user experience. This version is currently in prototype. Please contact Yan (yj334@cornell.edu) for more information.

_Back End:_  
According to what we get from Family Justice Center (FJC), we have implemented a completed register, login and authenticate functions, where the user information will be written into MongoDB "mongodb://localhost:27017/meanauth". For now we only ask for users' email, name and password (which has been encrypted for security reason).  

Also, for each user, we have design profile, dashboard pages for them, the details of which have not been implemented. Before login, users cannot see the buttons of "Profile", "Dashboard" and "Logout"; after they login, they cannot see "Register" and "Login" buttons.  

**What functions we are going to have:**  

All information to display should be read from our database.  

1.	*Profile function:*  
Show user's basic information and the history of her interaction with FJC, such as when she has sought help from FJC, what material she has uploaded, .etc.  

2.	*Record the proof of domestic violence:*  
Users should be able to upload images and files to record their domestic violence in order to be as proof for future use. Also, there should be a textbox that they could write descriptions.  
This should be a button in "Profile" page.  

3.	*Dashboard function:*  
Show incoming appointments with FJC or attorney, also the events or activities held by FJC.  
Should be worked as a reminder page, better to connect with personal calendar.  

We will have more user interaction functions which need to discussed with FJC.  

**Install:**  

*For Front End:*  
Open "public pages" folder and click "index.html" and then you could go through our design.  

*For Back End:*  
You only need to install node.js and mongodb for demo, might need install Angular for development.  

* Node.js(combined with npm):  
Download from https://nodejs.org/en/ and follow the instructions. Input "npm -v" and "node --version" to test if successfully installed.  

* MongoDB:  
The official document https://docs.mongodb.com/master/tutorial/install-mongodb-on-os-x/?_ga=2.37070693.478285941.1496194274-1542108123.1491759084  

**Run:**  

* `sudo apt-get instal mongodb npm nodejs `
 To run the static web-page 
* `$ cd angular-src`
* `$ npm install`
* `$ ng serve --host <ip-address>`
You can ignore the "--host <ip-address>" parameter, and test only from local IP. Or, you can add the public IP of the server, so that it can be accessed from the external world.


**To access web server::**  
*	`ssh -i "~/.ssh/ocdv.pem" ubuntu@ec2-13-59-78-136.us-east-2.compute.amazonaws.com`

**Explanation of this github repository:**  

All files inside "angular-src" folder are for front end in AngularJS.  
Files in "public pages" are our front end in HTML, CSS.  
* package.json includes depencies  
* node_modules includes npm installed modules that we need to use for this project  
* app.js includes the information of setting up node application  
* config folder includes static information of database and passport that is used for user authentification  

**If you have any questions:**  

For Front end: yj334@cornell.edu [Yan Jiang]  
For Back end: mz468@cornell.edu [Mengjiao(Molly) Zhu]  
For More Information: sio7@cornell.edu [Suzie-May I.A.M Ogunseitan]
