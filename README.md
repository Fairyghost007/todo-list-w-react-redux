# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# ToDo Application with Redux

## Project Overview

In this project, you will develop a To-Do List application using React and Redux for state management. This application will allow users to add, edit, delete, and mark tasks as completed. The project aims to solidify your understanding of global state management using Redux while incorporating essential features and functionality for an interactive to-do list.

## Objectives

- Build a To-Do List application with React.
- Utilize Redux to manage the application's global state.
- Implement form validation and persist tasks using browser storage.
- Style the application for improved usability and visual appeal.

## Application Features

1. **Add New Tasks**: 
   - Implement a form for adding tasks, with fields for task name and description.
   - Include validation to ensure both fields are filled before a task can be added.

2. **Display Task List**: 
   - Show the list of tasks with options to edit, delete, and mark tasks as completed.
   - Visually distinguish completed tasks from active tasks.

3. **Edit Tasks**: 
   - Enable task editing by clicking on the task.
   - Use a form pre-filled with the current task details for updating the task name and description.

4. **Delete Tasks**: 
   - Allow users to delete tasks with a confirmation prompt before removal.

5. **Persistent Storage**:
   - Use `localStorage` or `sessionStorage` to persist tasks across sessions.
   - Load tasks from storage on application initialization and save any changes to storage.

6. **Styling**:
   - Style the application using CSS to create a clean, user-friendly interface.
   - Differentiate active and completed tasks with appropriate styling.

7. **Optional Features**:
   - Add filtering options for tasks (e.g., view completed, active).
   - Implement task sorting by priority or due date.
   - Allow users to assign due dates to tasks.

## Instructions

1. **Create a Redux Store**:
   - Set up a Redux store and create actions and reducers for managing the task list state.
   - Include actions for adding, editing, deleting, and toggling the completion status of tasks.

2. **Build the Task Form**:
   - Create a form component for adding and editing tasks.
   - Ensure the form includes input fields for both task name and description.
   - Add validation to check that both fields are filled before submission.

3. **Display and Manage Task List**:
   - Develop a component to display the list of tasks.
   - Implement buttons or icons for editing, deleting, and marking tasks as completed.
   - Add confirmation prompts before deleting tasks.

4. **Persist Tasks with Browser Storage**:
   - Use `localStorage` or `sessionStorage` to save tasks whenever the task list is updated.
   - Load tasks from storage when the application initializes.

5. **Style the Application**:
   - Use CSS to style the form, task list, and buttons for user-friendly navigation.
   - Differentiate the styling of active and completed tasks.

## Optional Enhancements

- **Filter Tasks**: Add functionality to filter tasks based on their completion status.
- **Sort Tasks**: Implement sorting options to sort tasks by priority or due date.
- **Due Dates**: Allow users to set due dates on tasks and display them in the task list.


## Tools and Libraries

- **React**: For building the user interface.
- **Redux**: For managing the application state.
- **CSS**: For styling components.
- **Browser Storage (localStorage or sessionStorage)**: For task persistence.

## Submission Checklist

- [ ] Task form with validation for adding tasks.
- [ ] Task list display with edit, delete, and complete options.
- [ ] Task edit functionality with pre-filled form.
- [ ] Task delete functionality with confirmation prompt.
- [ ] Browser storage to persist tasks across sessions.
- [ ] CSS styling for task list, form, and visual differentiation between active and completed tasks.

## Summary

Upon completion, you will have a functional and visually appealing To-Do List application with Redux for state management, providing a solid foundation for building React applications that handle complex state.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
