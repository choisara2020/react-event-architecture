# About Project

I decided to create a sample project in which we are going to enter contacts details and save it in a component state.

It has two components(nothing fancy) i.e. `Home` and `Form`. These two components interact with each other via `EventBus`. Thus it allows us to keep them loosely coupled with each other.

First of all create a new folder with the name of `components` inside `src` folder then create two more folders i.e. `Home` and `Form`. Inside `Home` create `Home.js` file and inside `Form` folder create `Form.js` file.
In this component, I am simply creating an HTML form with `name`, `email` and `Number` fields and when user clicks on `save` button the it calls `save` function. I will implement this function a little later in this article.

Now open `Home.js` file
As you can see it is also a very simple component for now. I am importing `useEffect` and `useState` hooks. Then inside component, I am creating a local state variable `contacts`. Inside JSX, I am checking if there are any contacts in local state variable `contacts` if there are nothing show a message `No contacts found`.

Now open `App.js` file
Here I am importing both `Home` and `Form` components and rendering them inside App component.

Now that we are done with the basic stuff, it is time to get into `EventBus` which is the gest of this article. Create `EventBus` folder inside `src` folder and create a file inside that folder with the name of `EventBus.js`.
As you can see, I am exporting an `EventBus` function and inside this function I am declaring `eventLists` map. Then I am returning anonymous function and inside that I have three functions i.e. `dispatch`, `listen` and `destroy`.

`dispatch` function is used to trigger an event and `listen` function is used to listen to the event that is triggered via `dispatch event. The destroy function simply gets rid of the event.

Now that we have the `EventBus` layer setup. It is time to use it. Lets open `App.js` file and update your code

Lines number 3 and 5 and new lines added to this file. I am importing `EventBus` and the adding `Events` property to global scope assigning `EventBus()()` function by calling it. After doing that all the functions inside `EventBus` is available in entire project.

Now what we want is that when user enters details for new contact and press `save` button we will `dispatch` an event. So lets open `Form.js` file and update it

Lines 5,6,7 and 9 and new lines added to this file. I am getting `name`, `phone` and `email` from the form upon `save` button clicked and the I dispatch `SAVE` event by calling `window.Events.dispatch(‘SAVE’, { name, email, phone });`.

Now I am going to listen to that event in `Home.js` component where all list of contacts and saved in a local variable state and displays all these contacts in the form of table.

Open `Home.js` component

Inside the `useEffect` hook I am listening to `SAVE` event and then call the callback function save contact and pass the object received from the `dispatch` function from `Form.js` component. Inside `saveContact` function I am updating the `contacts` state with newly added contact from the `Form.js` component.

Inside JSX, I added a table and renders all the contacts there which is self explanatory.
