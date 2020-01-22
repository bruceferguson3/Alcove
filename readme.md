# Alcove

Tired of trudging through self-storage facilities, searching for _your_ storage unit?  Don't need 100 cubic feet to store your duffle bag full of baseball cards?  Have a warehouse on your property that you're looking to fill?  Alcove is your alternative storage solution.   

Alcove connects users with available storage space and users with items to store.  Users are able to search for both items and spaces within their zip codes and can filter listings by their needs and preferences.  Looking for an indoor, climate-controlled, closet-sized space to which only you have access?  You've got it!  Once you've selected the item or space you're interested in, Alcove allows you to reach out directly to the person who posted the listing.  Alcove also prioritizes intuitive form design so users can quickly and easily advertise their own items or spaces.

## Alcove In Action

[ INSERT GIFS HERE ]

## User Stories
* Easily find a space to store items or items to store in a space within a designated geographic location
* See a compelling call to action
* Search spaces and items within a set price range
* Filter search results in order to meet storage needs:
  + Storage time
  + Size of space or item
  + Security
  + How frequently the user needs to access the space
  + Whether or not the users requires climate control
  + Whether or not the user needs exclusive access to the space or is willing to share the space with others
* Update search criteria without losing access to applied filters
* Access an individual listing from the results page to retrieve more information about an item or space
* See the location of the item or space dynamically rendered on a map
* Contact the owner of the item or space directly from the application
* Post listings for items or spaces
* Interact with a form that asks for necessary information in a meaningful and logical way
* Minimize typing effort when posting a listing
* Confirmation that a form has been successfully completed and that posts will render correctly
* Search or post listings from multiple access points throughout the application
* Simple, clean UI

## Stack
<table style="width:60%">
  <tr>
    <th>Front-End</th>
    <th>Back-End</th>
    <th>Deployment</th>
    <th>APIs</th>
    <th>Testing</th>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/react.png" alt="React"></td>
    <td><img src="https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/nodejs.png" alt="Node.js"></td>
    <td><img src="https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/docker.png" alt="Docker"></td>
    <td><img src="https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/rapid-api.png" alt="RapidAPI"></td>
    <td><img src="https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/cypress.png" alt="Cypress"></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/react-router.png" alt="React-Router"></td>
    <td><img src="https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/expressjs.png" alt="Express"></td>
    <td><img src="https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/elastic-beanstalk.png" alt="AWS Elastic Beanstalk"></td>
    <td><img src="https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/google-maps.png" alt="Google Maps"></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/react-bootstrap.jpg" alt="React-Bootstrap"></td>
    <td><img src="https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/mongodb.png" alt="MongoDB"></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/hratx-blue-ocean/Alcove/master/client/dist/assets/stack_images/mongoose.png" alt="Mongoose"</td>
    <td>Nodemailer Placeholder</td>
  </tr>
</table>

### Front-End
We employed a combination of React-Bootstrap and custom-built components and styling in order to best support the concepts outlined in our [wireframes](https://www.figma.com/file/oPlN0A0VpoUCKzjDIoo33W/Alcove?node-id=0%3A1).  We managed routes and user flow with React-Router.
### Back-End
We used MongoDB because it is easy to scale with a flexible schema.  MongoDB allows for “projection”, which returns only important parts of the stored document and makes it simple to cover several functionalities of the application without recreating documents or separating data into smaller documents.  Utilizing MongoDB’s “text-relevancy meta-score,” we were able to provide search functionality in relation to the description of an item and return results that are closely aligned with the user's search criteria.  We used Nodemailer to send e-mails from the listing page contact form via the server.
### Deployment
We created two single-container Docker images (i.e., front-end and back-end) and deployed on AWS Elastic Beanstalk.
### APIs
To support user searches by location, we used RapidAPI's RedLine Zip Code API because it allowed us to quickly and easily generate a latitude and longitude to plug into the Google Maps Platform geolocation API.  Google Maps supports marking map locations by radius proximity without pinning exact locations, which helps protect posters' privacy.  Finally, RedLine Zip Code API can be used to find all zip codes within a designated radius (e.g., 5, 10, 25 miles) from a given location.
### Testing
We implemented Cypress as our testing suite because it provided all tests needed to meet our user stories.  We tested the user's ability to navigate through the site, search by zip code, filter search results, view results, and navigate forms.  Testing also checked that our input fields were validating correctly.  Additionally, Cypress has excellent documentation.

[ Insert Mark's GIF here ]

## Work Flow
We managed this project using git feature branch workflow.  Each feature was associated with a development branch, which were merged into the master branch as features were completed.  Each pull request was associated with a ticket and reviewed by another developer before being merged.  We also pair programmed on most features.

To help our team adhere to agile principles, we utilized a [Trello ticketing board](https://trello.com/b/fhb0HIhp/alcove) following kanban methodology, prioritizing continuous improvement and flexible processes.

## Getting Started
To run Alcove in your localhost:
* Register to use [Google Maps Platform](https://developers.google.com/maps/documentation/javascript/get-api-key) geolocation API
 + Add environmental variable for Google Maps API key to [CONFIG? ENV?] file in [ROOT DIRECTORY? CLIENT DIRECTORY?]
* Register to use [RapidAPI RedLine Zip Code](https://rapidapi.com/redline/api/redline-zipcode/) API
 + [ IS THERE A SECRET PLACE FOR THE ZIP CODE API KEY?]
* Add username and password for MongoDB to [SECRET CONFIG FILE?]

From the terminal in the index directory:
```
npm install
npm run react-dev
npm run server-dev
```

To view the deployed application:
* Visit [alcove.us-east-2.elasticbeanstalk.com/](alcove.us-east-2.elasticbeanstalk.com/).

## Contributors
[Tom Chandler](https://github.com/tmchandler) (Architecture Owner), [Jonathan Diaz](https://github.com/JCDiaz1201), [Bruce Ferguson](https://github.com/bruceferguson3), [Mark Fuechec](https://github.com/mfuechec), [Natalia Malesa](https://github.com/nmalesa) (Product Manager), [Kytra Murphree](https://github.com/KytraScript), [Tim Sanderson](https://github.com/timsand), [Ish Tahir](https://github.com/ishtahir) (UI Owner)
