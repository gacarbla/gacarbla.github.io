function start(){
    document.getElementById("slideLeft").addEventListener("click", function() {
        document.getElementById("functionSlider").scrollBy(-400, 0)
    })
    document.getElementById("slideRight").addEventListener("click", function() {
        document.getElementById("functionSlider").scrollBy(400, 0)
    })
}