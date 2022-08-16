Project Brief - To-do app
-------------------------

PROJECT

Introduction
------------

This document will outline the requirements of your next project. You’re going to build a simple To-do app with **Vue.js** that allows users to create an account, record tasks, edit them and mark them as complete. The app will be linked to a database, where all the user and task data will be stored. The database that we’ll use for this project is **Supabase**. We’ll also be using **Vite** as a build tool to compile our code and provide a development server while we work.

In the following lessons, you will find introductory notes on databases.

You’ll need to use the CSS skills you’ve learned earlier in the course to style your app. You can pick any UI library to work with such as [Bootstrap](https://getbootstrap.com/), [Vue Element Plus](https://element-plus.org/en-US/), [Vuetify](https://vuetifyjs.com/en/), or write your own styles for bonus points.

Learning goals
--------------

At the end of this project you will be able to:

*   Use Vue.js to create an app
*   Connect a Vue.js app to Supabase [(Database as a Service)](https://www.techtarget.com/searchdatamanagement/definition/database-as-a-service-DBaaS)

Project requirements
--------------------

*   Have a repo on GitHub
*   Commit your work at least once a day during the project development time
*   Your app should be rendered in a browser
*   Your app should be deployed online using a cloud service such as Netlify
*   Stick with _KISS_ (Keep It Simple, Stupid) and _DRY_ (Don’t Repeat Yourself) principles.
*   Your app should be styled using CSS
*   Your app should be fully integrated with a Supabase database using all CRUD operations
*   You should use Vue’s Pinia to fully implement status handling
*   You should handle any asynchronous operations using Promises or Async/await
*   You should document the application’s features, configuration and technical specifications within a README file

Deliverables
------------

The functionality should include:

*   Authentication (sign up, sign in, sign out)
*   A front-end that displays the user’s personal to-do list
*   An ability to add new tasks
*   An ability to edit existing tasks
*   An ability to mark tasks as complete/incomplete
*   An ability to delete existing tasks
*   A store and a database that your app can call data from

User stories
------------

User stories allow us to build a simple narrative around business logic using a syntax called Gherkin. We use keywords such as `given`, `when`, `then`, `and` and `but`, in addition to a few others. You can find a full list of keywords within the [Gherkin documentation](https://cucumber.io/docs/gherkin/reference/#keywords).

Gherkin is the best way to clarify business logic and user interactions whilst also maintaining a human-readable set of specifications.

This strategy is referred to as [Behavior-Driven Development](https://en.wikipedia.org/wiki/Behavior-driven_development) (BDD) and it will form the basis of this specification. We’ll consider our user stories throughout the development process. In the bonus section, you can test your code against them during the **quality assurance (QA)** stage of the project.

Here are the user stories you’ll need to consider to ensure that the app functions as required for this project:

### Authentication

<pre>Feature: Create an account  
  Background: As a new user, I want to register with the to-do app
    Given I do not have an account

Scenario: As a user, I want to create an account
  When I visit the signup page
  And I set the email to "test@example.co.uk"
  And I set a password to "****"
  And I set confirmPassword to "****"
  And I click the register button
  Then I expect to be shown a warning that instructs me to confirm my email address by clicking a link in an email
  And I click the link provided in the email
  Then I expect to be logged in to the app 
  And I expect to see the home screen</pre>


<pre>Feature: Log in to the app
  Background: As a user, I want to log in to the to-do app
    Given I already have an account

Scenario: As a user, I want to log in to the app
  When I visit the login page
  And I enter my email as "test@example.co.uk"
  And I enter my password as "****"
  And I click the Log In button
  Then I expect to be logged in to the app 
  And I expect to see the home screen
</pre>

<pre>Feature: Log out from the app
  Background: As a user, I want to be able to log out from the app
    Given I am logged in to the app

Scenario: As a user, I want to log out
  When I am viewing the home screen
  And I click the log out button 
  Then I expect to be logged out of the app
  And I expect to see the login page
 </pre>

### App

<pre>Feature: Add a new task
  Background: As a logged in user, I want to add a new task and have it appear on my to-do list
    Given I am logged in

Scenario: As a logged-in user I want to create a new task
  When I visit the home screen
  And I enter "My cool task" in the NewTask field
  And I click the submit button
  Then I expect to see "My cool task" in the To-Do list of tasks
  </pre>
  
<pre>Feature: Edit a task
  Background: As a logged in user, I want to edit an existing task and have the app display the updated content
    Given I have already created a task

Scenario: As a user, I want to edit the title of my task
  When I locate the task I'd like to edit
  And I click the corresponding Edit button to the task
  Then I expect the title of the task to become editable
  When I enter a new description for the task
  And I click submit
  Then I expect to see my updated task on the To-Do list
</pre>

<pre>Feature: Mark a task as complete
  Background: As a logged in user, I want to be able to mark a task as complete and automatically move it to the completed section 
    Given I have already created a task

Scenario: As a logged-in user I want to mark a task as complete
  When I locate the task I'd like to mark as complete
  And I click the corresponding done button to the task
  Then I expect to see that my task has immediately been moved to the completed section
 </pre>

<pre>Feature: Mark a task as incomplete
  Background: As a logged in user, I want to be able to mark a task as incomplete and automatically move it back to the to-do section 
    Given I have already created a task and marked it as complete

Scenario: As a logged-in user I want to mark a task as incomplete
  When I locate the task I'd like to mark it as incomplete
  And I click the corresponding incomplete button to the task
  Then I expect to see that my task has immediately been moved to the to-do section
 </pre>

<pre>Feature: Delete a task
  Background: As a logged in user, I want to be able to permanently delete an existing task
    Given I have already created a task

Scenario: As a logged-in user I want to delete a task
  When I locate the task I'd like to delete
  And I click the corresponding delete button to the task
  Then I expect to see that my task has been permanently removed from every list
</pre>

Technical specifications
------------------------

### Tech Stack

*   **Client**: Vue.js, Vite (dev server)
*   **Router:** [Vue Router](https://router.vuejs.org/)
*   **Store:** [Pinia](https://pinia.vuejs.org) and [Pinia Persist](https://seb-l.github.io/pinia-plugin-persist/) for persistent login
*   **Database as a service:** Supabase

Project setup
-------------

Basic setup for Vue.js and Supabase:

Copy

<pre>$ yarn vite create "my-todo-project"  
$ cd my-todo-project  
$ yarn add @supabase/supabase-js  
$ yarn add pinia  $ yarn add vue-router  
$ yarn add pinia-plugin-persist
</pre>

Vue.js
------

### Modules needed:

**Vue Router**

*   You will need to set up a route for `Dashboard` and `Auth`

**Pinia** (for our store)

*   You will need to set up two user stores: `user.js` and `task.js`

### Tasks

*   Create a sign up/sign in screen that will be displayed when the user is not logged in
*   Ensure that the signup form requests an email address, password and password confirmation from the user
*   Ensure that the sign in form requests an email and a password from the user
*   Create a page where after logging in, the user is shown the main app content
*   The app should fetch all tasks from the logged-in user’s task list stored in Supabase

Architecture
------------

Below we’ve prepared a suggested file structure for the codebase. Vite will automatically generate the files when you’ve created the project. You will need to create the `components` folder and the `pages` folder.

The `/pages` directory name is a choice for the developer. In other codebases, you may see it referred to as views.

Suggested file structure for the codebase (click to see)  

Copy

<pre>├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── AppHeader.vue
│   │   ├── Nav.vue
│   │   ├── NewTask.vue
│   │   ├── SignIn.vue
│   │   ├── SignUp.vue
│   │   └── TaskItem.vue
│   ├── main.js
│   ├── pages
│   │   ├── Auth.vue
│   │   └── Dashboard.vue
│   ├── router
│   │   └── index.js
│   ├── static
│   │   └── main.css
│   ├── store
│   │   ├── task.js
│   │   └── user.js
│   └── supabase.js
├── vite.config.js
└── yarn.lock</pre>

Sample code
-----------

We’ve provided some starter templates for you to use. You’ll need to expand upon these to build the application.

### `/store/user.js`

Here is a basic `user` store. We’ve only given you two actions: `fetchUser` and `signUp`. You’ll need to create `signIn` and `signOut`.


<pre>// /store/user.js

import { defineStore } from 'pinia';
import { supabase } from '../supabase';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser () {
      const user = await supabase.auth.user();
      this.user = user
    },
    async signUp (email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    persist: {
      enabled: true,
      strategies: [
        {
          key: 'user',
          storage: localStorage
        }
      ]
    },
});
</pre>

### `/store/task.js`

Here is a basic `task` store. We’ve only given you one action: `fetchTasks`. You’ll need to create your own store actions to update, create and delete the tasks.


<pre>// /store/task.js

import { defineStore } from 'pinia';
import { supabase } from '../supabase';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: null
  }),
  actions: {
    async fetchTasks () {
      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });
      this.tasks = tasks;
    }
  }
});

</pre>

### App.js

Instead of checking authentication on router change. We’ll be checking it at the root level of the app. This means that the user request is only fired once and not on every page load. Different (especially larger) apps may need a different strategy when dealing with authentication. We’ve provided you with a basic `App.js` that nests the other pages inside.

<pre>
   <template>
     <section>
       <router-view class="app-main" /> <!-- your routes will load inside of these tags -->    
     </section>
   </template>

   <script setup>
   import { onMounted } from 'vue'
   import { storeToRefs } from 'pinia'
   import { useRouter } from 'vue-router'
   import { useUserStore } from './store/user.js'

   const router = useRouter()
   const userStore = useUserStore()
   const { user } = storeToRefs(userStore)

   onMounted(async () => {
     try {
       await userStore.fetchUser() // here we call fetch user
       if (!user.value) {
         // redirect them to logout if the user is not there
         router.push({ path: '/auth' });
       } else {
         // continue to dashboard
         router.push({ path: '/' });
       }
     } catch (e) {
       console.log(e)
     }
   })
   </script>
</pre>

Code standards & “gotchas”
--------------------------

It’s always important to consider the way in which you write your code. We suggest you add `eslint` along with `eslint-plugin-vue` to your codebase to automatically check and lint your code. You can find more detailed instructions on how to do this [here](https://eslint.vuejs.org/user-guide/).

We also suggest you follow the following principles when dealing with your store:

*   Only update the state from actions
*   After changing data via an action run `this.fetchTasks()` or `this.fetchUser()` inside of that same action. This ensures that the state is always updated the same way because we fetch the data again from the API after manipulating it with a single `fetchSomething()` action.
*   Use getters to select the data when applying it to the template. You’ll need to use `storeToRefs` - for more info take a look at these [Pinia docs](https://pinia.vuejs.org/core-concepts/#using-the-store)
*   When accessing the value of a variable with Vue 3 you’ll need to use `.value`. For example, `let loading = ref(true);` then to update that value you’ll need `loading.value`
    *   `loading.value = false` ✅ works!
    *   `loading = false` ❌ wont work!
*   Supabase requires users to confirm their email addresses. This can be turned off. However, we want you to handle the error from supabase and present it to the user so that when their email is not confirmed it states "email not confirmed " in the error.

Databases and SQL
-----------------

Check the following lesson in the lesson plan to learn more about Databases and SQL.

Supabase
--------

Check the following lesson in the lesson plan to learn how to setup and use Supabase.

User interface
--------------

We’ve not defined a user interface or a design that we want you to use, so use your CSS skills and get creative. Because we’re using Vue, we can make it a single page that includes components for the new task input, task list items and headers, etc.

You’re welcome to apply your own design and layout. You can pick any UI library to work with such as [Bootstrap](https://getbootstrap.com/), [Vue Element Plus](https://element-plus.org/en-US/), [Vuetify](https://vuetifyjs.com/en/), or write your own styles.

Presentation demo
-----------------

You will be expected to demo this application. We’ve provided some tips and expectations below:

Your presentation demo is expected to last 5-10 mins.
