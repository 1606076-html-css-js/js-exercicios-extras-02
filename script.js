function executarTudo(){
    /*
        Todas as linhas aqui nessa função serão executadas ao clicar no botão.
        Incluindo chamar outras funções!
    */

    /*
        Exemplos para exercício 01 - !Descomente linha 20 e 22 para ver funcionando!
        Por enquanto, não se apegue muito no melhor código possível,
        apenas tenha como objetivo deixar a função mais genérica possível.
        Isso possibilitará você utilizar ela em diversas situações
    */
    // Não tão generica
    // somarOsDoisNumerosDosInputsSimples()
    // Uma função trabalhando um pouco mais como orquestradora de outras funções
    somarOsDoisNumerosDosInputsMelhorada()

    /* !!! Adicione abaixo novas chamadas de funções criadas por você !!! */
    // fazerTalCoisa()
    // fazerTalCoisa()
    // fazerTalCoisa()
    // fazerTalCoisa()
    // fazerTalCoisa()
}

function somarOsDoisNumerosDosInputsSimples(){
    const input01Capturado = document.getElementById("input_01_ex01")
    const input02Capturado = document.getElementById("input_02_ex01")
    
    const valor01 = Number(input01Capturado.value)
    const valor02 = Number(input02Capturado.value)

    const result = valor01 + valor02

    document.getElementById("boxModel01").innerHTML = result
}

function somarOsDoisNumerosDosInputsMelhorada(){
    const valor01 = pegarValorNumerico("input_01_ex01")
    const valor02 = pegarValorNumerico("input_02_ex01")

    const resultadoSoma = somarDoisNumeros(valor01, valor02)

    mostrarResultadoEmUmElemento("elResultadoSoma", resultadoSoma)
}

function pegarValorNumerico(idElemento){
    const inputCapturado = document.getElementById(idElemento)
    const valor = Number(inputCapturado.value)

    return valor
}

function somarDoisNumeros(num1, num2) {
    return num1 + num2
}

function mostrarResultadoEmUmElemento(idElemento, valorASerMostrado) {
    document.getElementById(idElemento).innerHTML = valorASerMostrado
}