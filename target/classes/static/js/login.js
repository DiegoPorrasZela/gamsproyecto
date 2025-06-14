document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
  
    function saveUser(name, email, password) {
      const user = { name, email, password };
      localStorage.setItem('user', JSON.stringify(user));
    }
  
    function getUser() {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }

    if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
  
        if (!name || !email || !password) {
          alert('Por favor completa todos los campos.');
          return;
        }
  
        saveUser(name, email, password);
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        registerForm.reset();
      });
    }
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
  
        const user = getUser();
  
        if (!user) {
          alert('No hay ningún usuario registrado.');
          return;
        }
  
        if (user.email === email && user.password === password) {
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          window.location.href = '/';
        } else {
          alert('Correo o contraseña incorrectos.');
        }
      });
    }
  });
  