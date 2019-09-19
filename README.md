# Forum App
React/Redux fullstack application deployed on Heroku https://lit-ocean-46169.herokuapp.com/.

## Technology stack
To configure the syntax highlighting in React is used **ESLint** with several extra plugins. **Webpack** was used to compile JavaScript modules and **Sass** preprocessor files. Webpack has been configured with **Babel** that is used to convert ES6+ code into including a polyfill that includes a custom regenerator runtime and core-js. **Bootstrap** framework provides JavaScript-based design templates with responsive design. **jQuery** is used to customize JavaScript plugins of Bootstrap.

A cross-platform document-oriented database **Mongo** is used to save the data. MongoDB is an open-source document database. It uses JSON-like documents. **Mongoose** was also used to translate between objects in code and the representation of those objects in MongoDB.

**ReactJS** was used as a base in the development of this single page Forum application. It is a UI library for building UI components. As a state container for React was predictably chosen **Redux** state container with react-redux official binding. From the Redux ecosystem of tools and extensions the following tools were taken:
- **Thunk** middleware for Redux that extends the store's abilities and helps write async logic that interacts with the store.
- **Redux Form** library to manage your form state in Redux.

**Express** application framework is used for building backend APIs to parses incoming requests with JSON payloads and is based on **body-parser** and **cookie-parser**. Server side authorization was made using **JSON Web Tokens**. It means that once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with authentication token. Also **bcrypt** password hashing function is used to securely store passwords in the database.

## API Endpoint
List of available API, e.g. https://lit-ocean-46169.herokuapp.com/api/test
```
/api/test
/api/auth
/api/register (method POST)
/api/login (method POST)
/api/logout (method DELETE)
```
