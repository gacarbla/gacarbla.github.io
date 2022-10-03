function changeText() {
    const texto = document.getElementById("change")
    const frases = [
        "Gabriel",
        "Estudiante",
        "Programador",
        "GΛCΛRBLΛ",
    ]
    var x = 0, y=0, retroceso=false, bucle = 0, timer = 75
    setInterval(function() {
        if (timer < 0){
            if(x>=frases.length) x=0
            var frase = frases[x]
            if(y>=frase.length) retroceso = true
            if (retroceso) {
                if (bucle < 20){
                    bucle = Math.floor(bucle+1)
                } else if (y==0) {
                    retroceso=false
                    bucle = 0
                    x = Math.floor(x+1)
                } else {
                    y = Math.floor(y-1)
                }
            } else {
                y = y +1
            }
            frase = frase.slice(0, y)
            texto.innerHTML = frase
            timer = 75
        }
        timer = Math.floor(timer-100)
    }, 100)
}

function start(){
    changeText()
}