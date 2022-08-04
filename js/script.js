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
  document.cookie = `"${ruta}"=;max-age=0;path="/"`;
  document.cookie = `'${ruta}'=;max-age=0;path="/"`;
  document.cookie = `${ruta}=;max-age=0;path="/"`;
  return document.cookie
}

function CookiesComprobar() {
  return document.cookie
}


const pages = (function () {
  const href = (window.location.href).split(/\/+/g)
  var pageName = href[href[href.length - 1].endsWith(".html") ? href.length - 2 : href.length - 1]
  console.log(pageName)

  if( pageName == "inicio" || pageName == undefined || pageName == "gacarbla.github.io" ){
    inicio()
  } else if( pageName == "timestamp" ){
    timestamp()
  } else if( pageName == "codificador" ){
    codificador()
  } else if( pageName == "404" ){
    return
  } else {
    inicio()
  }

  function inicio() {
    document.getElementById("closeGuide").addEventListener("click", function(){
      document.getElementById("guide").classList.replace("azul", "transparente")
      CookiesAdd("guide", "closed")
    })
    document.getElementById("closeNews").addEventListener("click", function(){
      document.getElementById("news").classList.replace("blanco", "transparente")
      CookiesAdd("news01", "closed")
    })

    if(CookiesValue("guide")=="closed") {
      document.getElementById("guide").classList.replace("azul", "transparente")
    } else {
      document.getElementById("guide").classList.replace("transparente", "azul")
    }

    if(CookiesValue("news01")=="closed") {
      document.getElementById("news").classList.replace("blanco", "transparente")
    } else {
      document.getElementById("news").classList.replace("transparente", "blanco")
    }

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
    if (CookiesValue("modo") == undefined || CookiesValue("modo") == "oscuro") {
      CookiesAdd("modo", "oscuro")
      document.getElementById("body").className = "oscuro"
      document.getElementsByName("theme-color")[0].setAttribute('content', '#222')
    } else {
      document.getElementById("body").className = "claro"
      document.getElementsByName("theme-color")[0].setAttribute('content', '#ddd')
    }
    document.getElementById("sol").addEventListener("click", function () {
      document.getElementById("body").className = "claro"
      document.getElementsByName("theme-color")[0].setAttribute('content', '#ddd')
      CookiesAdd("modo", "claro")

    })
    document.getElementById("luna").addEventListener("click", function () {
      document.getElementById("body").className = "oscuro"
      document.getElementsByName("theme-color")[0].setAttribute('content', '#222')
      CookiesAdd("modo", "oscuro")
    })
    document.oncontextmenu = function () { return false }
  } catch (e) {
    console.error(e)
  }
}