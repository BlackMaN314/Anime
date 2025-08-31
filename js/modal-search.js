const modal = document.querySelector('.search-model')
const modalBtn = document.querySelector('.search-switch')
const modalClose = document.querySelector('.search-close-switch')
const modalInput = document.querySelector('.search-model-form')

modalBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
})

modalInput.addEventListener('input', (event) => {
    console.log('Введенное значение:', event.target.value)
})