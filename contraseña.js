function contraseña() {
    var usuario = document.getElementById("Usuario").value;
    var contraseña = document.getElementById("Contraseña").value;

    if (usuario == "Josue" && contraseña == "2006") {
        swal("Bienvenido", "Acceso concedido", "success")
        .then(() => {
            window.location = "inicio.html";
        });
    } else {
        swal("Acceso denegado", "Usuario o Contraseña Incorrecto", "error");
    }
    
 

}