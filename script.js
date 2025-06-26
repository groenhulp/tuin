// ---- Fade-in при прокрутке ----
const faders = document.querySelectorAll('.fade-in');
const appear = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('appear');
    });
  },
  { threshold: 0.2 }
);
faders.forEach(el => appear.observe(el));

// ---- Логика формы ----
const form        = document.getElementById('request-form');
const statusText  = document.getElementById('form-status');
const errorName   = document.getElementById('error-name');
const errorEmail  = document.getElementById('error-email');
const errorMsg    = document.getElementById('error-message');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Очистить сообщения об ошибках
  [errorName, errorEmail, errorMsg].forEach(el => (el.textContent = ''));

  // Валидировать
  let valid = true;
  if (!form.name.value.trim()) {
    errorName.textContent = 'Naam is verplicht';
    valid = false;
  }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(form.email.value.trim())) {
    errorEmail.textContent = 'Ongeldig e-mailadres';
    valid = false;
  }
  if (!form.message.value.trim()) {
    errorMsg.textContent = 'Bericht is verplicht';
    valid = false;
  }
  if (!valid) return;

  statusText.textContent = 'Verzenden...';
  form.querySelector('button').disabled = true;

  // Параметры для EmailJS
  const templateParams = {
    name:    form.name.value,
    email:   form.email.value,
    phone:   form.phone.value,
    message: form.message.value
  };

  emailjs
    .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    .then(() => {
      statusText.textContent = 'Bedankt! Uw aanvraag is verzonden.';
      form.reset();
      form.querySelector('button').disabled = false;
    })
    .catch(() => {
      statusText.textContent =
        'Er is een fout opgetreden. Probeer later opnieuw.';
      form.querySelector('button').disabled = false;
    });
});
