function load() {
    var menuCheck = document.getElementById("mobileMenu")
    menuCheck.checked = false
    var menu = document.getElementById("menu")
    menuCheck.addEventListener("change", function () {
        if (menuCheck.checked) {
            menu.className = "visible"
        } else {
            menu.className = ""
        }
    })
    document.getElementById("sol").addEventListener("click", function(){ document.getElementById("body").className = "claro" })
    document.getElementById("luna").addEventListener("click", function(){ document.getElementById("body").className = "oscuro" })
    document.oncontextmenu = function () { return false }
}

function campoBlur(campo){
    if (!campo) return; 
    var valor = document.getElementById(campo).value;
    if (valor!==""){
        document.getElementById(`${campo}Label`).className = "filled"
    } else {
        document.getElementById(`${campo}Label`).className = "label"
    }
}