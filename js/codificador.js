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
    document.getElementById("sol").addEventListener("click", function () { document.getElementById("body").className = "claro" })
    document.getElementById("luna").addEventListener("click", function () { document.getElementById("body").className = "oscuro" })
    document.getElementById("claveOculta").addEventListener("click", function () {
        document.getElementById("clave").type = "text";
        document.getElementById("claveOculta").classList.add("Off");
        document.getElementById("claveVisible").classList.remove("Off");
    })
    document.getElementById("claveVisible").addEventListener("click", function () {
        document.getElementById("clave").type = "password";
        document.getElementById("claveOculta").classList.remove("Off");
        document.getElementById("claveVisible").classList.add("Off");
    })
    document.getElementById("gear").addEventListener("click", function () {
        if (document.getElementById("avanzados").classList.contains("Off")) {
            document.getElementById("avanzados").classList.remove("Off");
        } else {
            document.getElementById("avanzados").classList.add("Off");
        }

    })
    document.getElementById("slider").addEventListener("mousemove", function () { document.getElementById("sliderNumber").value = document.getElementById("slider").value })
    document.getElementById("sliderNumber").addEventListener("change", function () { document.getElementById("slider").value = document.getElementById("sliderNumber").value })
    document.getElementById("transformar").addEventListener("click", function () { codificar() })
    document.oncontextmenu = function () { return false }
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

function codificar() {

    const texto = document.getElementById("textoEntrada").value
    if (!texto) return window.alert("No se puede proceder sin especificar un texto")

    const clave = document.getElementById("clave").value
    if (!clave) return window.alert("No se puede proceder sin especificar una clave")
    if (clave.length < 8) return window.alert("Es necesario una clave de 8 o más caracteres")

    const deco = document.getElementById("check").checked
    const capas = document.getElementById("sliderNumber").value
    const correr = document.getElementById("correr").value
    const base = document.getElementById("base").value
    const salida = document.getElementById("salida").value

    if(base==3 && salida!==3) return window.alert("La conbinación de Base-Salida que has escogino no es compatible con el algoritmo")

    
    var textoProceso = ''
    if (deco) {
        if(caoas>1) return window.alert("Por el momento la función de descodificación mensajes con capas no está disponible")
        var arrayAscii = []
        if(salida==1){
            arrayAscii = texto.split(/ +/g)
        } else if (salida==2){
            var x = 0
            for(x=0;x<texto.length;x++){
                arrayAscii[x] = texto.charCodeAt(x)
            }
        }
        if(base==1){
            var x = 0
            var n = 0
            for (x=0;x<arrayAscii.length;x++){
                if (n >= clave.length) n = 0
                arrayAscii[x] = Math.floor((arrayAscii[x]/(clave.length-n))-clave.charCodeAt(n)-parseInt(correr))
                n++;
            }
            arrayAscii.forEach(number=>{
                textoProceso = `${textoProceso}${String.fromCharCode(number)}`
            })
        }
    } else {
        var newText = [];
        if (base == 1) {
            var x = 0;
            var y = 0;
            var n = 0;
            var textoProceso = texto
            for(y=0;y<capas;y++){
                var newText = [];
                for (x = 0; x < textoProceso.length; x++) {
                    if (n >= clave.length) n = 0
                    newText.push(Math.floor(textoProceso.charCodeAt(x) + clave.charCodeAt(n) + parseInt(correr)) * (clave.length - n))
                    n++;
                }
                if(Math.floor(capas-y)>1){
                    var textoProcesoDos = ""
                    newText.forEach(number => {
                        textoProcesoDos = textoProcesoDos+String.fromCharCode(number)
                    })
                }
            }
        }
        if ( salida == 1 ) {
            textoProceso = newText.join(" ")
        } else if ( salida == 2 ) {
            var textoProcesoDos = ""
            newText.forEach( number => {
                textoProcesoDos = `${ textoProcesoDos }${ String.fromCharCode( number ) }`
            })
            textoProceso = textoProcesoDos
        }
    }
    const final = textoProceso
    document.getElementById("textoSalida").value = final
}