import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './style.css';

function clearContent() {
  document.getElementById('content').innerHTML = '';
}

document.getElementById('home-tab').addEventListener('click', () => {
  clearContent();
  loadHome();
});

document.getElementById('menu-tab').addEventListener('click', () => {
  clearContent();
  loadMenu();
});

document.getElementById('contact-tab').addEventListener('click', () => {
  clearContent();
  loadContact();
});

loadHome();
