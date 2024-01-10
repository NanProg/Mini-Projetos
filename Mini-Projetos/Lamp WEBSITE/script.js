let img = document.getElementById('lamp')
let lamp = 0
function clicaron() {
    if (lamp == 1) {
        alert('Já está ligada!')
    } else if (lamp == 2) {
        alert('...')
        lamp = 2
    } else {
        img.src = 'ligada.jpg'
        lamp = 1
    }
}

function clicaroff() {
    if (lamp == 0) {
        alert('Já está desligada!')
    } else if (lamp == 2) {
        alert('...')
        lamp = 2
    } else {
        img.src = 'desligada.jpg'
        lamp = 0
    }
}

function quebrar() {
    if (lamp == 2) {
        alert('Nada acontece...')
    } else {
        alert('!!!')
        img.src = 'quebrada.jpg'
        lamp = 2
    }
}

function sobre() {
    if (lamp == 2) {
        alert('Nada mais funciona...')
    } else {
        img.src = 'ligada.jpg'
        lamp = 1
    }
}

function sair() {
    if (lamp == 2) {
        alert('Recarregue a página!')
    } else {
        img.src = 'desligada.jpg'
        lamp = 0 
    }
}