// Анимация появления
const faders = document.querySelectorAll('.fade-in');
const io = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('appear')),
  { threshold: 0.2 }
);
faders.forEach(el => io.observe(el));

// Валидация формы Netlify
const form = document.getElementById('request-form');
const status = document.getElementById('form-status');
const errName = document.getElementById('error-name');
const errMail = document.getElementById('error-email');
const errMsg  = document.getElementById('error-message');

form.addEventListener('submit', e => {
  // Netlify всё равно перехватит POST, но доп-валидация удобна юзеру
  // errName.textContent = errMail.textContent = errMsg.textContent = '';
  // if (!form.name.value.trim())   { errName.textContent  = 'Naam is verplicht';   e.preventDefault(); }
  // const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // if (!emailRe.test(form.email.value.trim())) { errMail.textContent = 'Ongeldig e-mailadres'; e.preventDefault(); }
  // if (!form.message.value.trim()) { errMsg.textContent = 'Bericht is verplicht'; e.preventDefault(); }

  // if (!e.defaultPrevented) {
  //   status.textContent = 'Bedankt! Uw aanvraag wordt verzonden…';
  //   // после отправки Netlify сделает редирект на /thanks.html
  // }
});
