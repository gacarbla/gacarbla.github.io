function load() {
    document.oncontextmenu = function(){return false}
    document.oncopy = function(){return false}
    document.getElementById("body").classList.add("loaded")
}

function light() {
    window.alert("Esta función es experimental y podría causar errores en la página")
    document.getElementById('body').classList.remove('dark')
    document.getElementById('body').classList.add('light')
    document.getElementById('id-moon').classList.remove('active')
    document.getElementById('id-sun').classList.add('active')
    return "Se ha activado el modo claro en la página"
}

function dark() {
    document.getElementById('body').classList.add('dark')
    document.getElementById('body').classList.remove('light')
    document.getElementById('id-sun').classList.remove('active')
    document.getElementById('id-moon').classList.add('active')
    return "Se ha activado el modo oscuro en la página"
}