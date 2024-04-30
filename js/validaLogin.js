const usuario = localStorage.getItem("cliente.login");

if(!usuario){
    window.location.href = "/index.html"
}

