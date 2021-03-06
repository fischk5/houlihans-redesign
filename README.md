# houlihans-redesign
Unofficial redesign of Houlihans website as a personal project

This web application project was built to improve upon www.houlihans.com website as a personal project.

I love eating there, so I figured I'd make improvements to their website for a portfolio project.

I started with a few goals in mind: make it fast, give the user what they need easily, and scrape any unnecessary noise from the site to
help accomplish said goals.

To make the interface snappy, I made the site as a single page application with AngularJS.  Since restaurant specials and information
is not very cumbersome at this level, I wrote the data as a JSON directly into the code.  I did this mostly for simplicity, but a real
life scenario might fetch the data asynchronously from a server upon user arrival at the site.  I didn't minify the code or shrink the
size of the pictures to improve load times, which is not the recommended approach to designing fast applications.  Under real circumstances
I would have incorporated this change and also utilized HTML5 elements that assist in choosing the correct sized picture for the context.

Each restaurant location has different hours and active specials/happy hours, so I couldn't display the information directly on the main
page.  Instead, the user must find the location they wish to learn about first, so I tried to make that easy, intuitive, and fast.  To
 that end, I present the user with an attractive splash image with a Houlihan's trendy catchphrase to invite the user to the experience.

![home](https://user-images.githubusercontent.com/28768183/29048475-68170ea4-7b96-11e7-869b-b7bdae623d35.PNG)
 
 The user can scroll down to find a location search input for zip code, or farther down to find the full list of restaurant locations. 
 ![homezipsearch](https://user-images.githubusercontent.com/28768183/29048510-a5490ed0-7b96-11e7-9447-c9d846136d73.PNG)
 ![homelocsearch](https://user-images.githubusercontent.com/28768183/29048518-aede025c-7b96-11e7-9332-904cf7b5e2ff.PNG)
 
 While
 testing this interface with several people, they did not all scroll down naturally, so I linked the location list in the header of the 
 website where many people look first.
 
 After selecting a location, the user is brought to that store's information.  The first information seen is a "card" with the location's
 address and hours (information the user likely came to the website to retrieve).  Embedded in the page is a google map showing the location
 of the restaurant (the API call will fail until a proper API key is added to app.js... the version of this application on github was changed
 to protect my API key).  On mobile, the embedded map is smaller but would allow direct linking to any mapping application existent on the
 users phone.
 
 ![storeloc](https://user-images.githubusercontent.com/28768183/29048530-c6c99fa2-7b96-11e7-951c-d90eed71d6ae.PNG)
 
 Scrolling down the user will find the menu, several featured menu items in pictures, and a reservation form at the bottom.  
 
 ![storemenu](https://user-images.githubusercontent.com/28768183/29048536-d3e3f2b4-7b96-11e7-98ac-89f032a46cac.PNG)
 
 There is no code
 to support the form in this application, but a backend could be created for the reservation form to complete the feature.
 
 ![storereserve](https://user-images.githubusercontent.com/28768183/29048543-e16f3dee-7b96-11e7-9f7e-e912223895b0.PNG)
 
 The footer at the bottom has links to Houlihan's social media sites, and they are included in this application as icon fonts to increase
 load time and allow great flexibility in their display.
 
 A user would likely need this web application in a mobile context since most information is retrieved in this format.  To accomodate that,
 the application was written with a mobile-first design.  The CSS breakpoints add flexbox functionality and full-screen support, while the
 primary CSS was written and tested for small screens using standard practices like vertical lists and hamburger menus.
 
 ![mloc](https://user-images.githubusercontent.com/28768183/29048951-f7d555a8-7b98-11e7-83cf-c5fddbab93ea.PNG) ![mmenu](https://user-images.githubusercontent.com/28768183/29048958-03fb5350-7b99-11e7-997f-3781b064d507.PNG) 
 
 ![mstore](https://user-images.githubusercontent.com/28768183/29048967-110690a0-7b99-11e7-89db-143b3984d21c.PNG)

 
 This SPA is faster than the www.houlihans.com website, and was reported more intuitive to retrieve the information users wanted
 during testing.  The application does not currently support all the features of the existing website, but does accomplish the aforementioned
 goals and incorporates several front-end technologies I want to hightlight on my portfolio.
