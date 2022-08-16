/*
function copy() {
    var content = document.getElementById("textoSalida")
    content.select();
    document.execCommand("copy");
}

function campoBlur(campo) {
    if (!campo) return;
    var valor = document.getElementById(campo).value;
    if (valor !== "") {
        document.getElementById(`${campo}Label`).className = "filled"
    } else {
        document.getElementById(`${campo}Label`).className = "label"
    }
}

function hex2a(hexx) {
    var hex = hexx.toString();
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function limpiar() {
    const resultado = document.getElementById("textoSalida")
    resultado.value = ""
}

function codificar() {

    const clave = document.getElementById("clave").value
    if (!clave || clave == "" || clave == undefined || clave == null) {
        document.getElementById("textoEntrada").disabled = true
    } else {
        document.getElementById("textoEntrada").disabled = false
    }

    const texto = document.getElementById("textoEntrada").value
    if (!texto) return limpiar()

    if (!clave) return limpiar()

    const deco = document.getElementById("check").checked
    var correr = document.getElementById("correr").value
    const base = document.getElementById("base").value
    const salida = document.getElementById("salida").value

    if (correr > 1024) correr = 1024
    if (correr < 1024) correr = 0

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
    }
    const final = textoProceso
    document.getElementById("textoSalida").value = final
}
*/

function copy() {
    var content = document.getElementById("textoSalida")
    content.select();
    document.execCommand("copy");
    document.getElementById("copytext").innerHTML = "Copiado"
}

function scrollToSection(number) {
    document.getElementById("scroll").scrollTo(0, Math.floor(innerHeight * number))
}

var modoVariable

function start() {
    scrollToSection(0)
    document.getElementById("textoEntrada").value = ""
    document.getElementById("correr").value = "0"
    limpiar()
    printLog("Iniciando código...", "info")
    try {
        const modo = document.getElementById("modoCodificacion")
        modoVariable = false
        modo.addEventListener("click", function () {
            if (modoVariable) {
                modoVariable = false
                document.getElementById("descodificarVector").classList = [""]
                document.getElementById("codificarVector").classList = ["active"]
                document.getElementById("modoCodificacionText").innerHTML = "Codificar"
            } else {
                modoVariable = true
                document.getElementById("descodificarVector").classList = ["active"]
                document.getElementById("codificarVector").classList = [""]
                document.getElementById("modoCodificacionText").innerHTML = "Descodificar"
            }
        })
        const claveModo = document.getElementById("toggleVisibility")
        claveModo.addEventListener("click", function () {
            if (document.getElementById("clave").type == "text") {
                document.getElementById("clave").type = "password"
                document.getElementById("mostrarClave").classList = [""]
                document.getElementById("ocultarClave").classList = ["active"]
            } else {
                document.getElementById("clave").type = "text"
                document.getElementById("mostrarClave").classList = ["active"]
                document.getElementById("ocultarClave").classList = [""]
            }
        })
        const clickToCopy = document.getElementById("clickToCopy")
        clickToCopy.addEventListener("click", copy)
        printLog("Código iniciado", "success", true)
    } catch (e) {
        printLog("No ha sido posible iniciar el código\nError: " + e, "error", true, false)
    }
    setTimeout(function () {
        printLog("CODIFICADOR INICIADO", "text", true)
        printLog("¿Algo no funciona como debería? Revisa aquí los errores.", "text", false, true)
    }, 1000)

}



function limpiar() {
    const resultado = document.getElementById("textoSalida")
    resultado.value = ""
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
        var message = ""

        const texto = document.getElementById("textoEntrada").value
        if (!texto) return limpiar()

        const deco = modoVariable
        var correr = document.getElementById("correr").value
        const base = 1 //document.getElementById("base").value
        const salida = 2 //document.getElementById("salida").value


        if (correr > 1024) correr = 1024
        if (correr < 0) correr = 0

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
            message = {
                text: "Texto codificado con éxito",
                type: "success"
            }
        }
        try {
            const final = textoProceso
            document.getElementById("textoSalida").value = final
            document.getElementById("copytext").innerHTML = "Haz click para copiar"
            scrollToSection(2)
            document.getElementById("textoEntrada").value = ""
        } catch {
            message = {
                text: "Ha ocurrido un error en el proceso.<br>Revise los parámetros establecidos.<br>Si el error persiste constacte al desarrollador.",
                type: "error"
            }
        }
        printLog(message.text, message.type, false, true)
    }
}
















function printLog(message, type, newLine, separador) {
    var logsDiv = document.getElementById("logs")
    const ahora = new Date(Date.now())
    message = `<span style="font-size: 12px; color: #fff">[${ahora.getHours() < 10 ? `0${ahora.getHours()}` : `${ahora.getHours()}`}:${ahora.getMinutes() < 10 ? `0${ahora.getMinutes()}` : `${ahora.getMinutes()}`}:${ahora.getSeconds() < 10 ? `0${ahora.getSeconds()}` : `${ahora.getSeconds()}`}]</span> ${message}`
    //if (document.getElementById("logs").lastChild == null || document.getElementById("logs").lastChild.innerHTML !== message) {
    if (type == "error") {
        message = `<p style="color: #f00a">${message}</p>`
    } else if (type == "info") {
        message = `<p style="color: #00b7ffbb">${message}</p>`
    } else if (type == "success") {
        message = `<p style="color: #0f0a">${message}</p>`
    } else if (type == "text") {
        message = `<p style="color: #fffc">${message}</p>`
    }
    if (newLine) {
        message = message + "<br>"
    } else if (separador) {
        message = message + "<hr>"
    }

    logsDiv.innerHTML = message + logsDiv.innerHTML
    //} else {

    //}
}