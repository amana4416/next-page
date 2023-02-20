![REPO SIZE](https://img.shields.io/github/repo-size/amana4416/next-page?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/amana4416/next-page?style=flat-square)
![FORKS](https://img.shields.io/github/forks/amana4416/next-page?style=social)

# next page

_Duration: Two Week Sprint_

next page is platform intended for book lovers to catalog their reading history. In addition to keeping track of their books, avid book readers are able to leave behind notes of why they loved (or didn't) a book! There's no pressure of leaving 'reviews' and brings the fun back to reading!

This project was built in its entirety over the course of two weeks as a part of [Prime Digital Academy's](https://www.primeacademy.io/) 20 week curriculum.

![](/screenshots/landingPage.png)


## Approach

With this being such a large project, I spent a lot of time planning and scoping out the project. I also created a timeline to help keep the project on track to ensure the project was completed on time.

##### Wireframes
  ![](/screenshots/wireframes.png)

This is the scope document I used to plan the project. It includes the wireframes and a thorough explaination for everything I planned to include in the app. The scope document also contains the relevant ERD to show how my database tables interacted with one another.

[Scope Document](https://docs.google.com/document/d/1TeztMIiLEzr1JKE4ekXWQjYoibFOr9lYvYR3El51GaM/edit?usp=sharing)


## Screen Shots
![](/screenshots/homePage.png)

All screenshots available in [screenshots](https://github.com/amana4416/next-page/tree/main/screenshots)


## Getting Started

### Prerequisites

* Keys for New York Times Books & Google Books API's
* React.js *(built on version 17.0.2)*
* Node.js
* Redux
* Redux-Saga
* DotEnv
* Axios
* Express
* Body-Parser
* 'PG'
* PostgreSQL
* Material.UI

### Installation
1. Clone this repository for your own access.
2. Open up your editor of choice and run an `npm install` to install dependencies.
3. Create a `.env` file at the root of the project and paste this line into the file: `SERVER_SESSION_SECRET=superDuperSecret`
4. Using the provided 'database.sql' file - set up a database with the name `next-page`
5. Open two Terminal Tabs
6. Run `npm run server`  and `npm run client`in your terminal
7. Navigate to http://localhost:3000/

## Built With
*  [React.js](http://www.dropwizard.io/1.0.2/docs/)
*  [Material-UI](https://mui.com/core/) - styling
*  [New York Times Books API](https://developer.nytimes.com/apis) - Used to display the current week's best sellers list for hardcover fiction books.
*  [Google Books API](https://developers.google.com/books) - Used for the ability to perform full text searches and retrieve book information.


## Usage

This web app was created with book enthusiasts in mind. With reading so many books, it's nice to look back to see what books you have completed, and keep track of the ever growing TBR!

As of right now, users are able to able to:
1. See this week's top 15 NYT best sellers.
  - Users are able to read the book description and other important information such as the author
2. Perform a search to look up books.
  - The Google Books API provides access to all the important information such as author and the book description.
3. Users are able to add books (from the best seller's list or books they have searched) to one of 3 bookshelves:
  - Want to Read
  - Currently Reading
  - Finished Reading
4. On the profile page, users are able to see the last 6 books in each bookshelf.
5. A bookshelf can be 'opened' by clicking on it and all its books can be viewed.
6. From the the open bookshelf, users may click on a book to open a details view.
7. This details view gives users access to book information such as the title, author, and description. Users are also able to move a book to another bookshelf at this time to update reading status.


## Developer Notes

As I continue to work on this project, I hope to expand it into a social media platform about books. The first step to this is allowing users to follow each other, or 'add friends'. In addition, this also means allowing users to personalize their own profiles.


## Acknowledgments
* Thanks to [Prime Digital Academy](https://www.primeacademy.io/) who equipped and helped me to make this application a reality.
* Thanks to [New Yorks Times](https://developer.nytimes.com/apis) for supplying the API key to their Books API. The NYT updates their best sellers every Wednesday, allowing users on the next page app to see the updated list.
* Thanks to [Google](https://developers.google.com/books) for providing the key to their books API. This API enabled the search feature, allowing users access to millions of books.

