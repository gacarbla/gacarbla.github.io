function go(pagina, aviso, newWindow) {
    if (!pagina.startsWith("http")){
        if(pagina.startsWith(":tools/")){
            switch (pagina.slice(7).split(/\/+/g)[0]) {
                case 'timestamp':
                    pagina = "https://gacarbla.github.io/tools/timestamp";
                    break;
                default:
                    pagina = "https://gacarbla.github.io/tools/404";
                    break;
            }
            
        } else if(pagina.startsWith(":")){
            switch (pagina.slice(1).split(/\/+/g)[0]) {
                case 'github':
                    pagina = `https://github.com/${pagina.slice(8)}`;
                    break;
                default:
                    pagina = "https://gacarbla.github.io/404";
                    break;
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