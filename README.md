# Refactoring to React Hooks - liveProject

> Base repo

The README contains the following main parts:

- Refactoring
- Deliverables
- Getting started
- Available Scripts
  - `npm start`
  - `npm test`
  - `npm build`
  - `npm run e2e`
- Deliverables

## Refactoring

The main target is to refactor the central part of the applications which fetches and displays the data using hooks. In this regards the following changes have been done:

- Add a global context which contains the data to be displayed, whether the data is being fetched (loading) and whether or not there is an error during the fetch operation or not
- Add a Provider in the top-level component **App** that wraps the **DashboardShell** component to provide the state to all the children components in the component hierarchy
- Add a custom **useFetch** hook that is responsible for fetching the data and/or returning the right state of the fetch operation (above-mentioned values provided from the global context)
- Refactor **DashboardShell** from class component to simple functional component
- Refactor **ChartContainer** to get the data it needs from the global context. Add logic to display the error, a loading indicator (**Loading** component),, or the data from the API
- Refactor **SummaryContainer** to use the data it needs from the global context. Add logic to display a loading indicator (**Loading** component) when sales and subscriptions total data are being loaded from the API
- Add logic, when in development mode, to stub the call to the different endpoints with _miragejs_
- Add e2e tests using the _Cypress_ framework
- Add unit tests using the React _Testing Library_

## Getting started

Install the dependencies with

```bash
npm ci
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.<br />
Your app is ready to be deployed!

### Deliverables

#### milestone1

The branch _milestone1_ represents the deliverables of the chapter **Managing Local State and Data Fetching with React Hooks**

#### milestone2

The branch _milestone2_ represents the deliverables of the chapter **Building a custom React Hook for Data Fetching**

#### milestone3

The branch _milestone3_ represents the deliverables of the chapter **Replacing Redux State with the React Context API**

#### milestone4

The branch _milestone4_ represents the deliverables of the chapter **Writing Tests for the Application, and More Refactoring**

#### milestone5

The branch _milestone5_ represents the deliverables of the chapter **Creating a Reusable Context Provider & Writing Unit Tests for the Application**
