function start(){

   const btn = document.getElementById('btn').value
   newFunction(btn)
}
    const loginEvent = _Event => {

        const user = document.getElementById('user').value
        const pass = document.getElementById('pass').value

        if (user === 'admin' && pass === 'admin123') {
            Window.prompt('Welcome, have a great day')
        } else {
            Window.prompt('Invalid')
        }


    }

start();


function newFunction(btn) {
    btn.onclick = loginEvent
}

