const apiUrl = 'http://localhost:3000'; 

async function login() {
  const name = document.getElementById('username').value;  
  const pass = document.getElementById('password').value;  

  try {
    const response = await fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, pass })  
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Sahi aadmi hai yeh ');
      
    } else {
      console.error('Heker hai bhai heker hai', data.msg);  
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  login();
});
