var timeFormatVariable = "t"

async function recalcular() {
    const timeJSON = await require("json/repo/time.json", true)
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
        vista = `${timestamp.getDate()} de ${timeJSON.listas.meses[lang][timestamp.getMonth()]} de ${timestamp.getFullYear()}`
    } else if (timeFormatVariable == "f") {
        vista = `${timestamp.getDate()} de ${timeJSON.listas.meses[lang][timestamp.getMonth()]} de ${timestamp.getFullYear()} ${timestamp.getHours()}:${timestamp.getMinutes() > 9 ? timestamp.getMinutes() : `0${timestamp.getMinutes()}`}`
    } else if (timeFormatVariable == "F") {
        vista = `${timeJSON.listas.semana[lang][timestamp.getDay()]}, ${timestamp.getDate()} de ${timeJSON.listas.meses[lang][timestamp.getMonth()]} de ${timestamp.getFullYear()} ${timestamp.getHours()}:${timestamp.getMinutes() > 9 ? timestamp.getMinutes() : `0${timestamp.getMinutes()}`}`
    } else if (timeFormatVariable == "R") {
        const diferencia = Math.floor((Date.now() - timestamp.getTime()) / 1000)
        if (diferencia == 0) {
            vista = `${timeJSON.relativo.ahora[lang]}`
        } else {
            var num = 0
            var format = ""
            num = Math.abs(diferencia)
            if (num < 60) {
                format = `${num == 1 ? `${timeJSON.segundo[lang]}` : `${timeJSON.segundos[lang]}`}`
            } else {
                num = Math.floor(num / 60)
                if (num < 60) {
                    format = `${num == 1 ? `${timeJSON.minuto[lang]}` : `${timeJSON.minutos[lang]}`}`
                } else {
                    num = Math.floor(num / 60)
                    if (num < 24) {
                        format = `${num == 1 ? `${timeJSON.hora[lang]}` : `${timeJSON.horas[lang]}`}`
                    } else {
                        num = Math.floor(num / 24)
                        if (num < 30) {
                            format = `${num == 1 ? `${timeJSON.dia[lang]}` : `${timeJSON.dias[lang]}`}`
                        } else {
                            num = Math.floor(num / 30)
                            if (num < 12) {
                                format = `${num == 1 ? `${timeJSON.mes[lang]}` : `${timeJSON.meses[lang]}`}`
                            } else {
                                num = Math.floor(num / 12)
                                format = `${num == 1 ? `${timeJSON.año[lang]}` : `${timeJSON.años[lang]}`}`
                            }
                        }
                    }
                }
            }
            if (diferencia < 0) {
                vista = `${timeJSON.relativo.en[lang]}`.replace("%%time%%", `${num} ${format}`)
            } else {
                vista = `${timeJSON.relativo.hace[lang]}`.replace("%%time%%", `${num} ${format}`)
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
    time.value = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()>9?`${now.getDate()}`:`0${now.getDate()}`}T${now.getHours()>9?now.getHours():`0${now.getHours()}`}:${now.getMinutes()>9?now.getMinutes():`0${now.getMinutes()}`}`;
    formato.value = "t";
    formato.addEventListener('change', function () {
        timeFormatVariable = this.options[formato.selectedIndex].value;
    });
    const output = document.getElementById("output")
    output.addEventListener("click", copy)
    const input = document.getElementById("urlImageInput")
    const boton = document.getElementById("downloadImageButton")
    mostrar(input.value)
    input.addEventListener("input", function(){
        mostrar(this.value)
    })
    boton.addEventListener("click", function(){
        if(!boton.disabled) downloadImage()
    })
    setInterval(function () {
        recalcular()
    }, 150)
}

function copy() {
    const content = document.getElementById("output")
    if (content.value=="") return
    content.select();
    document.execCommand("copy");
}

function mostrar(value) {
    if(value.trim().startsWith("https://")){
        const canonico = value.trim().slice(8).split(/\/+/g)
        if ((canonico[0].split(/\.+/g)[1]=="discord"||canonico[0].split(/\.+/g)[1]=="discordapp")&&canonico[0].split(/\.+/g)[2]=="com"&&canonico[1]=="emojis"){
            var extension = canonico[2].split(/\?+/g)[0].split(".")
            gif = (extension[1]=="gif")
            id = extension[0]
            document.getElementById("imagePreview").src = `https://cdn.discordapp.com/emojis/${id}.${gif?"gif":"png"}?size=512&quality=lossless`
            desbloquear()
        } else {
            document.getElementById("imagePreview").src = "https://gacarbla.github.io/media/png/404image.png"
            bloquear()
        }
    } else if (parseInt(value.trim())>0) {
        gif = false
        id = value.trim()
        document.getElementById("imagePreview").src = `https://cdn.discordapp.com/emojis/${id}.${gif?"gif":"png"}?size=512&quality=lossless`
        desbloquear()
    } else {
        document.getElementById("imagePreview").src = "https://gacarbla.github.io/media/png/404image.png"
    }
}

function bloquear() {
    document.getElementById("downloadImageButton").classList.add("bloq")
    document.getElementById("downloadImageButton").disabled = true
}

function desbloquear() {
    document.getElementById("downloadImageButton").classList.remove("bloq")
    document.getElementById("downloadImageButton").disabled = false
}

async function downloadImage() {
    var imageSrc = `https://cdn.discordapp.com/emojis/${id}.${gif?"gif":"png"}?size=512&quality=lossless`
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'emoji'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}