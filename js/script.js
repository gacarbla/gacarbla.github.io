var carga = true
var warnedConsole = false
var oldWidth = 0
var oldHeigh = 0


var error_working = "Lo sentimos, estamos trabajando en esto y por el momento no está dispoible esta función."



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

function goPage(page) {
    if(!page){
        window.alert("Se ha producido un error")
    } else {
        document.getElementById("column3").className = "column3out"
        document.getElementById("column4").className = "column4out"
        setTimeout(function(){
            window.location = (`${page}`);
        }, 1000)
        setTimeout(function(){
            document.getElementById("column3").className = "column3out"
            document.getElementById("column4").className = "column4out"
            window.location = (`${window.location}`);
        }, 3000)
    }
}

function copyCode(id) {
    if(!id){
        window.alert("Se ha producido un error copiando el texto")
    } else {
        var text = document.getElementById(`${id}`)
        text.select()
        document.execCommand("copy")
        return "Se ha copiado el texto solicitado y se encuentra ahora en el portapapeles"
    }
}

function load(){
    carga = true
    windowSize();
    window.addEventListener('resize', windowSize);
    return "Recargando la página"
}

function windowSize(){
    var variable = false
    var width = document.documentElement.clientWidth
    var height = document.documentElement.clientHeight
    if (oldHeigh==0 || oldWidth==0 || oldHeigh==width || oldWidth==height ) {
        oldHeigh=height
        oldWidth=width
        variable = true
    }
    if(carga || warnedConsole || variable){
        if(height>width){
            document.getElementById("page").className = "pagem"
        } else {
            document.getElementById("page").className = "page"
        }
        setTimeout(function(){
            carga = false
        }, 1000)
    } else {
        if(!warnedConsole) {
            warnedConsole = true
            window.alert("Se ha detectado el uso de la consola para la manipulación de la página. Se ruega a los usuarios que utilicen este medio, lean la documentación de uso de la consola.\nSi deseas saber cómo acceder a esta, use en la consola el comando cmdDocs()")
        }
    }
    return "Iniciado sistema automático de detección de cambios de pantalla"
}

function cmdDosc(page) {
    pages = {
        1: {
            name: "",
            url: ""
        },
    }

    if(!page){
        
    } else {
        return error_working
    }
}

function helpCmd(command) {

}

function help() {

}