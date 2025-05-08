document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('email-form');
    const emailInput = document.getElementById('form-email');
    const errorMsg = document.getElementById('email-error');
  
    function validarEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  
    form.addEventListener('submit', function (e) {
      const email = emailInput.value.trim();
  
      if (!validarEmail(email)) {
        e.preventDefault();
        errorMsg.style.display = 'block'; 
      } else {
        errorMsg.style.display = 'none'; 
      }
    });
  
    emailInput.addEventListener('input', function () {
      if (errorMsg.style.display === 'block') {
        errorMsg.style.display = 'none';
      }
    });
  });
  