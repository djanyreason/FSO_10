This repository is for exercises in Part 10 of Full Stack Open (FSO), "React Native" - https://fullstackopen.com/en/part10

The exercises for this part build a React Native mobile application, which interfaces with a remote server to get the data displayed by the app.

This project is a mobile application that displays information for a series of GitHub repositories. The app is styled using React Native StyleSheet, and relies heavily on Flexbox for layout. Forms are implemeted using Formik and validated with Yup. Communications with the server are handled using GraphQL and Apollo Clinet. The app has several different views, navigation of which is handled through react-router-native:
* Repository List view shows the repositories in the database and summary information, with cursor-based pagination and infinite scrolling; this view also can be sorted in three different manners, and can be filtered; this view is accessed from the navbar
* Single Repository view shows detail for a single repository, along with a pressable button link to open in GitHub and an list of reviews of the repository with cursor-based pagination and infinite scrolling; this is accessed by clicking a repository in the Repository List view or from the User's Reviews view (described below)
* Sign Up view is a form to add a new user to the app, with a username, password, and password confirmation that must match the password field; this view is accessed from the navbar when no user is logged in
* Sign In view is a username/password form for a user to log in to the app; this view is accessed from the navbar when no user is logged in
* Create Review view is a form to create a new review for a repository; it requires repository owner name, repository name, and a numberical rating from 0 to 100; it also accepts an optional text review; this view is accessed from the navbar when a user is logged in
* User's Reviews view is a view that shows a logged in user a list of all the reviews they have submitted, with cursor-based pagination and infinite scrolling; the reviews have buttons to view the repository (navigate to Single Repository view) and to delete the review, which results in a confirmation popup before deleting; this view is accessed from the navbar when a user is logged in

This project also has tests using Jest. These are all stored in /rate-repository-app/src/_tests_

This project is focused on using React Native to build a mobile app. It relies on Expo for the development environment, and using Android Studio or Xcode to emulate a mobile device. It also encompases React Native styling with StyleSheet and theming, flexbox layout, routing with react-router-native, Formik for state management, Yup for form validation, platform-specific code with Platform.OS, http requests with fetch, communicating with server through GraphQL and Apollo client, using environment variables with Expo, local storage using AsyncStorage, creating contexts via useContext, testing React Native apps using jest, cursor-based pagination, and infinite scrolling.
