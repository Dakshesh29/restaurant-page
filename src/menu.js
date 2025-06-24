export default function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const title = document.createElement('h1');
  title.textContent = 'Menu';

  const item1 = document.createElement('p');
  item1.textContent = '🍕 Pizza - $12';

  const item2 = document.createElement('p');
  item2.textContent = '🍔 Burger - 10 rupees';

  content.appendChild(title);
  content.appendChild(item1);
  content.appendChild(item2);
}
