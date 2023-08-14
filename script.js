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

    CONTAINER.removeChild(ESCOLHA)
    JOGO.style.visibility = "visible"

}

// Função para o a realização do jogo
function proximo(){

   

}




// Função de Construção do objeto tabuada
function Tabuada(primeiroNumero, segundoNumero, operacao, resultado) {
   
    this.primeiroNumero = primeiroNumero;
    this.segundoNumero = segundoNumero;
    this.operacao = operacao;
    this.resultado = resultado;

}

