const signIn = document.querySelector('.sign-in')
const basketAmount = document.querySelector('.header__amount')
const inputs = document.querySelectorAll('.input')
const header = document.querySelector('.header')

signIn.addEventListener('click', () => {
    signIn.innerText = 'Hi, Angels!'
    basketAmount.style.display = 'flex'
    header.style.background = `url(./img/header-bg-login.png) center top no-repeat`
    header.style.maxWidth = "1440px"
})

inputs.forEach(e => {
    e.addEventListener('focusin', () => {
        e.value = ' '
    })
    e.addEventListener('focusout', () => {
        e.value = e.placeholder
    })
})