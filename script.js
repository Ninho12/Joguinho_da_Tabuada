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

    for(var i = 1; i <= 10; i++){

        if(op == "+"){
            conteudo += "<tr>"
            conteudo += "<td>"+ n+" + "+i+" = "+(n+1)+"</td>"
            conteudo += "</tr>"  
        }
        else if(op == "-"){
            conteudo += "<tr>"
            conteudo += "<td>"+ n+" - "+i+" = "+(n-1) +"</td>"
            conteudo += "</tr>"
        }
        else if(op == "x"){
            conteudo += "<tr>"
            conteudo += "<td>" + n+" x "+i+" = "+(n*1) + "</td>"
            conteudo += "</tr>"  
        }
        else if(op == "/"){
            conteudo += "<tr>"
            conteudo += "<td>" + n+" / "+i+" = "+(n/1) +"</td>"
            conteudo += "</tr>"
        }


        
    }

}