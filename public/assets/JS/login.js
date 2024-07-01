document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  const result = await response.json();
  if (response.ok) {
    document.getElementById('message').innerText = 'Login successful';
    localStorage.setItem('token', result.token); // Store the token
    // Redirect to the memory game page or another protected page
    window.location.href = '/memory-game.html';
  } else {
    document.getElementById('message').innerText = result.error;
  }
});
