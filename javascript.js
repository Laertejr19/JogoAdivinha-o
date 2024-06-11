function Usuario(){
var valorNome = document.querySelector("#usuario").value;
if(valorNome == ""){
alert("Insira um nome para jogar");
} else {
    window.open("http://127.0.0.1:5500/pagina%202.html");
}
}