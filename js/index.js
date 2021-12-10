function start(){

    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
   const btn = document.getElementById('btn');
    btn.onclick = login

start();



 const login = () => {
    if (user.value == 'admin' && pass.value == 'admin123') {
      window.prompt('Welcome');
    } else {
        window.prompt('Wrong username or password');
    }