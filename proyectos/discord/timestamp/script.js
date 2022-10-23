var timeFormatVariable = "t"

function recalcular() {
    const timeJSON = require("json/repo/time.json", true)
    const time = document.getElementById("time")
    var timestamp = new Date(time.value)
    var tiempo = `t:${Math.floor(timestamp.getTime() / 1000)}:${timeFormatVariable}`
    if (document.getElementById("output").innerHTML !== `&lt;${tiempo}&gt;`) {document.getElementById("output").innerHTML = `<${tiempo}>`}
    var vista = ""
    if (timeFormatVariable == "t") {
        vista = `${timestamp.getHours()}:${timestamp.getMinutes() > 9 ? timestamp.getMinutes() : `0${timestamp.getMinutes()}`}`
    } else if (timeFormatVariable == "T") {
        vista = `${timestamp.getHours()}:${timestamp.getMinutes() > 9 ? timestamp.getMinutes() : `0${timestamp.getMinutes()}`}:${timestamp.getSeconds() > 9 ? timestamp.getSeconds() : `0${timestamp.getSeconds()}`}`
    } else if (timeFormatVariable == "d") {
        vista = `${timestamp.getDate() > 9 ? timestamp.getDate() : `0${timestamp.getDate()}`}/${Math.floor(timestamp.getMonth() + 1) > 9 ? Math.floor(timestamp.getMonth() + 1) : `0${Math.floor(timestamp.getMonth() + 1)}`}/${timestamp.getFullYear()}`
    } else if (timeFormatVariable == "D") {
        const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
        vista = `${timestamp.getDate()} de ${meses[timestamp.getMonth()]} de ${timestamp.getFullYear()}`
    } else if (timeFormatVariable == "f") {
        const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
        vista = `${timestamp.getDate()} de ${meses[timestamp.getMonth()]} de ${timestamp.getFullYear()} ${timestamp.getHours()}:${timestamp.getMinutes() > 9 ? timestamp.getMinutes() : `0${timestamp.getMinutes()}`}`
    } else if (timeFormatVariable == "F") {
        const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
        const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
        vista = `${dias[timestamp.getDay()]}, ${timestamp.getDate()} de ${meses[timestamp.getMonth()]} de ${timestamp.getFullYear()} ${timestamp.getHours()}:${timestamp.getMinutes() > 9 ? timestamp.getMinutes() : `0${timestamp.getMinutes()}`}`
    } else if (timeFormatVariable == "R") {
        const diferencia = Math.floor((Date.now() - timestamp.getTime()) / 1000)
        if (diferencia == 0) {
            vista = "ahora"
        } else {
            var num = 0
            var format = ""
            num = Math.abs(diferencia)
            if (num < 60) {
                format = `${num == 1 ? "segundo" : "segundos"}`
            } else {
                num = Math.floor(num / 60)
                if (num < 60) {
                    format = `${num == 1 ? "minuto" : "minutos"}`
                } else {
                    num = Math.floor(num / 60)
                    if (num < 24) {
                        format = `${num == 1 ? "hora" : "horas"}`
                    } else {
                        num = Math.floor(num / 24)
                        if (num < 30) {
                            format = `${num == 1 ? "día" : "días"}`
                        } else {
                            num = Math.floor(num / 30)
                            if (num < 12) {
                                format = `${num == 1 ? "mes" : "meses"}`
                            } else {
                                num = Math.floor(num / 12)
                                format = `${num == 1 ? "año" : "años"}`
                            }
                        }
                    }
                }
            }
            if (diferencia < 0) {
                vista = `en ${num} ${format}`
            } else {
                vista = `hace ${num} ${format}`
            }
        }
    }
    if (document.getElementById("preview").innerHTML !== `${vista}`) {
        document.getElementById("preview").innerHTML = `${vista}`
    }
}

function start() {
    const time = document.getElementById("time")
    const formato = document.getElementById("formato")
    const now = new Date(Date.now())
    time.value = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}T${now.getHours()>9?now.getHours():`0${now.getHours()}`}:${now.getMinutes()>9?now.getMinutes():`0${now.getMinutes()}`}`;
    formato.value = "t";
    formato.addEventListener('change', function () {
        timeFormatVariable = this.options[formato.selectedIndex].value;
    });
    const output = document.getElementById("output")
    output.addEventListener("click", copy)
    setInterval(function () {
        recalcular()
    }, 100)
}

function copy() {
    const content = document.getElementById("output")
    if (content.value=="") return
    content.select();
    document.execCommand("copy");
}