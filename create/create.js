import { createListItem, logout } from '../fetch-utils.js';

const form = document.querySelector('.item-form');
const error = document.getElementById('error');
const logoutBtn = document.getElementById('logout-btn');
const listBtn = document.getElementById('list-button');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const itemData = new FormData(form);
    const data = await createListItem(itemData.get('name'), itemData.get('qty'));
    if (data) {
        window.location.href = '/list';
    } else {
        error.textContent = 'quick go debug something!';
    }
});

logoutBtn.addEventListener('click', () => {
    logout();
});

listBtn.addEventListener('click', () => {
    window.location.href = '/list';
});

