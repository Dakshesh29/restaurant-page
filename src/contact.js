export default function loadContact() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const title = document.createElement('h1');
  title.textContent = 'Contact Us';

  const details = document.createElement('p');
  details.textContent = 'Email: contact@restaurant.com';

  content.appendChild(title);
  content.appendChild(details);
}
