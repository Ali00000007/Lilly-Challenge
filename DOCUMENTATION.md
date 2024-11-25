# Lilly Technical Challenge Documentation Template

*This documentation template serves as a place for you to discuss how you approached this challenge, any issues you faced & how you overcame them, or any other points that you feel would be relevant for the interviewers to know. The text in italics is here to guide you - feel free to remove it once you fill out each section!*

***Not every section in this document is required. This is just a template to help get you started. Feel free to add or remove sections as you feel necessary.***

## Approach
*How did you approach this challenge? Did you work through the objectives in any particular order? If so, why? Did you utilize any external resources, such as tutorials, guides, or other materials?*

So firstly I had to learn how to use fastapi as this was my first time working with it.
I watched a tutorial on youtube to help me get started.
I then created the html page. 
next I made it functinal using javascript
Then I ran into various issues like 404 not found errors
But I fixed thise by changing the path to the file, I'm not sure why the given one wasn't working
I also had to add lines 35 and 36 which I found from online resources. These lines ensure that the files are accessible

## Objectives - Innovative Solutions
*For the challenge objectives, did you do anything in a particular way that you want to discuss? Is there anything you're particularly proud of that you want to highlight? Did you attempt some objectives multiple times, or go back and re-write particular sections of code? If so, why? Use this space to document any key points you'd like to tell us about.*

## Problems Faced
*Use this space to document and discuss any issues you faced while undertaking this challenge and how you solved them. We recommend doing this proactively as you experience and resolve the issues - make sure you don't forget! (Screenshots are helpful, though not required)*.

the main page not displaying error 404
script.js file not found - I had to change the path to the file and also i had to add all_meds_path = os.path.join(os.getcwd(), 'backend', 'data.json') and use that as the file path because my other attempts and the default way it was in the main.py file did not work.
could not display error when i enter the url to a specific medicine file - this error was solved as a result of fixing the previous error
I also had to change the host from the default to 127.0.0.1 as the default was not working


## Evaluation
*How did you feel about the challenge overall? Did some parts go better than others? Did you run out of time? If you were to do this again, and were given more time, what would you do differently?*

Yes I did run out of time
I managed to get all the medicines to display, but did not get further than that as this was my first time doing work with apis so this was quite a challenge for me.
After having some understanding of how apis work and how data is sent and requested between the frontend and backend, I think that I would find it easier if I was to do this again
