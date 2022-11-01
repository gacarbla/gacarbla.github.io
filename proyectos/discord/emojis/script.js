function start() {

}

function mostrar() {

}

async function downloadImage(imageSrcBruto, gif) {
    var imageSrc
    if (imageSrcBruto.startsWith("https://")) {
        var id = imageSrcBruto.split(/\/+/g)[Math.floor(imageSrcBruto.split(/\/+/g).length - 1)]
        imageSrc = `https://cdn.discordapp.com/emojis/${id}.${gif?"gif":"png"}?size=512&quality=lossless`
        console.log(id)
    } else {
        imageSrc
    }
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