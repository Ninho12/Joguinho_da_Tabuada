/*
    Arquivo responsavel por toda a logica do
    joguinho da tabuada.

    Vou criar 4 funções relacionada as operações que vai
    executar todos os calculos.
*/


// Iniciando constantes importantes no jogo.

const ESCOLHA = document.getElementById("escolha")
const JOGO = document.getElementById("jogo")
const MENSAGEM = document.getElementById("mensagem")


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
        }
        else if(op == "-"){
            conteudo += "<tr>"
            conteudo += "<td>"+ n+" - "+i+" = "+(n-i) +"</td>"
            conteudo += "</tr>"
        }
        else if(op == "x"){
            conteudo += "<tr>"
            conteudo += "<td>" + n+" x "+i+" = "+(n*i) + "</td>"
            conteudo += "</tr>"  
        }
        else if(op == "/"){
            conteudo += "<tr>"
            conteudo += "<td>" + n+" / "+i+" = "+(n/i) +"</td>"
            conteudo += "</tr>"
        }
        
    }

    // Adicionando a tabela.
    tabela.innerHTML = conteudo;
    // Tornando o botao visivel
    botao.style.visibility = "visible"
    // Modificando o Texto
    h1.textContent = "Estude para o Jogo"
    
}