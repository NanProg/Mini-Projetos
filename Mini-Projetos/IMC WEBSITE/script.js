function calcular(){
    var nome = document.getElementById('txtname')
    var nomef = (nome.value)
    var altura = document.getElementById('txtaltura')
    var altf = Number(altura.value)
    var peso = document.getElementById('txtpeso')
    var pesof = Number(peso.value)
    var res = document.getElementById('resultado')
    var calculo = Number(pesof / altf**2)
    var calcf = calculo.toFixed(2)
    if (nomef == '' || altf == '0' || calculo == '0'){
        res.innerHTML = 'Preencha os dados corretamente acima!'
        window.alert('[ERRO]')
    } else{    
        if (calculo < 17){
            // Muito abaixo do peso
            res.innerHTML = `${nomef} seu IMC é de ${calcf}, sendo muito abaixo do peso.`
        } else if (calculo >= 17 && calculo < 18.49){
            //Abaixo do peso
            res.innerHTML = `${nomef} seu IMC é de ${calcf}, sendo abaixo do peso.`
        } else if (calculo >= 18.5 && calculo < 25 ){
            //peso normal
            res.innerHTML = `${nomef} seu IMC é de ${calcf}, sendo o peso normal/ideal.`
        } else if (calculo >= 25 && calculo < 30){
            //Acima do peso
            res.innerHTML = `${nomef} seu IMC é de ${calcf}, sendo acima do peso.`
        } else if (calculo >= 30 && calculo < 35){
            //Obesidade 1
            res.innerHTML = `${nomef} seu IMC é de ${calcf}, sendo assim apresentando um grau de obesidade I.`
        } else if (calculo >= 35 && calculo < 40){
            //Obesidade 2
            res.innerHTML = `${nomef} seu IMC é de ${calcf}, sendo assim apresentando um grau de obesidade II.`
        } else {
            //Obesidade 3
            res.innerHTML = `${nomef} seu IMC é de ${calcf}, sendo assim apresentando um grau de obesidade III.`
        }
}   }