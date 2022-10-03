function copy() {
    const content = document.getElementById("textoSalida")
    if (content.value=="") return
    content.select();
    document.execCommand("copy");
    //document.getElementById("copytext").innerHTML = "Copiado"
}

var modoVariable

function start() {
    document.getElementById("textoEntrada").value = ""
    document.getElementById("correr").value = "0"
    limpiar()
    printLog("Iniciando código...", "info")
    try {
        document.getElementById("codificar").checked = true
        const deco = document.getElementById("descodificar")
        modoVariable = false
        deco.addEventListener("change", function () { modoVariable = deco.checked; codificar() })
        const co = document.getElementById("codificar")
        co.addEventListener("change", function () { modoVariable = deco.checked; codificar() })
        const claveModo = document.getElementById("visibilidadPssw")
        claveModo.checked = false
        claveModo.addEventListener("change", function () {
            if (document.getElementById("visibilidadPssw").checked) {
                document.getElementById("clave").type = "text"
            } else {
                document.getElementById("clave").type = "password"
            }
        })
        const input = document.getElementById("textoEntrada")
        input.value = ""
        input.addEventListener("input", codificar)
        const output = document.getElementById("textoSalida")
        output.addEventListener("click", copy)
        const copyText = document.getElementById("copyText")
        copyText.addEventListener("click", copy)
        const clave = document.getElementById("clave")
        clave.value = ""
        clave.addEventListener("input", codificar)
        const correr = document.getElementById("correr")
        correr.value = ""
        correr.addEventListener("input", codificar)
        const logsButton = document.getElementById("logsbtn")
        logsButton.addEventListener("click", function(){
            toggleLogs();
            logsButton.classList.toggle("active")
        })
        printLog("Código iniciado", "success")
    } catch (e) {
        printLog("No ha sido posible iniciar el código\nError: " + e, "error")
        printLog("Dado el error detectado el codificador puede iniciarse pero no ser utilizado", "warning")
    }
    setTimeout(function () {
        printLog("CODIFICADOR INICIADO", "text")
        printLog("¿Algo no funciona como debería? Revisa aquí los errores.", "text")
    }, 1000)

}



function limpiar() {
    const resultado = document.getElementById("textoSalida")
    resultado.value = ""
    document.getElementById("copyText").classList.remove("visible")
}

function hex2a(hexx) {
    var hex = hexx.toString();
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function codificar() {
    const clave = document.getElementById("clave").value
    if (!clave || clave == "" || clave == undefined || clave == null) {
        printLog("No se ha transformado el texto porque la clave no es válida", "error")
        limpiar()
    } else {
        var message = {}

        const texto = document.getElementById("textoEntrada").value
        if (!texto) return limpiar()

        const deco = modoVariable
        var correr = document.getElementById("correr").value
        const base = 1 //document.getElementById("base").value
        const salida = 2 //document.getElementById("salida").value


        if (correr > 1024) {
            correr = 1024
            message = {
                text: "El número de letras a correr excede el límite permitido de 1024 por lo que se ha usado el valor máximo por defecto.",
                type: "info"
            }
        }
        if (!(correr >= 0)) {
            correr = 0
            message = {
                text: "El número de letras a correr no alcanza el mínimo permitido de 0 por lo que se ha usado el valor mínimo por defecto.",
                type: "info"
            }
        }

        var textoProceso = ''
        if (deco) {
            var arrayAscii = []
            if (salida == 1) {
                arrayAscii = texto.split(/ +/g)
            } else if (salida == 2) {
                var x = 0
                for (x = 0; x < texto.length; x++) {
                    arrayAscii[x] = texto.charCodeAt(x)
                }
            }
            if (base == 1) {
                var x = 0
                var n = 0
                for (x = 0; x < arrayAscii.length; x++) {
                    if (n >= clave.length) n = 0
                    arrayAscii[x] = Math.floor((arrayAscii[x] / (clave.length - n)) - clave.charCodeAt(n) - parseInt(correr))
                    n++;
                }
                arrayAscii.forEach(number => {
                    textoProceso = `${textoProceso}${String.fromCharCode(number)}`
                })
            }
            message = {
                text: "Texto descodificado con éxito",
                type: "success"
            }
        } else {
            var newText = [];
            if (base == 1) {
                var x = 0;
                var n = 0;
                var textoProceso = texto
                var newText = [];
                for (x = 0; x < textoProceso.length; x++) {
                    if (n >= clave.length) n = 0
                    newText.push(Math.floor(textoProceso.charCodeAt(x) + clave.charCodeAt(n) + parseInt(correr)) * (clave.length - n))
                    n++;
                }
            }
            if (salida == 1) {
                textoProceso = newText.join(" ")
            } else if (salida == 2) {
                var textoProcesoDos = ""
                newText.forEach(number => {
                    textoProcesoDos = `${textoProcesoDos}${String.fromCharCode(number)}`
                })
                textoProceso = textoProcesoDos
            }
            if(!message.text){
                message = {
                    text: "Texto codificado con éxito",
                    type: "success"
                }
            }
        }
        try {
            const final = textoProceso
            if (final!=="") {
                document.getElementById("copyText").classList.add("visible")
            } else {
                document.getElementById("copyText").classList.remove("visible")
            }
            document.getElementById("textoSalida").value = final
        } catch (e){
            message = {
                text: "Ha ocurrido un error en el proceso.<br>Revise los parámetros establecidos.<br>Si el error persiste constacte al desarrollador.",
                type: "error"
            }
        }
        printLog(message.text, message.type)
    }
}
















function printLog(message, type) {
    type = type.slice(0, 1);
    var logsDiv = document.getElementById("logs")
    const ahora = new Date(Date.now())
    date = `<p class="date">[${ahora.getHours() < 10 ? `0${ahora.getHours()}` : `${ahora.getHours()}`}:${ahora.getMinutes() < 10 ? `0${ahora.getMinutes()}` : `${ahora.getMinutes()}`}:${ahora.getSeconds() < 10 ? `0${ahora.getSeconds()}` : `${ahora.getSeconds()}`}]</p>`
    var msg
    if (type == "e") {
        msg = `<div class="e">${date}<div><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path><path d="m14 10-4 4m0-4 4 4-4-4Z"></path></svg></div><p>${message}</p></div>`
    } else if (type == "i") {
        msg = `<div class="i">${date}<div><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></svg></div><p>${message}</p></div>`
    } else if (type == "s") {
        msg = `<div class="s">${date}<div><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path><path d="m9 12 2 2 4-4"></path></svg></div><p>${message}</p></div>`
    } else if (type == "t") {
        msg = `<div class="t">${date}<p>${message}</p></div>`
    } else if (type == "w") {
        msg = `<div class="w">${date}<div><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 21V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8l-4 4Z"></path><path d="M12 8v3"></path><path d="M12 14v.01"></path></svg></div><p>${message}</p></div>`
    }
    if ( document.getElementById("logs").innerHTML == "" || !(document.getElementById("logs").firstChild.childNodes[Math.floor(document.getElementById("logs").firstChild.childNodes.length-1)].innerHTML == message && document.getElementById("logs").firstChild.className == type)) {
        logsDiv.innerHTML = msg + logsDiv.innerHTML
    } else {
        var times = document.getElementById("logs").firstChild.firstChild.innerHTML.split("x")[1]
        if (!times) {times = 1} else {times = parseInt(times)}
        document.getElementById("logs").firstChild.firstChild.innerHTML = `[${ahora.getHours() < 10 ? `0${ahora.getHours()}` : `${ahora.getHours()}`}:${ahora.getMinutes() < 10 ? `0${ahora.getMinutes()}` : `${ahora.getMinutes()}`}:${ahora.getSeconds() < 10 ? `0${ahora.getSeconds()}` : `${ahora.getSeconds()}`}]<br>x${Math.floor(times+1)}`
    }
}

function toggleLogs() {document.getElementsByClassName("logsWindow")[0].classList.toggle("visible")}

function clearLogs() {
    document.getElementById("logs").innerHTML = "";
    printLog("Se ha limpiado el historial de logs", "info")
}

function go(page, newTabBoolean) {
    if (page.startsWith(":")) page = page.replace(":", "https://gacarbla.github.io/")
    if (newTabBoolean) {
      window.open(`${page}`, "GΛCΛRBLΛ", "width=1080, height=440")
    } else {
      window.location = `${page}`
    }
  }