function start(){

    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
   const btn = document.getElementById('btn');
    btn.onclick = login()

start();



 const login =  btn.addEventListener('btn', () => {

    const buttom = document.getElementById('btn');
    if(user.value == 'admin' && pass.value == 'admin123'){
        window.prompt('Bem Vindos');
    }else{
        window.prompt('Confira seu usuário e senha');
    }
}
, false);}