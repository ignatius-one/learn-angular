document.getElementById('show').addEventListener('click', () => {
    document.getElementById('mostrar').classList.toggle('show')
})
document.getElementById('show-menu').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('active')
    document.getElementById('show-menu').classList.toggle('bar-x')

})
document.getElementById('dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-active')
    document.getElementById('dark-mode').classList.toggle('change')
})