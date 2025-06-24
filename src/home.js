const loadHome = () => {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Clear previous content

  const hero = document.createElement('div');
  hero.classList.add('hero');

  const textBox = document.createElement('div');
  textBox.classList.add('hero-text');
  textBox.innerHTML = `
    <h1>Welcome to BlissBite</h1>
    <p>Where flavor meets comfort</p>
    <h3><em>Fresh, wholesome meals served in a cozy, relaxing vibe.</em></h3>
    <p>At BlissBite, we believe food should be both satisfying and soothing. 
    Our menu is crafted with love, using locally sourced ingredients and a passion for balance — from hearty brunches to light evening bites.</p>
    <p><strong>Come hungry, leave happy. We're open every day from 10am to 10pm.</strong></p>

  `;
  hero.appendChild(textBox);
  content.appendChild(hero);
};

export default loadHome;
