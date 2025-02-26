const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('form');
const email = form.querySelector('[name = "email"]');
const message = form.querySelector('[name = "message"]');

if (localStorage.getItem('feedback-form-state')) {
  const localData = localStorage.getItem('feedback-form-state');
  const data = JSON.parse(localData);
  email.value = data.email;
  message.value = data.message;
  formData.email = data.email;
  formData.message = data.message;
}

form.addEventListener('input', event => {
  event.preventDefault();
  formData.email = email.value.trim();
  formData.message = message.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const em = email.value.trim();
  const mes = message.value.trim();
  if (mes.length === 0 || em.length === 0) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.clear();
    formData.email = '';
    formData.message = '';
    email.value = '';
    message.value = '';
  }
});
