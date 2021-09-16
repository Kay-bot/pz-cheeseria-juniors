# Welcome to Patient Zero's Cheeseria Coding Challenge (For Juniors)

## Comments:

# Known issues:

## Client

- No feedback to users when `AddToCardButton` is clicked.
- Items in Cart is not cleared when `Purchase` button is clicked.
- Fetched recent purchases data from the server will need to be restructured so that they can be used in components

## Server

- Created 2 endpoints for `POST /api/purchase` purchase requests, one is to simulate successful response only and the other is to write to MongoDB database. Currently, this endpoint is commented out. To implement this endpoint, User and proper authentication will need to be developed. To test this endpoint, MongoDB url string will need to be added to `constants.ts` in config folder and User will need to be created.

## Recommendation

- For production, project structure for `client` will need to be rearranged. Currently, states are management directly in App.tsx. For example, project folders should be categorized into screens, components, utils, actions etc. for different purposes.
- Should also implement `React-Router-Dom` for redirecting to other components when some actions have happened.
- Should also use some tools to manage states

## Not Done (yet)

UI automation unit test.

## Overview

Help us complete our Cheese shopping cart.<br />
So we can start selling cheese to the delight of our customers, we will need you to implement a few more desired features. As you can see, there is already some code to get you started. The backend server is using NodeJS and the frontend client is using ReactJS. See the **_Important Scripts_** section below to get you started.<br />
We recommend you fork this repository under your own username.

Once these features are completed, you will also make sure the functionality you implemented is covered by automated tests.

Following are the features you will need to complete

1. When clicking on a Cheese card, open a [Dialog](https://material-ui.com/components/dialogs/#dialog) that contains all the details of the card, including the item's **description**.

2. Add a **Purchase** button to the Cart (In the sliding view that opens when you click the 'Cart' button). Clicking on the **Purchase** button will send all items in the cart to the server (backend) and store them for later use (You are not required to use a Database in this exercise, but you may do so if you wish).

3. Show all recently purchased items when clicking on the "Recent Purchases" button on the top left of the page. You may choose to display those items in a Drawer, a Dialog or any other control you see fit. Note that the recent purchased items **must** be retrieved from the server.

4. Add a UI automation test that performs the Purchase action you implemented as part of Feature #2. For this test case you will add two separate items to the cart and click on the **Purchase** button you have added as part of Feature #2.
   For this exercise we will be using the Cypress.io tool-set. You will find code to get you started in the 'e2e' folder.
   **_Note: You are free to add any selectors to your client code which may be required by the e2e tests._**

Once done, please notify us of your repository details and make sure it is publicly accessible. As part of your assessment we will confirm that all features were implemented as instructed.

## Important Scripts

In the project directory, you can run:

### `npm install`

Installs package dependencies (node v14.15.0)

### `npm start`

Builds and runs the app in the development mode.\
The browser will be automatically launched under [http://localhost:9000](http://localhost:9000).
The server backend will start listening on [http://localhost:3000](http://localhost:3000)

### Cypress.io

You will open the e2e folder, then run following commands to get started

```bash
npm install
npm test
```

### Helpful links

[React Material UI](https://material-ui.com/getting-started/usage/)
