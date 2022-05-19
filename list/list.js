import { checkAuth, logout } from '../fetch-utils.js';
import { renderItem } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});