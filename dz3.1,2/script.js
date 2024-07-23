document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const errorMessage = document.getElementById('errorMessage');
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailPattern.test(email)) {
      errorMessage.style.display = 'none';
      alert('вы успешно зарегистрировались')
    } else {
      errorMessage.style.display = 'block';
      
    }
  });