export default function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

//   const title = document.createElement('h1');
//   title.textContent = 'Menu';

//   const item1 = document.createElement('p');
//   item1.textContent = '🍕 Pizza - $12';

//   const item2 = document.createElement('p');
//   item2.textContent = '🍔 Burger - 10 rupees';

  const hero = document.createElement('div');
  hero.classList.add('hero');

  const container = document.createElement('div');
  container.classList.add('container');

  const menuItems = [
    { name: 'Margherita Pizza', description: 'Classic pizza with fresh tomatoes, basil, and mozzarella.', price: '$12' },
    { name: 'Cheeseburger', description: 'Juicy beef patty with cheese, lettuce, and tomato.', price: '$10' },
    { name: 'Caesar Salad', description: 'Romaine lettuce with creamy Caesar dressing and croutons.', price: '$8' },
    { name: 'Pasta Alfredo', description: 'Creamy Alfredo sauce over fettuccine pasta.', price: '$11' },
    { name: 'Chicken Tikka', description: 'Spicy grilled chicken served with mint chutney.', price: '$13' },
    { name: 'Sushi Roll', description: 'Fresh salmon, avocado, and rice wrapped in seaweed.', price: '$15' },
    { name: 'Veggie Sandwich', description: 'Grilled veggies on whole grain bread.', price: '$9' },
    { name: 'French Fries', description: 'Crispy golden fries with seasoning.', price: '$5' },
    { name: 'Tacos', description: 'Soft tacos with beef, lettuce, and cheese.', price: '$10' },
    { name: 'Chocolate Cake', description: 'Rich chocolate cake slice with fudge topping.', price: '$7' },
  ];

  menuItems.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('containerContent');

    const title = document.createElement('h3');
    title.innerHTML = item.name;

    const description = document.createElement('p');
    description.innerHTML = item.description;

    const price = document.createElement('span');
    price.innerHTML = item.price;

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(price);
    container.appendChild(card)
  });

  content.appendChild(hero);
  hero.appendChild(container);

  
}
