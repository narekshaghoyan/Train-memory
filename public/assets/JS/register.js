if (localStorage.getItem('token')) {
  fetch('/login', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }).then(response => {
    if (response.status === 200) {
      window.location.href = '/memory-game.html';
    }
  });
}

document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ firstName, lastName, email, password })
  });

  const result = await response.json();
  document.getElementById('message').innerText = result.message || result.error;
});
