# Discover & Learn Game of Thrones 

A React & Redux based app for listing Game of Thrones' books, characters, and houses! Provides a clean UI and easy navigation for GOT fans to view this 3-way documentation surrounding the show & book. 

## Visual Demo

![Visual Demo Gif](https://dummyimage.com/600x400/000/fff)

## Features of the app:

- Shows a list of paginated books, characters, and houses. Further requests are made to fetch more content for every new page.
- Memoization of pages so that network requests for previously visited pages are not made but shown a cached version
- Redux is used with React in order to maintain a central `store` using the `react-redux` dependency
- Asynchronous API calls are made to `https://www.anapioficeandfire.com/api` to fetch the data. For this purpose, the `redux-thunk` middlware is used for the `redux` store
- In order to make the requests themselves, `axios` package is being used (instead of `fetch`)
- Routing is used to navigate to a specific book with an `id`. Similar routes for a character and a house exist
- The UI has been implemented with the help of [`spectre`](https://picturepan2.github.io/spectre/) CSS library
- Handles user interactions such as viewing a book, character, or house

## Routes:

- `/` - Home page display a few books/characters/houses
- `/books/:id` - Details of a specific book
- `/characters/:id` - Details of specific character
- `houses/:id` - Details of a specific house

## Components (Custom):

- `App`: The main component of our app
- `Description`: A simple function component used to introduce this App and Game of Thrones to the viewer
- `Books`: Responsible for managing the widget displaying the list of books
- `Characters`: Responsible for managing the widget displaying the list of characters
- `Houses`: Responsible for managing the widget displaying the list of houses
- `Loader`: A component acting as a placeholder widget for another component that waits to load its actual content
- `BookDetails`: Information on a book
- `CharacterDetails`: Information on a character
- `HouseDetails`: Information on a book

## Authors:

- **Pushkar DK**  [@pushkar100](https://github.com/pushkar100)

## App Link:

[Link to Demo](http://www.pushakrdk.com/game-of-thrones)