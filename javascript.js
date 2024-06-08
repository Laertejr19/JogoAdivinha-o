function Usuario(){
const Nome = toString(document.getElementById("usuario").value);

if(Nome == ""){
alert("Insira um nome para jogar");
} else {
    window.open("http://127.0.0.1:5500/pagina%202.html");
}

}