document.getElementById('submissionForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var title = document.getElementById('title').value;
    var file = document.getElementById('file').value;
  
    
    if (!name || !email || !title || !file) {
      showMessage('Please fill in all fields', 'error');
      return;
    }
  
    showMessage('Submitting...', 'success');
    setTimeout(function() {
      showMessage('Assignment submitted successfully!', 'success');
      document.getElementById('submissionForm').reset();
    }, 2000);
  });
  
  function showMessage(message, className) {
    var messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = className;
    messageDiv.style.display = 'block';
  
    messageDiv.classList.add('fade');
  
    setTimeout(function() {
      messageDiv.classList.remove('fade');
    }, 2000);
  }
  