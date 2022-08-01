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
        case 'pacman':
          pagina = "https://gacarbla.github.io/pacman";
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

function CookiesAdd(nombre, valor) {
  document.cookie = `${nombre}=${valor}; secure; max-age=604800`
  return document.cookie
}

function CookiesValue(ruta) {
  let cookies = {}
  let LocalCookies = (document.cookie).split(/;+/g)
  LocalCookies.forEach(cookie => {
    cookies[`${cookie.split(/=+/g)[0]}`] = cookie.split(/=+/g)[1]
  })
  return cookies[`${ruta}`]
}

function CookiesRemove(ruta) {
  document.cookie = `"${ruta}"=;max-age=0`;
  document.cookie = `'${ruta}'=;max-age=0`;
  document.cookie = `${ruta}=;max-age=0`;
  return document.cookie
}

function CookiesComprobar() {
  return document.cookie
}


const pages = (function () {
  const href = (window.location.href).split(/\/+/g)
  var pageName = href[href[href.length - 1].endsWith(".html") ? href.length - 2 : href.length - 1]
  console.log(pageName)

  switch (pageName) {
    case "gacarbla":
      inicio(); break;
    case "gacarbla.github.io":
      inicio(); break;
    case "timestamp":
      timestamp(); break;
    case "codificador":
      codificador(); break;
    case "404":
      break;
    default:
      error();
  }

  function inicio() {

    var divs_Array = document.getElementsByClassName("codeColors")
    var divs_Array = Array.prototype.filter.call(divs_Array, function (testElement) {
      return testElement.nodeName === 'DIV';
    });
    divs_Array.forEach(element => {
      element.addEventListener("click", function () {
        if (element.id) {
          var ventana = "<div class='ventanaEmergente'><div class='ventana'>"
          var svg = {
            js: "<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='m20 4-2 14.5-6 2-6-2L4 4h16Z'></path><path d='M7.5 8h3v8l-2-1'></path><path d='M16.5 8H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5'></path></svg>",
            css: '<svg id="css" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 4-2 14.5-6 2-6-2L4 4h16Z"></path><path d="M8.5 8h7L11 12h4l-.5 3.5-2.5.75-2.5-.75-.1-.5"></path></svg>',
            html: '<svg id="html" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 4-2 14.5-6 2-6-2L4 4h16Z"></path><path d="M15.5 8h-7l.5 4h6l-.5 3.5-2.5.75-2.5-.75-.1-.5"></path></svg>',
            py: '<svg id="py" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3"></path><path d="M12 15h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3"></path><path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4"></path><path d="M11 6v.01"></path><path d="M13 18v.01"></path></svg>',
            md: '<svg id="md" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path><path d="M7 15V9l2 2 2-2v6"></path><path d="M16 15V9m-2 4 2 2 2-2h-4Z"></path></svg>',
          }
          var contenido = {
            js: svg["js"] + "<p>Iniciándome al mundo de la programación con este lenguaje he desarrollado una mayoría de mis proyectos en él.<br>Un amplio número de experiencias se ven mermadas ante el desconocimiento del potencial real que de éste se puede obtener; en gran parte, dada a mi condición de autodidacta y al no seguimiento de un camino prefijado o adecuado para un aprendizaje completo y fundamentado.</p>",
            css: svg["css"] + "<p>Estoy trabajando en esto ;)</p>",
            html: svg["html"] + "<p>Estoy trabajando en esto ;)</p>",
            py: svg["py"] + "<p>Estoy trabajando en esto ;)</p>",
            md: svg["md"] + "<p>Estoy trabajando en esto ;)</p>",
          }
          if (!document.getElementById('windows')) {
            console.error("No ha sido posible cargar el div de ventanas.\nProcediendo al intento de restauración de la página.")
            try {
              location.reload()
              return console.info("La página ha sido recargada con éxito")
            } catch {
              return console.error("Error al refrescar la página")
            }
          } else {
            document.getElementById('windows').innerHTML = `${ventana}${contenido[element.id]}<button onclick='closeWindow()'>CERRAR</button></div></div>`
          }
        }
      })
    })
  }

  function codificador() {
    document.getElementById("claveOculta").addEventListener("click", function () {
      document.getElementById("clave").type = "text";
      document.getElementById("claveOculta").classList.add("Off");
      document.getElementById("claveVisible").classList.remove("Off");
    })
    document.getElementById("claveVisible").addEventListener("click", function () {
      document.getElementById("clave").type = "password";
      document.getElementById("claveOculta").classList.remove("Off");
      document.getElementById("claveVisible").classList.add("Off");
    })
    document.getElementById("gear").addEventListener("click", function () {
      if (document.getElementById("avanzados").classList.contains("Off")) {
        document.getElementById("avanzados").classList.remove("Off");
      } else {
        document.getElementById("avanzados").classList.add("Off");
      }

    })

    document.getElementById("textoEntrada").addEventListener("input", function () { codificar() })
    document.getElementById("textoEntrada").addEventListener("click", function () { codificar() })
    document.getElementById("check").addEventListener("change", function () { codificar() })
    document.getElementById("base").addEventListener("change", function () { codificar() })
    document.getElementById("salida").addEventListener("change", function () { codificar() })
    document.getElementById("correr").addEventListener("change", function () { codificar() })
    document.getElementById("clave").addEventListener("input", function () { codificar() })
    document.getElementById("copy").addEventListener("click", function () { copy() })
  }

  function timestamp() {
    try {
      document.getElementById("date").value = ""
      document.getElementById("errormsg").hidden = false
      document.getElementById("tabla").hidden = true
      document.getElementById("errormsg2").hidden = true
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        document.getElementById("dateLabel").innerHTML = "Fecha y hora"
      }
    } catch (e) {
      console.error(e)
    }
  }

  function error() {
    window.alert("Se ha detectao un error.\nLa página se recargará de forma automática")
    window.location.reload()
  }
})

function load() {

  pages();

  try {
    var menuCheck = document.getElementById("mobileMenu")
    menuCheck.checked = false
    var menu = document.getElementById("menu")
    menuCheck.addEventListener("change", function () {
      if (menuCheck.checked) {
        menu.className = "visible"
      } else {
        menu.className = ""
      }
    })
  } catch (e) {
    console.error(e);
  }
  try {
    if (CookiesValue("modo") == undefined || CookiesValue("modo" == "oscuro")) {
      CookiesAdd("modo", "oscuro")
      document.getElementById("body").className = "oscuro"
    } else {
      document.getElementById("body").className = "claro"
    }
    document.getElementById("sol").addEventListener("click", function () {

      document.getElementById("body").className = "claro"
      CookiesAdd("modo", "claro")

    })
    document.getElementById("luna").addEventListener("click", function () {
      document.getElementById("body").className = "oscuro"
      CookiesAdd("modo", "oscuro")
    })
    document.oncontextmenu = function () { return false }
  } catch (e) {
    console.error(e)
  }
}