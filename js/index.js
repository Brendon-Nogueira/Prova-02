function start() {

    const btn = document.getElementById('btn')
    btn.onclick = loginCheck
  }
  
  function loginCheck() { 
  
    const user = document.getElementById('user')
    const pass = document.getElementById('pass')
  
      if ( user.value == 'admin' && password.value == 'admin123') {
        window.prompt('Welcome, have a nice day!')
  
      }
      else  {
        window.prompt('Wrong username or password, please try again')
      }
  
    }
  
  start()