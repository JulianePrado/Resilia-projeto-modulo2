function logar() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById ('senha'). value;

    if(email== "admin" && senha == "admin"){
        alert("Acesso concluído");
        location.href = "index.html";
    }else{
        alert ('Email ou senha incorretos');
    }
}
