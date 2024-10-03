const apiUrl = 'http://localhost:3000'; // Simplified base API URL

async function login() {
  const name = document.getElementById('username').value;  // Changed 'username' to 'name'
  const pass = document.getElementById('password').value;  // Changed 'password' to 'pass'

  try {
    const response = await fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, pass })  // Sending data with simplified keys
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Login successful!');
      // You can add more actions here, like redirecting to another page
    } else {
      console.error('Login failed:', data.msg);  // Changed 'message' to 'msg' to match backend
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  login();
});
