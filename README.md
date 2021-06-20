# Capital One Software Engineering Summit

## What is this?

This is my application to the Capital One Software Engineering Summit.

I was tasked with completing a coding challenge which involved implemeting the OMDb API to retrieve movie details like release date, director, awards, etc. I had to create a webapp that can surface movie information using the OMDb open database API.  

It allows the user to search for movie titles and view different statistics including Runtime, Director Name and Year Released. The user can filter by year the movie came out and view multiple pages of results by pressing the "Show More" button at the bottom of the page. 

View the project: https://fperalta-ses-movie-app.netlify.app/


## Technologies Used

[OMDb API](https://www.omdbapi.com/) to return movie values and details 
[React](https://reactjs.org/) for building the webapp user interface


## Challenges I Faced

Initally I tried created the movie app using HTML, CSS and Vanilla Javascript. I got stuck when trying to fetch multiple API pages so I thought to switch to React. I haven't developed an application that was being published before this app so it was interesting using React to develop this Movie Web App.  

Has a search function specifically for movie titles that results in an intuitive, responsive, mobile friendly, interface. I struggled to effectively resize the Poster for the movie details due to the varying sizes of the Movie Posters. The mobile version does a good job at rendering these posters effectively, but the web app does have some issues resizing the images when the brwoser is resized. 

After switching to React, I found a way to loop the API calls with the pagination aspect of the app and allow the user to view more than 10 movie titles at once. The OMDb API only allows 10 titles to be rendered at once so this feature was a necessary part of the app. I did this by connecting the API call loop to the pagination aspect of the app. 

I continued to work towards allowing the app to accept multpile API calls and allowed the app to accept empty vaues by returning a message that says "Movie Not Found" and accepting empty poster by returning an image that states "Poster Not Available". Inside of the Movie Details, it also accepts empty values for the details such as the Runtime and Genre. If these data fields are not available for a specific movie, it will return a tecxt like this.

Genre: N/A
Runtime: N/A

## Accomplishments

I tried to bring forth a quality user experience in hopes of helping to keep the users intrigued when searching for different movies and accept all empty values to prevent a bad user expereince or an error screen.

I struggled using React to build this application but I found that building a web application from ground up and making it work efficiently is a very rewarding feeling. This was also my first time using an API, so it was a very interesting experience as well. 

I also was exposed to React JavaScript and learned about API calls and information rendering.
