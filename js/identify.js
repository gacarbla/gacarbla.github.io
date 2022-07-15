function campoBlur(campo){
    if (!campo) return; 
    var valor = document.getElementById(campo).value;
    if (valor!==""){
        document.getElementById(`${campo}Label`).className = "filled"
    } else {
        document.getElementById(`${campo}Label`).className = "label"
    }
}

function logIn() {
    document.getElementById("signUp").hidden = true
    document.getElementById("LogIn").hidden = false
    document.getElementById("dereita").className = "activo"
    document.getElementById("izquierda").className = "inactivo"
}

function signUp() {
    document.getElementById("signUp").hidden = false
    document.getElementById("LogIn").hidden = true
    document.getElementById("dereita").className = "inactivo"
    document.getElementById("izquierda").className = "activo"
}

function errorsignUp() {
    window.alert("No posees los permisos necesarios para crear una cuenta")
}

function errorLogIn() {
    window.alert("No se ha encontrado ninguna cuenta con este nombre de usuario")
}