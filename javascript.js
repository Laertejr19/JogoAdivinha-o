function Usuario() { //Aqui eu preparo para criar minha nova função chamada Usuario.
var valorNome = document.getElementById("usuario").value; //Aqui eu pego o valor inserido no campo usuario
    if (valorNome == "") {  //Aqui eu condiciono, caso o usuario não digite nada,
        alert("Insira um nome para jogar"); //Aqui eu uso um alerta que aparecera a mensagem alertando.
    } else { //Aqui eu dou a instrução do que fazer caso o usuario insira o nome.
        var Segundapg = window.open('http://127.0.0.1:5500/pagina%202.html', '_self'); //Aqui eu dou a instrução para abrir uma nova pagina enquanto declaro como Segundapg pra facilitar o entendimento.
        Segundapg.document.write('<h1>Boas vindas ' + valorNome + '!</h1>'); //Aqui eu chamo o meu elemento declarado, enquanto uso o método write que me permite colocar texto no html dessa pagina, enquanto complemento com o nome da pessoa inserido.
        Segundapg.document.write('<h1>O Jogo consiste em tentar acertar o número correto, vamos ver em quantas tentativas você acerta?</h1>'); //Aqui é a mesma técnica do código anterior pra introduzir o usuario sobre o jogo.
        Segundapg.document.write('<input type="text" id="adivinhar" placeholder="Tente acertar um valor">'); //aqui eu aproveito que eu só posso usar o html dentro do write e já dou um id pro campo, assim aproveitando para pegar o valor dele no futuro.
        Segundapg.document.write('<button onclick="Adivinhar()">Adivinhar</button>'); //Aqui é a mesma lógica do anterior, porém aqui eu executo a função Adivinhar que no momento que o usuario clicar no botão, ira executar a função.
        Segundapg.document.close(); //Aqui eu finalizo com close que consiste nessas linhas de código do window, write, close e etc.
        let numero = Math.floor;
     console.log(numero(Math.random() * 10));//Aqui escolhe um número aleatório para o usuario acertar.
    } //Aqui eu termino de estruturar a minha função para fazer oque quero que ela faça.
}
function Adivinhar() { //Aqui eu começo uma nova função chamada Adivinhar.
    var valorAdivinhação = document.getElementById("adivinhar").value; //Aqui eu pego o valor inserido no campo adivinhar e ao mesmo tempo nomeio ele como valorAdivinhação para simplificar.
    if (valorAdivinhação > 10) { //Aqui eu condiciono caso o valor seja maior que 100 aparecera um alerta.
        alert("Insira um número abaixo de 100!"); //Aqui eu coloco a mensagem do alerta.
    } else {//Aqui eu instruo a função oque fazer caso o usuario coloque um número valido.
        
    }
   
    if (valorAdivinhação == Math.value){
    alert("Você acertou!");
    }
}
