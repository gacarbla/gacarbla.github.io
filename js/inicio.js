function unselect(id) {
    try {
        document.getElementById(id).hidden = true
        document.getElementById(id+"_li").className = ""
    } catch {
        console.error("Error")
    }
}

function toggleSelection(id) {
    try {
        if (document.getElementById(id+"_li").classList.contains("selected")){
            document.getElementById(id).hidden = true
            document.getElementById(id+"_li").className = ""
        } else {
            document.getElementById(id).hidden = false
            document.getElementById(id+"_li").className = "selected"
        }
    } catch {
        console.error("Error")
    }
}