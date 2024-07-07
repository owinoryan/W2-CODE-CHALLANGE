document.addEventListener('DOMContentLoaded', () => {
    //we declare html elements for later interaction with them
    const itemInput = document.getElementById('item-input');
    const addButton = document.getElementById('add-button');
    const shoppingList = document.getElementById('shopping-list');
    const clearButton = document.getElementById('clear-button');

    let items = [];

    // FThis fuction renders the list
    function renderList() {
        shoppingList.innerHTML = '';
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item.name;
            li.classList.toggle('bought', item.bought);

            li.addEventListener('click', () => {
                items[index].bought = !items[index].bought;
                saveToLocalStorage();
                renderList();
            });

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', (e) => {
                e.stopPropagation();
                const newName = prompt('Edit item name:', item.name);
                if (newName) {
                    items[index].name = newName;
                    saveToLocalStorage();
                    renderList();
                }
            });

            li.appendChild(editButton);
            shoppingList.appendChild(li);
        });
    }

    // This fuction adds a new item
    addButton.addEventListener('click', () => {
        const itemName = itemInput.value.trim();
        if (itemName !== '') {
            items.push({ name: itemName, purchased: false });
            itemInput.value = '';
            saveToLocalStorage();
            renderList();
        }
    });

    // This fuction clears the list
    clearButton.addEventListener('click', () => {
        items = [];
        saveToLocalStorage();
        renderList();
    });


    
     //This fuction saves items to local storage
    function saveToLocalStorage() {
       localStorage.setItem('shoppingList', JSON.stringify(items));
   }

     //This function loads items from local storage
    function loadFromLocalStorage() {
        const savedItems = localStorage.getItem('shoppingList');
        if (savedItems) {
            items = JSON.parse(savedItems);
        }
    }

    //Initial load from local storage and render
    loadFromLocalStorage();
    renderList();
});
