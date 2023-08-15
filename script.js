/*
    Arquivo responsavel por toda a logica do
    joguinho da tabuada.

    Vou criar 4 funções relacionada as operações que vai
    executar todos os calculos.
*/


// Iniciando constantes importantes no jogo.
// Constantes que são elementos html
const CONTAINER = document.getElementById("container")
const ESCOLHA = document.getElementById("escolha")
const JOGO = document.getElementById("jogo")
const MENSAGEM = document.getElementById("mensagem")

// Iniciando variaveis importantes
var array_da_tabuada = [];

// O contador da questão
var contador = 0

// Pontuacao
var score = 0


// Pegando os elementos
var pontuacao = document.getElementById("pontuacao")
var questoes = document.getElementById("questoes")
var campo = document.getElementById("resposta")


// Criando função do jogo.
function escolher(n, op){

    var conteudo = ""
    // Assim que pega um filho de um elemento pai (#escolha)
    var h1 = ESCOLHA.querySelector("h1")
    var tabela = ESCOLHA.querySelector("table") 
    var botao = ESCOLHA.querySelector("button")

    for(var i = 1; i <= 10; i++){

        if(op == "+"){
            conteudo += "<tr>"
            conteudo += "<td>"+ n+" + "+i+" = "+(n+i)+"</td>"
            conteudo += "</tr>"  

            
            // Guardando o valores em um array de objetos
            // que representa a tabuada.
            var tabuada = new Tabuada(n, i, "+", n + i);
            array_da_tabuada[i - 1] = tabuada
        }
        else if(op == "-"){
            conteudo += "<tr>"
            conteudo += "<td>"+ n+" - "+i+" = "+(n-i) +"</td>"
            conteudo += "</tr>"

            // Guardando o valores em um array de objetos
            // que representa a tabuada.
            var tabuada = new Tabuada(n, i, "-", n - i);
            array_da_tabuada[i - 1] = tabuada
           
        }
        else if(op == "x"){
            conteudo += "<tr>"
            conteudo += "<td>" + n+" x "+i+" = "+(n*i) + "</td>"
            conteudo += "</tr>"  

            // Guardando o valores em um array de objetos
            // que representa a tabuada.
            var tabuada = new Tabuada(n, i, "*", n * i);
            array_da_tabuada[i - 1] = tabuada
        }
        else if(op == "/"){
            conteudo += "<tr>"
            conteudo += "<td>" + n+" / "+i+" = "+(n/i) +"</td>"
            conteudo += "</tr>"

            // Guardando o valores em um array de objetos
            // que representa a tabuada.
            var tabuada = new Tabuada(n, i, "/", n / i);
            array_da_tabuada[i - 1] = tabuada
        }
        
    }

    // Adicionando a tabela.
    tabela.innerHTML = conteudo;
    // Tornando o botao visivel
    botao.style.visibility = "visible"
    // Modificando o Texto
    h1.textContent = "Estude para o Jogo"

}

// Função para começar o jogo
function comecar(){

    // Configurações iniciais
    CONTAINER.removeChild(ESCOLHA)
    JOGO.style.visibility = "visible"

    // pegando os valores
    var n1 = array_da_tabuada[contador].primeiroNumero
    var n2 = array_da_tabuada[contador].segundoNumero
    var op = array_da_tabuada[contador].operacao

    // Mudando os valores
    pontuacao.innerHTML = "<b>Pontuacao: 0</b>"
    questoes.innerHTML = n1+" "+ op +" "+n2+" = ?"


}

// Função para o a realização do jogo
function proximo(){

   var campo = document.getElementById("resposta")
   
   console.log(campo)

   var numero = parseInt(campo.value)

   if(acertou(numero)){
        atualizar()
   }else{
        game_over()
   }

}

// Verificar se acertou ou errou
function acertou(n){

    var resultado = array_da_tabuada[contador].resultado
    if(n === resultado){
        return true
    }else{
        return false
    }

}

// Função para atualizar as questoes
function atualizar(){

    // Quando o jogo estiver rodando
    var res = array_da_tabuada[contador].resultado
    score += res
    contador = contador + 1

    if(contador < 10){
        // pegando os valores
        var n1 = array_da_tabuada[contador].primeiroNumero
        var n2 = array_da_tabuada[contador].segundoNumero
        var op = array_da_tabuada[contador].operacao
        

        // Atualizando de fato
        pontuacao.innerHTML = "<b>Pontuacao: "+score+"</b>"
        questoes.innerHTML = n1+" "+ op +" "+n2+" = ?"
        campo.value = ""
        
    }else{
        // Quando o jogo chegou ao fim
        ganhou()

    }

}
// Função para game over
function game_over(){
    var texto = ""

    CONTAINER.removeChild(JOGO)
    MENSAGEM.style.visibility = 'visible'

    // Mensagem
    texto += "<h2>Você Perdeu!</h2>"
    texto += "<p>Não desanime não! Você pode tentar novamente!</p>"


    // Botões
    texto += "<a class='botao' href='#' onclick='location.reload()'>Tentar Novamente</a>"
    texto += "<a class='botao' href='index.html'>Ir Para o Menu</a>"

    // Inserindo o conteudo
    MENSAGEM.innerHTML = texto
}

function ganhou(){

    var texto = ""

    CONTAINER.removeChild(JOGO)
    MENSAGEM.style.visibility = 'visible'

    // Mensagem
    texto += "<h2>Você Ganhou!</h2>"
    texto += "<p>Parabens! Você pode treinar novamente ou ir para o menu</p>"


    // Botões
    texto += "<a class='botao' href='#' onclick='location.reload()'>Tentar Novamente</a>"
    texto += "<a class='botao' href='index.html'>Ir Para o Menu</a>"

    // Inserindo o conteudo
    MENSAGEM.innerHTML = texto

}

// Função de Construção do objeto tabuada
function Tabuada(primeiroNumero, segundoNumero, operacao, resultado) {
   
    this.primeiroNumero = primeiroNumero;
    this.segundoNumero = segundoNumero;
    this.operacao = operacao;
    this.resultado = resultado;

}

