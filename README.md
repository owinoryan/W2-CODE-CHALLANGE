# W2-CODE-CHALLANGE

Open the index.html file in web browser.

To add a new item:

Type the item name in the input field.
Click the "Add" button.
To mark an item as purchased:

Click on the item in the list.
To edit an item:

Click the "Edit" button next to the item.
Enter the new name in the prompt that appears and confirm.
To clear the list:

Click the "Clear List" button.


Code Explanation
HTML Structure
The HTML file (index.html) contains:

An input field for adding new items.
An "Add" button to add items to the list.
An unordered list (<ul>) to display the shopping list items.
A "Clear List" button to clear the entire list.

Basic CSS styles .


JavaScript Logic
The JavaScript file (index.js) includes:

Event listeners to handle adding, marking, editing, and clearing items.
Functions to render the list based on the items array.
Functions to save to and load from local storage.

Main Functions

renderList()

Clears the existing list and repopulates it based on the items array.
Adds click event listeners to toggle the purchased status.
Adds an "Edit" button with an event listener for editing item names.

addButton Event Listener

Adds a new item to the list.
Clears the input field, saves to local storage, and re-renders the list.


clearButton Event Listener

Clears the items array, saves to local storage, and re-renders the list.


saveToLocalStorage()
Loads the items from local storage when the page is first loaded.