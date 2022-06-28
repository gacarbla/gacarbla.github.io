var textos = {
    shorInfo: "Prueba de texto corto"
}

var trustPage = [
    "GW",
    "#AboutMe",
]

var trustDomain = [
    "https://gacarbla.github.io",
    "https://github.com/gacarbla",
    "https://github.com/gatitosworld"
]



function copyOption(boolean) {
    if (boolean=="toggle" || boolean == undefined) {
        if(document.oncopy()==undefined){
            document.oncopy = function () { return false }
            return "Se ha desactivado la opción de copiar en la página"
        } else {
            document.oncopy = function () { }
            return "Se ha activado la opción de copiar en la página"
        }
    } else if (typeof boolean !== "boolean") {
        console.error("Es necesario introducir un valor booleano")
        return "Error"
    } else if (boolean) {
        document.oncopy = function () { }
        return "Se ha activado la opción de copiar en la página"
    } else {
        document.oncopy = function () { return false }
        return "Se ha desactivado la opción de copiar en la página"
    }
}

function rightClick(boolean) {
    if (boolean=="toggle" || boolean == undefined) {
        if(document.oncontextmenu()==undefined){
            document.oncontextmenu = function () { return false }
            return "Se ha habilitado el click derecho en la página"
        } else {
            document.oncontextmenu = function () { }
            return "Se ha deshabilitado el click derecho en la página"
        }
    } else if (boolean == undefined || (typeof boolean !== "boolean")) {
        console.error("Es necesario introducir un valor booleano")
        return "Error"
    } else if (boolean) {
        document.oncontextmenu = function () { }
        return "Se ha habilitado el click derecho en la página"
    } else {
        document.oncontextmenu = function () { return false }
        return "Se ha deshabilitado el click derecho en la página"
    }
}

function light() {
    window.alert("Esta función es experimental y CAUSA ERRORES en la página")
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

function reload() { location.reload() }

function checkPage(page){
    if (trustPage.includes(page)) return false
    var warn = true
    trustDomain.forEach( (domain) => {
        if (page.startsWith(domain)){
            warn = false
        }
    })
    return warn
}

function go(page) {
    if (!page || (typeof page !== "string")) {
        console.error("¡Es necesario especificar un destino válido!")
        return "Error"
    } else {
        if (checkPage(page)) {
            console.warn("Redirección a una página externa detectada.\n¡Es necesario confirmar la acción!")
            window.alert("Se ha detectado que un enlace desea llevarte a una página externa.\nSerás redirigid@ a la siguiente url:\n" + page)
        }
        location.href = page
        return "Éxito"
    }
}

function newTab(page) {
    if (!page || (typeof page !== "string")) {
        var win = window.open("https://google.com", "_blank");
        win.focus();
        console.error("¡Es necesario especificar un destino válido!")
        return "Error"
    } else {
        if (checkPage(page)) {
            console.warn("Redirección a una página externa detectada.\n¡Es necesario confirmar la acción!")
            window.alert("Se ha detectado que un enlace desea llevarte a una página externa.\nSe abrirá una nueva pestaña con la siguiente url:\n" + page)
        }
        var win = window.open(page, '_blank');
        try {
            win.focus();
        } catch {
            window.alert("Tu navegador ha bloqueado el link y no ha permitido abrir una nueva pestaña.")
        } finally {
            return "Éxito"
        }
    }
}

function loading(boolean) {
    if (boolean == undefined || (typeof boolean !== "boolean")) {
        console.error("Es necesario introducir un valor booleano")
        return "Error"
    } else if (boolean) {
        document.getElementById("body").classList.add("loadingBody")
        document.getElementById("loader").className = "loaderEnabled"
        return "Activada pantalla de carga"
    } else {
        document.getElementById("body").classList.remove("loadingBody")
        document.getElementById("loader").className = "loaderUnabled"
        return "Desactivada pantalla de carga"
    }
}

function load() {
    console.clear()
    copyOption(false)
    rightClick(false)
    console.log("¡Usa la función help() para obtener ayuda!")
    setTimeout(function () { loading(false) }, 1000)
    window.addEventListener('resize', resize);
}

function resize() {
    if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/WebOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){
        if (screen.width<screen.height){
            if (!document.getElementById("body").classList.contains("mobile")){
                document.getElementById("body").classList.add("mobile")
            }
        } else {
            if (document.getElementById("body").classList.contains("mobile")){
                document.getElementById("body").classList.remove("mobile")
            }
        }
    } else {
        if (document.getElementById("body").classList.contains("mobile")){
            document.getElementById("body").classList.remove("mobile")
        }
    }
}

function developerMenu(boolean){
    document.getElementById("devMenu").hidden = boolean
    if (document.oncontextmenu()==undefined){
      document.getElementById("rightClick").innerHTML = "Desactivar click derecho"
    } else {
      document.getElementById("rightClick").innerHTML = "Activar click derecho"
    }
    if (document.oncopy()==undefined){
      document.getElementById("copy").innerHTML = "Desactivar copiar"
    } else {
      document.getElementById("copy").innerHTML = "Activar copiar"
    }
}

function help() {
    var helpText = "¡Bienvenid@!\nTe presento la consola de GΛCΛRBLΛ DOCUMENTS, dónde podrás experimentar una nueva experiencia con posibilidades casi infinitas.\n\n\n"
    var cmdlist = [
        "dark() ---------------- Activa el modo oscuro",
        "go(page) ------------ Viaja a una página sin intermediarios",
        "light() --------------- Activa el modo claro",
        "newTab(page) ---------- Crea una nueva pestaña en el buscador",
        "reload() -------------- Recarga la página",
        "-----------------------------------------------------------------------",
        "copyOption(boolean) --- Activa o desactiva la posibilidad de copiar",
        "loading(boolean) ------ Activa o desactiva la pantalla de carga",
        "rightClick(boolean) --- Activa o desactiva el click derecho",
    ]
    console.clear()
    console.log(`\n${helpText}${cmdlist.join("\n")}\n`)
}