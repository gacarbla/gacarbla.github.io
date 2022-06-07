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
    if (!page) {
        window.alert("Se ha producido un error")
    } else {
        document.getElementById("column3").className = "column3out"
        document.getElementById("column4").className = "column4out"
        setTimeout(function () {
            window.location = (`${page}`);
        }, 1000)
        setTimeout(function () {
            document.getElementById("column3").className = "column3out"
            document.getElementById("column4").className = "column4out"
            window.location = (`${window.location}`);
        }, 3000)
    }
}

function copyCode(id) {
    if (!id) {
        window.alert("Se ha producido un error copiando el texto")
    } else {
        var text = document.getElementById(`${id}`)
        text.select()
        document.execCommand("copy")
        return "Se ha copiado el texto solicitado y se encuentra ahora en el portapapeles"
    }
}

function load() {
    carga = true
    windowSize();
    window.addEventListener('resize', windowSize);
    return "Recargando la página"
}

function windowSize() {
    var variable = false
    var width = document.documentElement.clientWidth
    var height = document.documentElement.clientHeight
    if (oldHeigh == 0 || oldWidth == 0 || oldHeigh == width || oldWidth == height) {
        oldHeigh = height
        oldWidth = width
        variable = true
    }
    if (carga || warnedConsole || variable) {
        if (height > width) {
            document.getElementById("page").className = "pagem"
            document.getElementById("header").classList.add("visible")
        } else {
            document.getElementById("page").className = "page"
            document.getElementById("header").classList.remove("visible")
        }
        setTimeout(function () {
            carga = false
        }, 1000)
    } else {
        var u = navigator.userAgent;
        if (!warnedConsole && u.includes("Windows")) {
            console.log("run")
            warnedConsole = true
            page = document.getElementById("page")
            var random = Math.floor(Math.random() * 10)
            console.log(random)
            if (random > 6) page.innerHTML = `<div id="ventana"><div class ="window" id="window"><div class="content"><div class="text"><p class="description">¿Sabías que la terminal es una herramienta en esta página?\nSi es usted un interesado puede acceder a nuestra <a href="https://gacarbla.github.io/cmdDocs"> documentación de la consola</a>.</p></div><button onclick="cerrarVentana()">ACEPTAR</button></div></div></div>` + page.innerHTML
        }
    }
    return "Iniciado sistema automático de detección de cambios de pantalla"
}

function cerrarVentana() {
    try {
        if (document.getElementById("ventana").hidden) {
            return "La ventana ya está cerrada"
        } else {
            document.getElementById("ventana").hidden = "true"
            return "La ventana ha sido cerrada"
        }
    } catch {
        return "La ventana no ha sido creada aún"
    }
}

function cmdDosc(page) {
    pages = {
        1: {
            name: "",
            url: ""
        },
    }

    if (!page) {
        console.error(error_working)
    } else {
        console.error(error_working)
    }
    return 1
}

function helpCmd(command) {
    console.error(error_working)
}

function help() {
    console.error(error_working)
}