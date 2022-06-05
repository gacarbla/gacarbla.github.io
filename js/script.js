function light() {
    window.alert("Esta función es experimental y podría causar errores en la página")
    document.getElementById('body').classList.remove('dark')
    document.getElementById('body').classList.add('light')
    document.getElementById('id-moon').classList.remove('active')
    document.getElementById('id-sun').classList.add('active')
}

function dark() {
    document.getElementById('body').classList.add('dark')
    document.getElementById('body').classList.remove('light')
    document.getElementById('id-sun').classList.remove('active')
    document.getElementById('id-moon').classList.add('active')
}

function goPage(page) {
    if(!page){
        window.alert("Se ha producido un error")
    } else {
        document.getElementById("column3").className = "column3out"
        document.getElementById("column4").className = "column4out"
        setTimeout(function(){
            window.location = (`${page}`);
        }, 1000)
        setTimeout(function(){
            document.getElementById("column3").className = "column3out"
            document.getElementById("column4").className = "column4out"
            window.location = (`${window.location}`);
        }, 3000)
    }
}

function copyCode(id) {
    if(!id){
        window.alert("Se ha producido un error copiando el texto")
    } else {
        var text = document.getElementById(`${id}`)
        text.select()
        document.execCommand("copy")
    }
}


start();
window.addEventListener('resize', start);

function start(){
    var width = document.documentElement.clientWidth
    var height = document.documentElement.clientHeight
    if(height>width){
        document.getElementById("page").className = "pagem"
    } else {
        document.getElementById("page").className = "pagem"
    }
}