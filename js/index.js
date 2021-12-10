function start() {

    const btn = document.getElementById('btn')
    btn.onclick = loginCheck
  }
  
  function loginCheck() { 
  
    const user = document.getElementById('user')
    const pass = document.getElementById('pass')
  
      if ( user.value == 'admin' && pass.value == 'abc123') {
        window.prompt('Welcome, have a nice day! Rodrigo, next year I pay for your pizza ')
  
      }
      else  {
        window.prompt('Wrong username or password, please try again')
      }
  
    }
  
  start()