Thing’s I’ve done:
- Copied all the content from the public pages and translated them into Angular 2., all the content is in the typescript files.
-Created a slide show on the home page with various FJC centers, I’ve only added 3 images for 3 locations, the other images were low quality.
-Created an escape button that directs the user to a new tab and redirects the old page to google
-Built components for each Family Justice center, and routed them so that they’re only accessible through the tour page.
-The FAQ page is now a list of questions (buttons), so that when you click on a question, it reveals hidden answers
-deployed the website on Amazon Web service, http://ocdvportal.nyc The AWS account used for this was Tom's active directory group. 
-Changes to the live site are being done through git.


Things that haven’t been done:

-Attach links to FJC centers, when you click on the time images on homepage slideshow 
-Improve escape button, have it redirect to multiple pages, so that it would take more than 10 clicks to go backwards.
-Each Family justice center has its own page, but lacks content
-When you click on FAQ questions, add a scroll effect to the text box answer.
-Pop-up box when you first enter the page, to highlight the escape key and it’s purpose and how to use it
-Tech safety tips page, the links available shouldn't be to other websites, instead we should have local links on the website with further information


Mistakes I’ve made:

-Treated Angular 1 and 2 as one and the same. This application is coded with Angular 2.



How to access web server:

-From your command line, paste this:

	ssh -i "~/.ssh/ocdv.pem" ubuntu@ec2-13-59-78-136.us-east-2.compute.amazonaws.com

-Once you’re virtually logged into the server
-the web-app folder is directly accessible and from there just update
-I used my git repo to push live changes




ECSAPE KEY 
Panic button ideas:

	- have the button along the side of the page, and when clicked the words on the 	  page change

//here’s some example websites with the Escape key

http://www.pcadv.org/Computer-Tips/Safety/
Pro: 
you CANT go back, sometimes it doesn't work


https://www.victimsupport.org.uk/covering-your-tracks-online
Pro:
the button is places alongside the scroll bar
(has good content)

Con: 
button is too small 
history is still there
button is on the right side so its hard to click escape, while the scroll bar is visible

https://www.valdostahaven.org/
Pro:
disclosure as soon you as launch site
explains the escape button and its purpose

