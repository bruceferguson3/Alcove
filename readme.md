# Alcove

Tired of trudging through self-storage facilities, searching for _your_ storage unit?  Don't need 100 cubic feet to store your duffle bag full of baseball cards?  Have a warehouse on your property that you're looking to fill?  Alcove is your alternative storage solution.   

Alcove connects users with available storage space and users with items to store.  Users are able to search for both items and spaces within their zip codes and can filter listings by their needs and preferences.  Looking for an indoor, climate-controlled, closet-sized space to which only you have access?  You've got it!  Once you've selected the item or space you're interested in, Alcove allows you to reach out directly to the person who posted the listing.  Alcove also prioritizes intuitive form design so users can quickly and easily advertise their own items or spaces.

## Alcove In Action

[ INSERT GIFS HERE ]

## User Stories
* As a user, I want to easily find space to store my items or items to store in my space within a designated geographic location.
* As a user, I want to see a compelling call to action.
* As a user, I want to be able to search spaces and items within a set price range.
* As a user, I want to be able to filter my search results in order to meet my storage needs:
  + Storage time
  + Size of space or item
  + Security
  + How frequently I need to access the space
  + Whether or not I require climate control
  + Whether or not I need exclusive access to the space or am willing to share the space with others
* As a user, I want to update my search criteria without losing access to my applied filters.
* As a user, I want to access an individual listing from the results page to retrieve more information about an item or space.
* As a user, I want to see the location of the item or space dynamically rendered on a map.
* As a user, I want to contact the owner of the item or space directly from the application.
* As a user, I want to post listings for items or spaces.
* As a user, I want to interact with a form that asks for necessary information in a meaningful and logical way.
* As a user, I want to minimize typing effort when posting my listing.
* As a user, I want confirmation that I have successfully completed the form and that my post will render correctly.
* As a user, I want to search or post listings from multiple access points throughout the application.
* As a user, I want a simple, clean UI.

## Stack
| Front-End | Back-End | Deployment | APIs | Testing |
| ----- |:-----:| :-----:| :-----: | :-----: |
| ![alt text](https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/react.png "React") | ![alt text](https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/nodejs.png "Node.js") | ![alt text](https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/docker.png "Docker") | ![alt text](https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/rapid-api.png "RapidAPI") | ![alt text](https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/cypress.png "Cypress")|
| ![alt text](https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/react-router.png "React-Router")   | ![alt text](https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/expressjs.png "Express")      |   ![alt text](https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/elastic-beanstalk.png "AWS Elastic Beanstalk") |![alt text](https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/google-maps.png "Google Maps")
| ![alt text](https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/react-bootstrap.jpg "React-Bootstrap") | ![alt text](https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/mongodb.png "MongoDB") |
||![alt text](https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/mongoose.png "Mongoose") |
### Front-End
We employed a combination of React-Bootstrap and custom-built components and styling in order to best support the concepts outlined in our [wireframes](https://www.figma.com/file/oPlN0A0VpoUCKzjDIoo33W/Alcove?node-id=0%3A1).  We managed routes and user flow with React-Router.
### Back-End
### Deployment
### APIs
To support user searches by location, we used RapidAPI's RedLine Zip Code API because it allowed us to quickly and easily generate a latitude and longitude to plug into the Google Maps Platform geolocation API.  Google Maps supports marking map locations by radius proximity without pinning exact locations, which helps protect posters' privacy.  Finally, RedLine Zip Code API can be used to find all zip codes within a designated radius (e.g., 5, 10, 25 miles) from a given location.
### Testing
[ Insert Mark's GIF here ]

## Work Flow

## Coming Soon
* Mobile-first responsive design to better allow users to access Alcove on the go
* Authentication to allow users to review and save listings
* Search features allowing users to search by city

## Getting Started
To run Alcove in your localhost:
* Register to use [Google Maps Platform](https://developers.google.com/maps/documentation/javascript/get-api-key) geolocation API
* Register to use [RapidAPI RedLine Zip Code](https://rapidapi.com/redline/api/redline-zipcode/) API

From the terminal in the index directory:
```
npm install
npm run react-dev
npm run server-dev
```

To view the deployed application:
* Visit [alcove.us-east-2.elasticbeanstalk.com/](alcove.us-east-2.elasticbeanstalk.com/).

## Contributors
[Tom Chandler](https://github.com/tmchandler), [Jonathan Diaz](https://github.com/JCDiaz1201), [Bruce Ferguson](https://github.com/bruceferguson3), [Mark Fuechec](https://github.com/mfuechec), [Natalia Malesa](https://github.com/nmalesa), [Kytra Murphree](https://github.com/KytraScript), [Tim Sanderson](https://github.com/timsand), [Ish Tahir](https://github.com/ishtahir)
