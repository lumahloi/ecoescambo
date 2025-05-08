document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('email-form');
    const passwordInput = document.getElementById('form-senha');
    const confirmInput = document.getElementById('form-senha2');
    const errorMessage = document.getElementById('error-message');
  
    form.addEventListener('submit', function (e) {
      const password = passwordInput.value;
      const confirmPassword = confirmInput.value;
  
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  
      if (!regex.test(password)) {
        e.preventDefault();
        errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres, incluir letras maiúsculas e minúsculas e números.';
        return;
      }
  
      if (password !== confirmPassword) {
        e.preventDefault();
        errorMessage.textContent = 'As senhas não coincidem.';
        return;
      }
  
      errorMessage.textContent = '';
    });
  });
  