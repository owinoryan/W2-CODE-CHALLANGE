document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('item-input');
    const addButton = document.getElementById('add-button');
    const shoppingList = document.getElementById('shopping-list');
    const clearButton = document.getElementById('clear-button');

    let items = [];

    // This function renders the list
    function renderList() {
        shoppingList.innerHTML = '';
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item.name;
            li.classList.toggle('purchased', item.purchased);

            // Mark item as purchased on click
            li.addEventListener('click', () => {
                items[index].purchased = !items[index].purchased;
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

    // This function adds a new item
    addButton.addEventListener('click', () => {
        const itemName = itemInput.value.trim();
        if (itemName !== '') {
            items.push({ name: itemName, purchased: false });
            itemInput.value = '';
            saveToLocalStorage();
            renderList();
        }
    });

    // This function clears the list
    clearButton.addEventListener('click', () => {
        items = [];
        saveToLocalStorage();
        renderList();
    });

    // This function saves items to local storage
    function saveToLocalStorage() {
        localStorage.setItem('itemCount', items.length);
        items.forEach((item, index) => {
            localStorage.setItem(`item_${index}_name`, item.name);
            localStorage.setItem(`item_${index}_purchased`, item.purchased);
        });
    }

    // This function loads items from local storage
    function loadFromLocalStorage() {
        const itemCount = parseInt(localStorage.getItem('itemCount'), 10) || 0;
        items = [];
        for (let i = 0; i < itemCount; i++) {
            const name = localStorage.getItem(`item_${i}_name`);
            const purchased = localStorage.getItem(`item_${i}_purchased`) === 'true';
            if (name !== null) {
                items.push({ name, purchased });
            }
        }
    }

    // Initial load from local storage and render
    loadFromLocalStorage();
    renderList();
});
