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

![2DCE24A7-1CF3-4D38-B856-92408A8708E3](https://user-images.githubusercontent.com/73323113/122702139-bc991b80-d21c-11eb-9a8d-449fe9de9895.PNG)

![79C2C03D-6333-4209-A818-825994E551C7](https://user-images.githubusercontent.com/73323113/122702170-cfabeb80-d21c-11eb-82bb-65f6e9198fc1.PNG)

![0796C51A-0518-4B5F-81A4-D8649D5F5853](https://user-images.githubusercontent.com/73323113/122702187-d89cbd00-d21c-11eb-91c4-7ba6b88adaa1.PNG)

![826C85C0-962F-4BAF-9F69-D9ED1909C3F2](https://user-images.githubusercontent.com/73323113/122702199-ddfa0780-d21c-11eb-979a-d509cbc42ac7.PNG)

![6038DC45-5B09-4BB7-B6B9-7BC5EE9A319B](https://user-images.githubusercontent.com/73323113/122702222-e9e5c980-d21c-11eb-826c-ec7c9bfb4a66.PNG)

![AA13242E-EA32-406A-B918-CF0177C940A3](https://user-images.githubusercontent.com/73323113/122702246-f1a56e00-d21c-11eb-952f-df35701d0de0.PNG)

![ResizerImage500X700](https://user-images.githubusercontent.com/73323113/122702357-3a5d2700-d21d-11eb-9d3c-efef7f0c852b.jpg)

![ResizerImage500X700](https://user-images.githubusercontent.com/73323113/122702357-3a5d2700-d21d-11eb-9d3c-efef7f0c852b.jpg)


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
