document.addEventListener('DOMContentLoaded', function() {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/login.html';
    return;
  }

  fetch('/user-info', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Failed to fetch user info');
    }
  }).then(user => {
    const userInfoDiv = document.getElementById('user-info');
    userInfoDiv.innerHTML = `
      <div><strong>First Name:</strong> ${user.firstName}</div>
      <div><strong>Last Name:</strong> ${user.lastName}</div>
      <div><strong>Email:</strong> ${user.email}</div>
      <div><strong>Registration Date:</strong> ${new Date(user.regDate).toLocaleString()}</div>
      <div><strong>Last Record:</strong> ${user.lastRecord ? user.lastRecord / 1000 + ' ss' : 'N/A'}</div>
    `;
  }).catch(err => {
    console.error('Error fetching user info:', err);
    window.location.href = '/login.html';
  });
});
