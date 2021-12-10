function start(){

   const btn = document.getElementById('btn').value
   btn.onclick = loginEvent
}
    const loginEvent = Event => {

        const user = document.getElementById('user').value
        const pass = document.getElementById('pass').value

        if (user === 'admin' && pass === 'admin123') {
            Window.prompt('Welcome')
        } else {
            Window.prompt('Invalid')
        }


    }




start();


