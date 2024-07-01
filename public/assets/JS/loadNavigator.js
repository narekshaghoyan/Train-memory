document.addEventListener('DOMContentLoaded', function() {
  fetch('/navigator.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('navigator').innerHTML = html;
    })
    .catch(err => {
      console.error('Error loading navigator:', err);
    });
});
