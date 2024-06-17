function Usuario(){
var valorNome = document.getElementById("usuario").value;
if(valorNome == ""){
alert("Insira um nome para jogar");
} else {
   var Segundapg = window.open('http://127.0.0.1:5500/pagina%202.html', '_self');
   Segundapg.document.write('<h1>Boas vindas ' + valorNome + '!</h1>');
   Segundapg.document.write('<input type="text">');
   Segundapg.document.write('<button>Adivinhar</button>');
   Segundapg.document.close();
   
}


}
