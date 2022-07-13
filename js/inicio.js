function campoBlur(campo){
    if (!campo) return; 
    var valor = document.getElementById(campo).value;
    if (valor!==""){
        document.getElementById(`${campo}Label`).className = "filled"
    } else {
        document.getElementById(`${campo}Label`).className = "label"
    }
}

function click(object) {
    console.log("1")
}

function logIn() {
    document.getElementById("SingUp").hidden = true
    document.getElementById("LogIn").hidden = false
    document.getElementById("dereita").className = "activo"
    document.getElementById("izquierda").className = "inactivo"
}

function singUp() {
    document.getElementById("SingUp").hidden = false
    document.getElementById("LogIn").hidden = true
    document.getElementById("dereita").className = "inactivo"
    document.getElementById("izquierda").className = "activo"
}