
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function( req, res){
    res.sendFile(path.join(__dirname+'/index.html'));                                                                                                                                                                                           
})

app.use('/', router);
app.listen(process.env.port || 3000);

console.log("Server rodando");


let respostaCategoria;
let respostaPalavra;
let tentativas = 6 ;
let lista = [];

const respostas = [
    resposta001={
        palavra : "NAZARENO",
        dica : "CIDADE"
    },
    resposta002={
        palavra : "ESPINOSA",
        dica : "CIDADE"
    },
    resposta003={
        palavra: "CRUCILANDIA",
        dica: "CIDADE"
    },
    resposta004={
        palavra: "ATALEIA",
        dica: "CIDADE"
    },
    resposta005={
        palavra: "SACRAMENTO",
        dica: "CIDADE"
    },
    resposta006={
        palavra: "FELISBURGO",
        dica: "CIDADE"
    },
    resposta007={
        palavra: "BURITIS",
        dica: "CIDADE"
    },
    resposta008={
        palavra: "JACINTO",
        dica: "CIDADE"
    },
    resposta009={
        palavra: "RUBELITA",
        dica: "CIDADE"
    },
    resposta010={
        palavra: "NINHEIRA",
        dica: "CIDADE"
    },
    resposta011={
        palavra : "CACAU",
        dica : "FRUTA"
    },
    resposta012={
        palavra : "FIGO",
        dica : "FRUTA"
    },
    resposta013={
        palavra : "CAQUI",
        dica : "FRUTA"
    },
    resposta014={
        palavra : "CUPUACU",
        dica : "FRUTA"
    },
    resposta015={
        palavra : "GROSELHA",
        dica : "FRUTA"
    },
    resposta016={
        palavra : "SIRIGUELA",
        dica : "FRUTA"
    },
    resposta017={
        palavra : "PITAYA",
        dica : "FRUTA"
    },
    resposta018={
        palavra : "TAMARINDO",
        dica : "FRUTA"
    },
    resposta019={
        palavra : "JENIPAPO",
        dica : "FRUTA"
    },
    resposta020={
        palavra : "KIWI",
        dica : "FRUTA"
    },
    resposta021={
        palavra : "BAHAMAS",
        dica : "PAIS"
    },
    resposta022={
        palavra : "CUBA",
        dica : "PAIS"
    },
    resposta023={
        palavra : "ESTONIA",
        dica : "PAIS"
    },
    resposta024={
        palavra : "GUATEMALA",
        dica : "PAIS"
    },
    resposta025={
        palavra : "MALASIA",
        dica : "PAIS"
    },
    resposta026={
        palavra : "MENTENEGRO",
        dica : "PAIS"
    },
    resposta027={
        palavra : "VATICANO",
        dica : "PAIS"
    },
    resposta028={
        palavra : "AUSTRALIA",
        dica : "PAIS"
    },
    resposta029={
        palavra : "MALDIVAS",
        dica : "PAIS"
    },
    resposta030={
        palavra : "VIETNAME",
        dica : "PAIS"
    },
    resposta030={
        palavra : "A BELA E A FERA",
        dica : "Tv e Cinema"
    },
    resposta030={
        palavra : "TELA QUENTE",
        dica : "Tv e Cinema"
    },
    resposta030={
        palavra : "O GATO DE BOTAS",
        dica : "Tv e Cinema"
    },
    resposta030={
        palavra : "PS TE AMO",
        dica : "Tv e Cinema"
    },
    resposta030={
        palavra : "A FREIRA",
        dica : "Tv e Cinema"
    },
    resposta030={
        palavra : "SESSAO DA TARDE",
        dica : "Tv e Cinema"
    },
    resposta030={
        palavra : "BOB ESPONJA",
        dica : "Tv e Cinema"
    },
    resposta030={
        palavra : "A CASA MOSNTRO",
        dica : "Tv e Cinema"
    },
    resposta030={
        palavra : "AS BRANQUELAS",
        dica : "Tv e Cinema"
    },
    resposta030={
        palavra : "VELOZES E FURIOSOS",
        dica : "Tv e Cinema"
    }
];
criarResposta();
function criarResposta(){
    const indexResposta = parseInt(Math.random() * respostas.length)
    respostaPalavra   = respostas[indexResposta].palavra;
    respostaCategoria = respostas[indexResposta].dica;
}

mostraResposta()
function mostraResposta(){
    const dica = document.getElementById("dica");
    dica.innerHTML = "DICA: " + respostaCategoria;

    const respostaTela = document.getElementById("palavra_da_vez");
    respostaTela.innerHTML = "";

    for(i= 0; i < respostaPalavra.length; i++){
        if(lista[i] == undefined){
            if(respostaPalavra[i] ==" "){
                lista[i] = " ";
                respostaTela.innerHTML = respostaTela.innerHTML + "<div class='letraEspaco'>" + lista[i] + "</div>"
            }
            else{
                lista[i] = "&nbsp;"
                respostaTela.innerHTML = respostaTela.innerHTML + "<div class='letra'>" + lista[i] + "</div>"
            }
        }
        else{
            if(respostaPalavra[i] == " "){
                lista[i] = " ";
                respostaTela.innerHTML = respostaTela.innerHTML + "<div class='letraEspaco'>" + lista[i] + "</div>"
            }
            else{
                respostaTela.innerHTML = respostaTela.innerHTML + "<div class='letra'>" + lista[i] + "</div>"
            }
        }
        
    }
}

function analisaLetra(letra){
    document.getElementById("tecla-" + letra).disabled = true; 
    if(tentativas > 0)
    {
        mudarLetra("tecla-" + letra);
        comparaLetra(letra);
        mostraResposta();
    }
}
function mostramodal(titulo, mensagem){
    let modalT = document.getElementById("exampleModalLabel");
    modalT.innerText = titulo;

    let modalM = document.getElementById("msgmodal");
    modalM.innerHTML = mensagem;
    $("#msg").modal({
        show : true
    });
}
function mudarLetra(tecla){
    document.getElementById(tecla).style.background = "#c71585";
    document.getElementById(tecla).style.color = "#ffffff";
}
function imagens(){
    switch(tentativas){
        case 5:
        document.getElementById("imagens").style.background ="url('./imagem/forca-1.jpg')";
        break;  
        case 4:
        document.getElementById("imagens").style.background ="url('./imagem/forca-2.jpg')";
        break;
        case 3:
        document.getElementById("imagens").style.background ="url('./imagem/forca-3.jpg')";
        break;
        case 2:
        document.getElementById("imagens").style.background ="url('./imagem/forca-4.jpg')";
        break;
        case 1:
        document.getElementById("imagens").style.background ="url('./imagem/forca-5.jpg')";
        break;
        case 0:
        document.getElementById("imagens").style.background ="url('./imagem/forca-6.jpg')";
        break;
        default:
        document.getElementById("imagens").style.background ="url('./imagem/forca-0.jpg')";
        break;
    }
}
function comparaLetra(letra){
    const pos = respostaPalavra.indexOf(letra)
    if(pos < 0){
        tentativas--;
        imagens();
        if(tentativas == 0){
            mostramodal("OPS!!!","Não foi dessa vez, a palavra secreta era <br>" + respostaPalavra);
        }
    }
    else{
        for(i = 0; i < respostaPalavra.length; i++){
            if(respostaPalavra[i] == letra){
                lista[i] = letra;
            }
        }
    }

    let green = true;
    for(i=0; i < respostaPalavra.length; i++){
        
        if(respostaPalavra[i] != lista[i]){
            green = false;
        }
    }
    if(green == true){

        mostramodal("PARABÉNS!!!","Você venceu ...");
        tentativas = 0;
    }
}

let recomeca = document.querySelector("#tecla-Reset")
recomeca.addEventListener("click",function(){
    location.reload();
});