# Code Demo Instructions

## Overview

Adding a REST API to the project and storing our todo items persistently

## VS Code Terminal - bash.sh has syntax instructions

1. Checkout to dev and pull changes
2. Checkout to feature branch
3. Create a front-end folder and move all files and folders into that folder
4. Copy back-end folder from this repo and paste into parent directory
5. Install dependancies for back-end, then run seed, and finally run the API
6. Open a second terminal and run the front-end

## VS Code App.jsx - App.jsx has syntax instructions

7. Import useEffect
8. Delete hardcoded data state value
9. Call useEffect and declare a fetch function inside of useEffect's anon function
10. Have the fetch request make a get request to http://localhost:3000/todo
11. Set the data state to the return value of the request
12. Call the fetch request function inside the useEffect

## VS Code Form.jsx - Form.jsx has syntax instructions

13. Change the submit handler to make a post request to http://localhost:3000/todo instead of setting the data state
14. Demonstrate that even though you're adding to the db, the list is only updating if you refresh the page

## VS Code App.jsx - App.jsx has syntax instructions

15. Create a piece of state that is a boolean
16. Put that state's value variable into the dependancy array of the useEffect
17. Pass that state's set function to the Form component instead of data and setData

## VS Code Form.jsx - Form.jsx has syntax instructions

18. Change the props to reflect the new prop being sent
19. In the submit handler, after the fetch request is complete, set the new state value to true and demonstrate the live reload of the todo list

## VS Code Terminal - bash.sh has syntax instructions

20. Git workflow

## GitHub

21. Merge feature branch into dev branch
22. Merge dev branch into main branch
