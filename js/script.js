function go(pagina, aviso, newWindow) {
    if (!pagina.startsWith("http")) {
        if (pagina.startsWith(":")) {
            switch (pagina.slice(1).split(/\/+/g)[0]) {
                case 'github':
                    pagina = `https://github.com/${pagina.slice(8)}`;
                    break;
                case 'home':
                    pagina = 'https://gacarbla.github.io';
                    break;
                case 'timestamp':
                    pagina = "https://gacarbla.github.io/tools/timestamp";
                    break;
                case 'codificador':
                    pagina = "https://gacarbla.github.io/tools/codificador";
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
        window.alert("Está a punto de ser redirigido a la siguiente página:\n" + pagina)
    }
    if (newWindow) {
        window.open(`${pagina}`, "GΛCΛRBLΛ", "width=1080, height=440")
    } else {
        window.location = `${pagina}`
    }
}

function toggleSelection(id) {
    try {
        if (document.getElementById(id + "_li").classList.contains("selected")) {
            document.getElementById(id).hidden = true
            document.getElementById(id + "_li").className = ""
        } else {
            document.getElementById(id).hidden = false
            document.getElementById(id + "_li").className = "selected"
        }
    } catch {
        console.error("Error")
    }
}