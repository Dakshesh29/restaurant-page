export default function loadHome() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const title = document.createElement('h1');
  title.textContent = 'Welcome to Our Restaurant';

  const description = document.createElement('p');
  description.textContent = 'We serve the best food in town.';

  content.appendChild(title);
  content.appendChild(description);
}
