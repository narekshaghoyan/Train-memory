document.addEventListener('DOMContentLoaded', function () {
  const token = localStorage.getItem('token');
  
  fetch('/verify-token', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if (!response.ok) {
      localStorage.removeItem('token')
      window.location.href = '/login.html';
    }
  }).catch(err => {
    console.error('Error verifying token:', err);
  });
});
