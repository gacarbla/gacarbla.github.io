function start() {
    document.querySelector(".simulador").addEventListener("scroll", menuNavReveal)
    startRevealAnimations()
}

function startRevealAnimations() {
    try {
        fade()
    } catch {
        console.error("No se ha logrado iniciar el efecto fade")
    }
    try {
        menuNavReveal()
    } catch {
        console.error("No se ha logrado iniciar el efecto del menú")
    }
}

function fade() {
    var reveals = document.querySelectorAll(".reveal.fade");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function menuNavReveal() {
    console.log("Activando")
    var reveals = document.querySelectorAll("div.simulador div");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementBot = reveals[i].getBoundingClientRect().bottom;
        console.log(`nav${reveals[i].id}`)
        if ((elementTop < windowHeight*0.3) && (elementBot > windowHeight*0.3)) {
            document.getElementById(`nav${reveals[i].id}`).classList.add("active");
        } else {
            document.getElementById(`nav${reveals[i].id}`).classList.remove("active");
        }
    }
}