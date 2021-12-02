# app-todo  

## Technical Requirements / Notes  
Create a settings Context that can define how our components should display elements to the User.  

1. Implement the React context API for defining settings across the entire application.
   - Create a context for managing application display settings and provide this at the application level.
   - Display or Hide completed items (boolean).
   - Number of items to display per screen (number).
   - Default sort field (string).
   - Manually set (hard code) those state settings in the context provider’s state, they should not be changeable.  
2. Consume and utilize context values throughout your components
   - Show a maximum of a certain number of items per screen in the <List /> component
     - Provide “next” and “previous” links to let the users navigate a long list of items
   - Hide or show completed items in the list
   - Optional: Sort the items based on any of the keys (i.e. difficulty)  

# Pagination Notes:

  - Only display the first n items in the list, where n is the number to display per screen in your context.
    - If you have more than n items in the list, add a button labeled Next that will replace the list with the next n items in the list.
    - If you are past the first n items (i.e. on page 2 or higher), add a button labeled Previous that will replace the list with the previous n items in the list.