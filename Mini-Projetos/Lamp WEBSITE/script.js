var botao = 'ligar'
var lamp = null
var img = document.getElementById('lamp')
if (lamp != 'quebrado' || botao != 'quebrado'){
    function clicaron(){
        var lamp = 'ligar'
        if (lamp == botao && lamo != 'quebrado'){
            window.alert('[ERRO] Já está ligada!')
        } else{
            img.src = 'ligada.jpg'
            botao = 'ligar'
        }
    }
}
if (lamp != 'quebrado' || botao != 'quebrado'){
    function clicaroff(){
        var  lamp = 'desligar'
        if (lamp == botao && lamp != 'quebrado'){
            window.alert('[ERRO] Já está desligada')
        } else{
            img.src = 'desligada.jpg'
            botao = 'desligar'
        }
    }
}
function quebrar(){
    var lamp = 'quebrado'
    var botao = 'quebrado'
    img.src = 'quebrada.jpg'
    if (lamp == 'quebrado'){
        // nada ocorre
        window.alert('Quebrado...')
    }
}   

function sobre(){
    var lamp = 'ligar'
    img.src = 'ligada.jpg'
}
function sair(){
    var lamp = 'desligar'
    img.src = 'desligada.jpg'
}