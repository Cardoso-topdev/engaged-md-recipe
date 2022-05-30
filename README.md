# EngagedMD Recipe Description

> - Created a React project and setup TypeScript engine.
> - Installed Mui node module and set the theme configuration.
> - Structured the whole project with layouts, pages, components, types and so on.
> - Created a mock server by using json-server node module and prepared a mock recipe data list on mock/db.json file.
> - Made a APIs and callAPI services for CRUD operations.
> - Setup redux flow to the project for managing application states.
> - Write and load the state value to the localstorage for keeping the application state even the application refreshed.
> - Display recipe data from the mock server on in to the MUI table. Created a RecipeTable component made it as a re-usable component. Using it on both Home and Favorite page.
> - Created RecipeDetail page and displaying detail data on Card view.

## Things to be done (didn't implement these things due to the time limit)

> - tests : I can integrated Unit test with Jest, e2e test with Cypress, and test React advanced functions such as hooks with React test library. 
> - Integrate Create, update, and delete function for recipes. In the project, I created get, post, put, delete APIs for CRUD operation on the `src/service/http-client.ts` file. So, I can use post API for create the recipe, put API for update the recipe information, and delete API for delete a recipe. When creating and updating a recipe, I can integrate validation on the input elements of the form. For example input data types(string, number, email and so on), and length.
> - Displaying Date and time as formatted string: I can convert the date and time string into Date.`new Date('2009-06-15T13:45:30')` and format is with format patterns. For example `format('YYYY-MM-DD')`

## Launch Script
#### Start up mockup server
This script will launch mock server with 3000 port
> npm run mock <br />

#### Start up the project
This script will launch the project with 3001 port
> npm run start <br />

#### Other scripts
> npm run preinstall <br />
> npm run build <br />
> npm run test <br />
> npm run eject <br />
