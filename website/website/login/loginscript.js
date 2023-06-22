document.getElementById('student-login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('student-username').value;
    const password = document.getElementById('student-password').value;
    
    
    if (username === 'student' && password === 'password') {
      alert('Student login successful!');
      
    } else {
      showError('Invalid username or password');
    }
  });
  
  document.getElementById('parent-login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('parent-username').value;
    const password = document.getElementById('parent-password').value;
    
    
    if (username === 'parent' && password === 'password') {
      alert('Parent login successful!');
      
    } else {
      showError('Invalid username or password');
    }
  });
  
  function showError(message) {
    const errorElement = document.getElementById('error-message');
    errorElement.innerText = message;
    errorElement.style.display = 'block';
  }
  