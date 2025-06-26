// Обработка отправки формы через EmailJS
const form = document.getElementById('request-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  status.textContent = 'Verzenden...';

  const templateParams = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value
  };

  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    .then(() => {
      status.textContent = 'Bedankt! Uw aanvraag is verzonden.';
      form.reset();
    }, (err) => {
      console.error('EmailJS fout:', err);
      status.textContent = 'Er is een fout opgetreden. Probeer later opnieuw.';
    });
});
