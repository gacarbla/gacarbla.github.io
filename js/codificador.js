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

function scrollToSection(number) {
    document.getElementById("scroll").scrollTo(0, Math.floor(innerHeight * number))
}

function start() {
    scrollToSection(0)
    printLog("Código iniciado", "success", true)
    printLog("Iniciando lector de texto...", "info")
    try {
        const textoEntrada = document.getElementById("textoEntrada")
        textoEntrada.addEventListener("input", codificar)
        printLog("Lector de texto iniciado", "success", true)
    } catch {
        printLog("No ha sido posible iniciar el lector de texto", "error", true, false)
    }
    printLog("Iniciando lector de contraseña...", "info")
    try {
        const clave = document.getElementById("clave")
        clave.addEventListener("input", function () { codificar() })
        printLog("Lector de contraseña iniciado", "success", true)
    } catch {
        printLog("No ha sido posible iniciar el lector de contraseña", "error", true, false)
    }
    printLog("Iniciando cifrado de contraseña...", "info")
    try {
        printLog("Cifrado de contraseña iniciado", "success", true)
    } catch {
        printLog("No ha sido posible iniciar el cifrado de contraseña", "error", true, false)
    }
    setTimeout(function () {
        printLog("CODIFICADOR INICIADO", "text", true)
        printLog("¿Algo no funciona como debería?<br>Desliza hacia abajo aquí y revisa si se ha encontrado algún error.", "text", false, true)
    }, 1000)
}



function limpiar() {
    const resultado = document.getElementById("textoSalida")
    resultado.value = ""
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

        const deco = false //document.getElementById("check").checked
        var correr = 0 //document.getElementById("correr").value
        const base = 1 //document.getElementById("base").value
        const salida = 2 //document.getElementById("salida").value


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
        } catch {
            message = {
                text: "Ha ocurrido un error en el proceso.<br>Revise los parámetros establecidos.<br>Si el error persiste constacte al desarrollador.",
                type: "error"
            }
        }
        printLog(message.text, message.type)
    }
}
















function printLog(message, type, newLine, separador) {
    var logsDiv = document.getElementById("logs")
    if (document.getElementById("logs").lastChild == null || document.getElementById("logs").lastChild.innerHTML !== message) {
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
    
        logsDiv.innerHTML = logsDiv.innerHTML + message
    } else {
        
    }
}