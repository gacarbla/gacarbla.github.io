function go(pagina, aviso, newWindow) {
    if (!pagina.startsWith("http")){
        if(pagina.startsWith(":")){
            switch (pagina.slice(1).split(/\/+/g)[0]) {
                case 'home':
                    pagina = "https://gacarbla.github.io/";
                    break;
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