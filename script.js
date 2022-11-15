function start() {
    window.addEventListener("wheel", function(e){
        console.log(e.target)
        if (document.querySelector('.menu').contains(e.target) || document.querySelector(".pagina").contains(e.target)) {
            if(e.deltaY>=0){
                document.querySelector(".menu").scrollBy(300, 0)
            } else {
                document.querySelector(".menu").scrollBy(-300, 0)
            }
        }
    })
}