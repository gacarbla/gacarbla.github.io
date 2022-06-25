function enableRightClick() {
    document.oncontextmenu = function(){}
    return "Se ha deshabilitado el click derecho en la página"
}

function disableRightClick() {
    document.oncontextmenu = function(){return false}
    return "Se ha deshabilitado el click derecho en la página"
}

function enableCopy() {
    document.oncopy = function(){}
    return "Se ha activado la opción de copiar en la página"
}
function disableCopy() {
    document.oncopy = function(){return false}
    return "Se ha desactivado la opción de copiar en la página"
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

function reload() { location.reload() }
function goto(page) {
    if (!page || (typeof page!=="string")) {
        console.error("¡Es necesario especificar un destino válido!")
        return "Error"
    } else {
        if (!page.startsWith("https://gacarbla.github.io") && !page.startsWith("https://github.com/gacarbla")){
            console.warn("Redirección a una página externa detectada.\n¡Es necesario confirmar la acción!")
            window.alert("Se ha detectado que un enlace desea llevarte a una página externa.\nSerás redirigid@ a la siguiente url:\n"+page)
        }
        location.href=page
        return "Éxito"
    }
}

function newTab(page) {
    if (!page || (typeof page!=="string")) {
        var win = window.open("https://google.com", "_blank");
        win.focus();
        console.error("¡Es necesario especificar un destino válido!")
        return "Error"
    } else {
        if (!page.startsWith("https://gacarbla.github.io") && !page.startsWith("https://github.com/gacarbla")){
            console.warn("Redirección a una página externa detectada.\n¡Es necesario confirmar la acción!")
            window.alert("Se ha detectado que un enlace desea llevarte a una página externa.\nSe abrirá una nueva pestaña con la siguiente url:\n"+page)
        }
        var win = window.open(page, '_blank');
        win.focus();
        return "Éxito"
    }
}

function load() {
    console.clear()
    disableCopy()
    disableRightClick()
    document.getElementById("body").classList.add("loaded")
    console.log("¡Usa la función help() para obtener ayuda!")
}

function help() {
    var helpText = "¡Bienvenid@!\nTe presento la consola de GΛCΛRBLΛ DOCUMENTS, dónde podrás experimentar una nueva experiencia con posibilidades casi infinitas.\n\n\n"
    var cmdlist = [
        "dark() ---------------- Activa el modo oscuro",
        "disableCopy() --------- Desactiva la opción de copiar contenido de la página",
        "disableRightClick() --- Desactiva el click derecho en la página",
        "enableCopy() ---------- Activa la opción de copiar contenido de la página",
        "enableRightClick() ---- Activa el click derecho en la página",
        "goto(page) ------------ Viaja a una página sin intermediarios",
        "light() --------------- Activa el modo claro",
        "newTab(page) ---------- Crea una nueva pestaña en el buscador",
        "reload() -------------- Recarga la página",
    ]
    console.clear()
    console.log(`\n${helpText}${cmdlist.join("\n")}\n`)
}