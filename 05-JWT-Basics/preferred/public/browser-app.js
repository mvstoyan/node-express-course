// selecting DOM elements
const formDOM = document.querySelector('.form')
const usernameInputDOM = document.querySelector('.username-input')
const passwordInputDOM = document.querySelector('.password-input')
const formAlertDOM = document.querySelector('.form-alert')
const resultDOM = document.querySelector('.result')
const btnDOM = document.querySelector('#data')
const tokenDOM = document.querySelector('.token')
// handling form submit event
formDOM.addEventListener('submit', async (e) => {
  // reset form state
  formAlertDOM.classList.remove('text-success')
  tokenDOM.classList.remove('text-success')

  // Prevent form from submitting and get input values
  e.preventDefault()
  const name = usernameInputDOM.value
  const password = passwordInputDOM.value

  try {
    // make login request
    const { data } = await axios.post('/api/v1/logon', { name, password })
    // show success message
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = data.msg

    formAlertDOM.classList.add('text-success')
    usernameInputDOM.value = ''
    passwordInputDOM.value = ''

    // store token in local storage
    localStorage.setItem('token', data.token)
    resultDOM.innerHTML = ''
    tokenDOM.textContent = 'token present'
    tokenDOM.classList.add('text-success')
  } catch (error) {
    // show error message
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = error.response.data.msg
    localStorage.removeItem('token')
    resultDOM.innerHTML = ''
    tokenDOM.textContent = 'no token present'
    tokenDOM.classList.remove('text-success')
  }
  // hide message after 2 seconds
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
  }, 2000)
})

// handling "get data" button click event
btnDOM.addEventListener('click', async () => {
  const token = localStorage.getItem('token')
  try {
    // make authenticated request
    const { data } = await axios.get('/api/v1/hello', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    // show data
    resultDOM.innerHTML = `<h5>${data.msg}</h5>`
  } catch (error) {
    // handle error
    localStorage.removeItem('token')
    resultDOM.innerHTML = `<p>${error.response.data.msg}</p>`
  }
})

// checking if token is present in local storage
const checkToken = () => {
  tokenDOM.classList.remove('text-success')

  const token = localStorage.getItem('token')
  if (token) {
    tokenDOM.textContent = 'token present'
    tokenDOM.classList.add('text-success')
  }
}
checkToken()
