function start(){

    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
    const btn = document.getElementById('btn');

      let btn =  btn.addEventListener('submit', () => {
        if(user.value == 'admin' && pass.value == 'admin123'){
            window.prompt('Bem Vindos');
        }else{
            window.prompt('Confira seu usuário e senha');
        }
    }
, false);}

start();