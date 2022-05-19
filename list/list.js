import { checkAuth, logout, fetchListItems, updateItem } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const createButton = document.getElementById('create');

createButton.addEventListener('click', () => {
    window.location.href = '/create';
});

const shoppingListEl = document.getElementById('shopping-list');
const error = document.getElementById('error');

async function displayListItems() {
    shoppingListEl.textContent = '';
    const data = await fetchListItems();
    if (data) {
        for (let item of data) {
            const listElem = renderItem(item);
            listElem.addEventListener('click', async (e) => {
                e.preventDefault();
                await updateItem(item);
                displayListItems();
            });

            shoppingListEl.append(listElem);
        }
    } else {
        error.textContent = 'quick go debug something!';
    }
}

displayListItems();