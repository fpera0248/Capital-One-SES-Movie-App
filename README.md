# Capital One Software Engineering Summit Movie App Submission

## What is this?

This is my application to the Capital One Software Engineering Summit.

I was tasked with completing a coding challenge which involved implemeting the OMDb API to retrieve movie details like release date, director, awards, etc. I had to create a webapp that can surface movie information using the OMDb open database API.  

It allows the user to search for movie titles and view different statistics including Runtime, Director Name and Year Released. The user can filter by year the movie came out and view multiple pages of results by pressing the "Show More" button at the bottom of the page. 

View the project: https://fperalta-ses-movie-app.netlify.app/

## Walkthrough

https://user-images.githubusercontent.com/73323113/122685741-458f6300-d1db-11eb-8fc9-c06f6dfafcab.mp4


https://user-images.githubusercontent.com/73323113/122685772-71aae400-d1db-11eb-9c5c-3a5991a24b48.mp4


https://user-images.githubusercontent.com/73323113/122685790-9901b100-d1db-11eb-9320-70308f15e078.mp4


https://user-images.githubusercontent.com/73323113/122685802-b767ac80-d1db-11eb-9645-299e00fe79b1.mp4


https://user-images.githubusercontent.com/73323113/122686485-3ad6cd00-d1df-11eb-93b5-b8a1602c2370.mp4

## Mobile Screenshots

![ResizerImage300X500 4](https://user-images.githubusercontent.com/73323113/122702732-ffa7be80-d21d-11eb-87cd-19d21e2e61c0.jpg) ![ResizerImage300X500 5](https://user-images.githubusercontent.com/73323113/122702734-01718200-d21e-11eb-9719-477c3d0dd071.jpg)
![ResizerImage300X500 3](https://user-images.githubusercontent.com/73323113/122702730-fdddfb00-d21d-11eb-94d4-e6bec95e0e17.jpg)
![ResizerImage300X500 2](https://user-images.githubusercontent.com/73323113/122702726-fb7ba100-d21d-11eb-84a3-c0190d61c2ad.jpg)
![ResizerImage300X500](https://user-images.githubusercontent.com/73323113/122702710-f4ed2980-d21d-11eb-8134-c2b1628bf874.jpg)
![ResizerImage300X500 1](https://user-images.githubusercontent.com/73323113/122702720-f74f8380-d21d-11eb-8d55-12023892a4a6.jpg)




## Technologies Used

[OMDb API](https://www.omdbapi.com/) to return movie values and details 

[React](https://reactjs.org/) for building the webapp user interface

## Challenges I Faced

1. Initally I tried created the movie app using HTML, CSS and Vanilla Javascript. I got stuck when trying to fetch multiple API pages so I thought to switch to React. I haven't developed an application that was being published before this app so it was interesting using React to develop this Movie Web App.  

2. I struggled to effectively resize the Poster for the movie details due to the varying sizes of the Movie Posters. The mobile version does a good job at rendering these posters effectively, but the web app does have some issues resizing the images when the brwoser is resized. 

3. After switching to React, I found a way to loop the API calls with the pagination aspect of the app and allow the user to view more than 10 movie titles at once. The OMDb API only allows 10 titles to be rendered at once so this feature was a necessary part of the app. I did this by connecting the API call loop to the pagination aspect of the app. 

4. I continued to work towards allowing the app to accept multiple API calls and allowed the app to accept empty values by returning a message that says "Movie Not Found" and accepting empty posters by returning an image that states "Poster Not Available". Inside of the Movie Details, it also accepts empty values for the details such as the Runtime and Genre. If these data fields are not available for a specific movie, it will return a text like this.

Genre: N/A

Runtime: N/A

5. I couldn't figure out how to implement search suggestions or allow the user to go back to a previously searched page because of the API calling. 

6. I only learned how to commit to Github 2 days before this app was due but I eventually learned how to commit from VS Code and how to create an interactive ReadMe file with videos and hyperlinks (Yay to success!!). 



## Accomplishments

I tried to bring forth a quality user experience in hopes of helping to keep the users intrigued when searching for different movies and accept all empty values to prevent a bad user expereince or an error screen.

I struggled using React to build this application but I found that building a web application from ground up and making it work efficiently is a very rewarding feeling. This was also my first time using an API, so it was a very interesting experience as well. 

I also was exposed to React JavaScript and learned about API calls and information rendering.

Learned how to use Github effectively for version control. 
