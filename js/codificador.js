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
