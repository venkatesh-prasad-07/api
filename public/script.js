// document.getElementById('loginForm').addEventListener('submit', function (event) {
//     event.preventDefault();
  
//     const username = document.getElementById('loginForm').elements.username.value;
//     const password = document.getElementById('loginForm').elements.password.value;
  
//     // Make an API request to the login endpoint
//     fetch('/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ username, password })
//     })
//       .then(response => response.json())
//       .then(data => {
//         // Store the token in localStorage or handle it as needed
//         const token = data.token;
//         console.log('Received token:', token);
//       })
//       .catch(error => console.error('Error:', error));
//   });
  
//   document.getElementById('signupForm').addEventListener('submit', function (event) {
//     event.preventDefault();
  
//     const username = document.getElementById('signupForm').elements.username.value;
//     const password = document.getElementById('signupForm').elements.password.value;
  
//     // Make an API request to the signup endpoint
//     fetch('/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ username, password })
//     })
//       .then(response => response.json())
      
//       .catch(error => console.error('Error:', error));
//   });
  