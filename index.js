const dot = document.querySelector('.dot');
const exit = document.querySelector('.exit');
const container = document.querySelector('.container')

const change = function () {
    container.classList.toggle('hidden')
    dot.classList.toggle('hidden')
}

dot.addEventListener('click', change)

exit.addEventListener('click', change)