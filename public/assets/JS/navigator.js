document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('logout').addEventListener('click', function() {
    console.log('asds');
    event.preventDefault();
    localStorage.removeItem('token');
    window.location.href = '/login.html';
  });
});
