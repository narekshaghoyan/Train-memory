document.addEventListener('DOMContentLoaded', async function () {
  const token = localStorage.getItem('token');
  const tbody = document.getElementById('tbody');

  try {
    const response = await fetch('/get-top', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const topUsers = await response.json();

    // Clear existing rows (optional)
    tbody.innerHTML = '';

    // Populate table rows
    index = 1;
    topUsers.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <th scope="row">${index}</th>
        <td>${user.firstName} ${user.lastName}</td>
        <td>${(user.lastRecord / 1000).toFixed(2)}</td>
      `;
      tbody.appendChild(row);
      index++
    });

  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle error as needed (e.g., show error message, redirect)
  }
});
