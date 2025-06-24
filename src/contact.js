export default function loadContact() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const hero = document.createElement('div');
  hero.classList.add('hero');

  const contactSection = document.createElement('div');
  contactSection.classList.add('contact-section');

  const title = document.createElement('h2');
  title.innerHTML = "Let's Get In Touch";

  const form = document.createElement('form');
  form.classList.add('contact-form');

  const label1 = document.createElement('label');
  label1.classList.add('label1');
  label1.innerHTML = "Full Name";

  const inputName = document.createElement('input');
  inputName.classList.add('inputName');
  inputName.type = 'text';
  inputName.placeholder = 'Your name';

  const label2 = document.createElement('label');
  label2.classList.add('label2');
  label2.innerHTML = "Email";

  const inputEmail = document.createElement('input');
  inputEmail.classList.add('inputEmail');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'you@example.com';

  const label3 = document.createElement('label');
  label3.classList.add('label3');
  label3.innerHTML = "Subject";

  const inputSubject = document.createElement('input');
  inputSubject.classList.add('inputSubject');
  inputSubject.type = 'text';
  inputSubject.placeholder = 'Subject';

  const label4 = document.createElement('label');
  label4.classList.add('label4');
  label4.innerHTML = "Message";

  const textArea = document.createElement('textarea');
  textArea.placeholder = "Write your message here...";
  textArea.required;

  const btn = document.createElement('button');
  btn.textContent = 'Submit';
  btn.classList.add('submitBtn');
  btn.type = 'submit';



  content.appendChild(hero);
  hero.appendChild(contactSection);
  contactSection.appendChild(title);
  contactSection.appendChild(form);
  form.appendChild(label1);
  form.appendChild(inputName);
  form.appendChild(label2);
  form.appendChild(inputEmail);
  form.appendChild(label3);
  form.appendChild(inputSubject);
  form.appendChild(label4);
  form.appendChild(textArea);
  form.appendChild(btn);
}
