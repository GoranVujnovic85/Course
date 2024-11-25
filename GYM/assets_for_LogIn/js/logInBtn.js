/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPassword = (inputPassword, inputIcon) => {
  const input = document.getElementById(inputPassword),
    iconEye = document.getElementById(inputIcon)

  iconEye.addEventListener('click', () => {
    // Change password to text
    if (input.type === 'password') {
      // Switch to text
      input.type = 'text'

      // Add icon
      iconEye.classList.add('ri-eye-line')

      // Remove icon
      iconEye.classList.remove('ri-eye-off-line')
    } else {
      // Change to password
      input.type = 'password'

      // Remove icon
      iconEye.classList.remove('ri-eye-line')

      // Add icon
      iconEye.classList.add('ri-eye-off-line')
    }
  })
}

showHiddenPassword('password', 'input-icon')

function loginUser() {
  alert('loginUser')
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  console.log('email', email)
  console.log('password', password)
  for(i=0;i<data.results.length;i++){
    console.log(data.results[i])
    if(data.results[i].email == email && data.results[i].password == password){
      alert('postoji')
    }
  }

}

window.addEventListener("load", () => {
  document.getElementById('login__button_ID').onclick = () => {
    loginUser()
  }
})

// JSON

const data = {
  results: [

    {
      email: 'darkoivandencic@gmail.com',
      password: 'test123',
      redirectTo: '/index.html'
    },
    {
      email: 'darkoivandencic1@gmail.com',
      password: 'test1231',
      redirectTo: '/space.html'
    }, {
      email: 'darkoivandencic2@gmail.com',
      password: 'test1232',
      redirectTo: '/contactUs.html'
    },
    {
      email: 'darkoivandencic3@gmail.com',
      password: 'test1233'
    }

  ]
}