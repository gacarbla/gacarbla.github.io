function start() {
    window.addEventListener("wheel", function(e){
        if (document.querySelector('#menu').contains(e.target)) {
            console.log(e.deltaY)
            if(e.deltaY>=0){
                document.getElementById("menu").scrollBy(300, 0)
            } else {
                document.getElementById("menu").scrollBy(-300, 0)
            }
        }
    })
}