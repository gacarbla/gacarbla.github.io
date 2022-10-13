const data = {
    list: {
        "dataDesarrollador": [
            "select",
            "rightClick"
        ],
        "dataAjustes": [
            "colorMode",
            "devModeStatus",
            "easterEggs",
            "idioma",
            "recordarIdioma"
        ]
    },
    activar(grupo) {
        this.establecer(`${grupo}`, "true")
        refreshNavigationBar();
    },
    iniciar() {
        if (!this.obtener("dataAjustes")) { this.establecer(`dataAjustes`, "true") }
        if (!this.obtener("dataDesarrollador")) { this.establecer(`dataDesarrollador`, "true") }
        let dataObject = localStorage
        if (Object.keys(dataObject) < 1) {
            if (!warned) {
                warned = true
                window.alert("Se ha detectado que su navegador no permite el almacenamiento de datos esenciales.\nDe forma automática, todas las funciones de almacenamiento de información se ve paralizada y deshabilitada.")
            }
        }
    },
    desactivar(grupo) {
        try {
            this.establecer(`${grupo}`, "false")
            this.list[`${grupo}`].forEach(datas => this.eliminar(`${datas}`))
            refreshNavigationBar();
        } catch (e) {
            console.error(e)
            return false
        }
    },
    eliminar(ruta) {
        localStorage.removeItem(`${ruta}`);
        return localStorage
    },
    establecer(ruta, valor) {
        var enabled = true
        var x = 0;
        for (x = 0; x < Object.keys(this.list).length; x++) {
            if (this.list[`${Object.keys(this.list)[x]}`].includes(`${ruta}`)) {
                if (this.obtener(`${Object.keys(this.list)[x]}`) == "false") {
                    console.warn(`\"${Object.keys(this.list)[x]}\" ha sido deshabilitado. Esto podría alterar el funcionamiento de la página.`);
                    console.info("Información no actualizada debido a la configuración de ésta.");
                    enabled = false;
                    this.list[`${Object.keys(this.list)[x]}`].forEach(datas => this.eliminar(`${datas}`))
                }
            }
        }
        if (enabled) {
            localStorage.setItem(`${ruta}`, `${valor}`);
            return console.info(`${ruta} tiene ahora el valor \"${valor}\"`)
        }
    },
    existe(ruta) {
        if (localStorage[`${ruta}`]) return true;
        return false;
    },
    obtener(ruta) {
        return localStorage.getItem(`${ruta}`);

    },
    reset() {
        localStorage.clear();
        this.iniciar();
        document.getElementById("dataDesarrollador").checked = true
        document.getElementById("dataAjustes").checked = true
        document.getElementById("body").className = "oscuro"
        document.oncontextmenu = function () { return false }
        refreshNavigationBar();
    },
    table() {
        return console.table(localStorage)
    }
}

function refreshNavigationBar() {
    const navigation = {
        "1": {
            name: {
                es: "Inicio",
                gl: "Inicio",
                pt: "Início",
                en: "Home"
            },
            vector: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H3l9-9 9 9h-2"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></path></svg>`,
            class: "pagina",
            onclick: "go(':', false)",
            title: {
                es: "Vuelve a la página de inicio",
                gl: "Volta á pantalla de inicio",
                pt: "Voltar para a página inicial",
                en: "Go back to the home page"
            },
            disabled: false
        },
        "2": {
            name: {
                es: "Herramientas",
                gl: "Ferramentas",
                pt: "Ferramentas",
                en: "Tools"
            },
            vector: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h4L20 8a2.829 2.829 0 0 0-4-4L3 17v4Z"></path><path d="m14.5 5.5 4 4"></path><path d="M12 8 7 3 3 7l5 5"></path><path d="M7 8 5.5 9.5"></path><path d="m16 12 5 5-4 4-5-5"></path><path d="m16 17-1.5 1.5"></path></svg>`,
            class: "separador"
        },
        "3": {
            name: {
                es: "Timestamp",
                gl: "Timestamp",
                pt: "Timestamp",
                en: "Timestamp"
            },
            vector: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path><path d="M12 7v5l3 3"></path></svg>`,
            class: "pagina",
            onclick: "go(':proyectos/discord/timestamp', false)",
            title: {
                es: "Discord Timestamp Generator",
                gl: "Discord Timestamp Generator",
                pt: "Discord Timestamp Generator",
                en: "Discord Timestamp Generator"
            },
            disabled: false
        },
        "4": {
            name: {
                es: "Codificador",
                gl: "Codificador",
                pt: "Codificador",
                en: "Encoder"
            },
            vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 11H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z"></path><path d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>',
            class: "pagina",
            onclick: "go(':proyectos/codificador', false)",
            title: {
                es: "Codificador simple de textos",
                gl: "Codificador simple de textos",
                pt: "Codificador de texto simple",
                en: "Simple text encoder"
            },
            disabled: false
        },
        "5": {
            name: {
                es: "GitHub",
                gl: "GitHub",
                pt: "GitHub",
                en: "GitHub"
            },
            vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21h6Z"></path><path d="M9 19c-4.3 1.4-4.3-2.5-6-3"></path></svg>',
            class: "separador",
        },
        "6": {
            name: {
                es: "Perfil",
                gl: "Perfil",
                pt: "Perfil",
                en: "Profile"
            },
            vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 8V6a2 2 0 0 1 2-2h2"></path><path d="M4 16v2a2 2 0 0 0 2 2h2"></path><path d="M16 4h2a2 2 0 0 1 2 2v2"></path><path d="M16 20h2a2 2 0 0 0 2-2v-2"></path><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path></svg>',
            class: "pagina",
            onclick: "go('https://github.com/gacarbla', true)",
            title: {
                es: "Accede al perfil de GitHub de gacarbla",
                gl: "Accede ó perfil de GitHub de gacarbla",
                pt: "Acesse o perfil do GitHub do gacarbla",
                en: "Access gacarbla's GitHub profile"
            },
            disabled: false
        },
        "7": {
            name: {
                es: "gacarbla.github.io",
                gl: "gacarbla.github.io",
                pt: "gacarbla.github.io",
                en: "gacarbla.github.io"
            },
            vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 4-2 14.5-6 2-6-2L4 4h16Z"></path><path d="M15.5 8h-7l.5 4h6l-.5 3.5-2.5.75-2.5-.75-.1-.5"></path></svg>',
            class: "pagina",
            onclick: "go('https://github.com/gacarbla/gacarbla.github.io', true)",
            title: {
                es: "Accede al repositorio",
                gl: "Accede ó repositorio",
                pt: "Acesse o repositório",
                en: "Access the repository"
            },
            disabled: false
        },
        "8": {
            name: {
                es: "Dori",
                gl: "Dori",
                pt: "Dori",
                en: "Dori"
            },
            vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 4-2 14.5-6 2-6-2L4 4h16Z"></path><path d="M7.5 8h3v8l-2-1"></path><path d="M16.5 8H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5"></path></svg>',
            class: "pagina",
            onclick: "go('https://github.com/gacarbla/Dori', true)",
            title: {
                es: "Accede al repositorio",
                gl: "Accede ó repositorio",
                pt: "Acesse o repositório",
                en: "Access the repository"
            },
            disabled: false
        },
        "9": {
            name: {
                es: "NewsBot",
                gl: "NewsBot",
                pt: "NewsBot",
                en: "NewsBot"
            },
            vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 4-2 14.5-6 2-6-2L4 4h16Z"></path><path d="M7.5 8h3v8l-2-1"></path><path d="M16.5 8H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5"></path></svg>',
            class: "pagina",
            onclick: "go('https://github.com/gacarbla/NewsBot', true)",
            title: {
                es: "Accede al repositorio",
                gl: "Accede ó repositorio",
                pt: "Acesse o repositório",
                en: "Access the repository"
            },
            disabled: false
        },
        "10": {
            name: {
                es: "Computer analyzer",
                gl: "Computer analyzer",
                pt: "Computer analyzer",
                en: "Computer analyzer"
            },
            vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3"></path><path d="M12 15h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3"></path><path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4"></path><path d="M11 6v.01"></path><path d="M13 18v.01"></path></svg>',
            class: "pagina",
            onclick: "go('https://github.com/gacarbla/computerAnalyzer', true)",
            title: {
                es: "Accede al repositorio",
                gl: "Accede ó repositorio",
                pt: "Acesse o repositório",
                en: "Access the repository"
            },
            disabled: false
        },
        "11": {
            name: {
                es: "Redes",
                gl: "Redes",
                pt: "Redes",
                en: "Redes"
            },
            vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path d="M12 7v4"></path><path d="m6.7 17.797 2.8-2"></path><path d="m17.3 17.797-2.8-2"></path></svg>',
            class: "separador",
        },
        "12": {
            name: {
                es: "Instagram",
                gl: "Instagram",
                pt: "Instagram",
                en: "Instagram"
            },
            vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Z"></path><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path d="M16.5 7.5v.001"></path></svg>',
            class: "pagina",
            onclick: "go('https://www.instagram.com/gacarbla/', true)",
            title: {
                es: "Instagram personal",
                gl: "Instagram persoal",
                pt: "Instagram pessoal",
                en: "Personal Instagram"
            },
            disabled: false
        },
        "13": {
            name: {
                es: "Twitter",
                gl: "Twitter",
                pt: "Twitter",
                en: "Twitter"
            },
            class: "pagina",
            vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4.009c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.322 12 7.999v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c-.002-.249 1.51-2.772 1.818-4.013v.001Z"></path></svg>',
            onclick: "go('https://twitter.com/gacarbla', true)",
            title: {
                es: "Twitter personal",
                gl: "Twitter persoal"
            },
            disabled: false
        },
        "14": {
            name: {
                es: "LinkedIn",
                gl: "LinkedIn",
                pt: "LinkedIn",
                en: "LinkedIn"
            },
            class: "pagina",
            vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path><path d="M8 11v5"></path><path d="M8 8v.01"></path><path d="M12 16v-5"></path><path d="M16 16v-3a2 2 0 0 0-4 0"></path></svg>',
            onclick: "go('https://www.linkedin.com/in/gabriel-carro-blanco-866b99247/', true)",
            title: {
                es: "LinkedIn",
                gl: "LinkedIn",
                pt: "LinkedIn",
                en: "LinkedIn"
            },
            disabled: true
        },
        "15": {
            name: {
                es: "Spotify",
                gl: "Spotify",
                pt: "Spotify",
                en: "Spotifya"
            },
            class: "pagina",
            vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path><path d="M8 11.97c2.5-1.473 5.5-.973 7.5.527"></path><path d="M9 15.002c1.5-1 4-1 5 .5"></path><path d="M7 8.999c2-1 6-2 10 .5"></path></svg>',
            onclick: "go('https://open.spotify.com/user/31k2xuzibkfcpzhuottq6kgpigpy?si=9a158eccac6f478c', true)",
            title: {
                es: "Spotify",
                gl: "Spotify",
                pt: "Spotify",
                en: "Spotify"
            },
            disabled: false
        },
        "16": {
            name: {
                es: "Página",
                gl: "Páxina",
                pt: "Página",
                en: "Page"
            },
            vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path><path d="M6 8h.01"></path><path d="M9 8h.01"></path></svg>',
            class: "separador",
        },
        "17": {
            name: {
                es: "Ajustes",
                gl: "Axustes",
                pt: "Configurações",
                en: "Settings"
            },
            vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M4 6h8"></path><path d="M16 6h4"></path><path d="M8 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M4 12h2"></path><path d="M10 12h10"></path><path d="M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M4 18h11"></path><path d="M19 18h1"></path></svg>',
            class: "pagina",
            onclick: "windows.new('settings')",
            title: {
                es: "Modifica el aspecto de la página a tu gusto",
                gl: "Modifica o aspeto da páxina como che pete",
                pt: "Modifique a aparência da página ao seu gosto",
                en: "Modify the appearance of the page to your liking"
            },
            disabled: false
        },
        "18": {
            name: {
                es: "Ajustes dev",
                gl: "Axustes dev",
                pt: "Configurações dev",
                en: "Dev settings"
            },
            vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12h6"></path><path d="M12 9v6"></path><path d="M6 19a2 2 0 0 1-2-2v-4l-1-1 1-1V7a2 2 0 0 1 2-2"></path><path d="M18 19a2 2 0 0 0 2-2v-4l1-1-1-1V7a2 2 0 0 0-2-2"></path></svg>',
            class: "pagina",
            onclick: "windows.new('devSettings')",
            title: {
                es: "Herramientas avanzadas para desarrolladores",
                gl: "Ferramentas avanzadas para desenvolvedores",
                pt: "Ferramentas avançadas de desenvolvedor",
                en: "Advanced developer tools"
            },
            disabled: false,
            hidden: data.obtener("devModeStatus") == "on" ? false : true,
        },
        "19": {
            name: {
                es: "",
                gl: "",
                pt: "",
                en: ""
            },
            class: "pagina",
            vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 8c0-.796.369-1.559 1.025-2.121C9.681 5.316 10.572 5 11.5 5h1c.928 0 1.819.316 2.475.879C15.63 6.44 16 7.204 16 8a3 3 0 0 1-2 3c-.614.288-1.14.833-1.501 1.555A5.04 5.04 0 0 0 12 15"></path><path d="M12 19v.01"></path></svg>',
            onclick: "windows.new('rickroll')",
            disabled: false,
            title: {
                es: "",
                gl: "",
                en: "",
                pt: ""
            },
            hidden: data.obtener("easterEggs") == "on" ? false : true,
        },
    }

    let headerMenu = [];
    var x = 0;
    for (x = 0; x < (Object.keys(navigation)).length; x++) {
        var name = navigation[Object.keys(navigation)[`${x}`]].name[lang], e = navigation[`${Object.keys(navigation)[`${x}`]}`]
        if (e.hidden) { } else if (e.class == "separador") {
            headerMenu[x] = `<div class="separador"><div class="vector">${e.vector}</div><div class="nombre"><p>${name}</p></div><div class="line"></div></div>`
        } else if (e.class = "pagina") {
            if (e.disabled) {
                headerMenu[x] = `<div class="pagina disabled" title="Página deshabilitada por el desarrollador"><div class="vector">${e.vector}</div><div class="nombre"><p>${name}</p></div></div>`
            } else {
                headerMenu[x] = `<div class="pagina" onclick="${e.onclick}" title="${e.title[lang]}"><div class="vector">${e.vector}</div><div class="nombre"><p>${name}</p></div></div>`
            }
        } else {
            console.error("No se ha reconocido la clase " + e.class + " como un valor válido en el menú de navegación")
        }
    }
    document.getElementById("header").innerHTML = `<div class="btn" id="mobilemenubutton"><svg id="off" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16"></path>\n<path d="M4 12h16"></path><path d="M4 18h16"></path>\n</svg>\n<svg id="on" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path>\n<path d="m6 6 12 12"></path></svg></div><div class="menu">${headerMenu.join("\n")}</div><footer><div class="vector"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7 8-4 4 4 4"></path><path d="m17 8 4 4-4 4"></path><path d="m14 4-4 16"></path></svg></div><div class="nombre"><p class="p">GΛCΛRBLΛ</p><p class="s">Gabriel Carro Blanco</p></div></footer>`

    var mmb = document.getElementById("mobilemenubutton")
    mmb.addEventListener("click", function () { document.getElementById("header").classList.toggle("active") })
}