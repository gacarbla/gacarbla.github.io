var id = 0
var gif = 0

function start() {
    const input = document.getElementById("urlImageInput")
    const boton = document.getElementById("downloadImageButton")
    mostrar(input.value)
    input.addEventListener("input", function(){
        mostrar(this.value)
    })
    boton.addEventListener("click", function(){
        if(!boton.disabled) downloadImage()
    })
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