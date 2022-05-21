# HTML

### list page

- list items
- click to toggle purchased state
- delete button to clear all and make new list
- new item button (redirect to create page)

### create page

- form with name and qty inputs
- submit button
- create new items onSubmit (redirect back to list)
- new item button (redirect to create page)

# to do list

### 1. database setup

- make table in sb
- add user_if foreign key relation (default to `uid()`)
- add rls `user_id = uid()` for all actions

### 2. create page

- add form
- write create function in fetch-utils
- add submit event listener
- grab data using `new FormData` and send to supabase
- redirect to `list` page
 _Validation step: new rows are being added in supabase_

 ### 3. list page: list all items

 - add `<ul>` element
 - tdd render function (need to differentiate between purchased and unpurchased items)
 - add fetch function in fetch-utils
 - write a function called `displayListItems()` : grab all the data from supabase and use render function to display
 - on load call `displayListItems()`
   _validation step: rows show up on page, sign in as diff user to ensure you're only seeing authed user's data_


### 4. List page: delete items

- add delete button
- add delete all items functio in fetch-utils
- add event listener to call delete function and remove all items

### 5. List page: update items

- write function in fetch-utils called `updateItem`
- add a click event handler to our list items that updates individual items in supabase
- call displayListItems()