function go(pagina, aviso, newWindow) {
    if (!pagina.startsWith("http")){
        if(pagina.startsWith(":")){
            switch (pagina.slice(1)) {
                case "home":
                    pagina = "https://gacarbla.github.io/"
                default:
                    pagina = "https://gacarbla.github.io/404"
            }
            
        } else {
            pagina = `https://gacarbla.github.io/${pagina}`
        }
    }
    if (aviso) {
        window.alert("Está a punto de ser redirigido a la siguiente página:\n"+pagina)
    }
    if (newWindow){
        window.open(`${pagina}`, "GΛCΛRBLΛ", "width=500, height=500")
    } else {
        window.location = `${pagina}`
    }
}