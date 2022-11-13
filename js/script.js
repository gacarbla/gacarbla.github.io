/* VARIABLES */
var warned = false;
var lang = "es_ES"

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
    document.getElementById("body").className = "negro"
    document.oncontextmenu = function () { return false }
    refreshNavigationBar();
  },
  table() {
    return console.table(localStorage)
  }
}

async function refreshNavigationBar() {
  const navigation = await require("json/repo/navPages.json", true)
  let headerMenu = [];
  var x = 0;
  for (x = 0; x < (Object.keys(navigation)).length; x++) {
    var name = navigation[Object.keys(navigation)[`${x}`]].name[lang], e = navigation[`${Object.keys(navigation)[`${x}`]}`]
    var noMostrar = false
    if (typeof e.hidden == "string") {
      noMostrar = data.obtener(e.hidden) == "on" ? false : true
    } else {
      noMostrar = e.hidden
    }
    if (noMostrar) { } else if (e.class == "separador") {
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
  document.getElementById("header").innerHTML = `<div class="btn" id="mobilemenubutton"><svg id="off" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16"></path>\n<path d="M4 12h16"></path><path d="M4 18h16"></path>\n</svg>\n<svg id="on" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path>\n<path d="m6 6 12 12"></path></svg></div><div class="menu">${headerMenu.join("\n")}</div><footer><div class="vector"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7 8-4 4 4 4"></path><path d="m17 8 4 4-4 4"></path><path d="m14 4-4 16"></path></svg></div><div class="nombre"><p class="p">GΛCΛRBLΛ</p><p class="s">Gabriel CB</p></div></footer>`

  var mmb = document.getElementById("mobilemenubutton")
  mmb.addEventListener("click", function () { document.getElementById("header").classList.toggle("active") })
}

const windows = {
  "devSettings": {
    title: {
      es_ES: "Ajustes para desarrolladores",
      en_GB: "Developers tools",
      gl_ES: "Axustes para desenvolvedores",
      pt_PT: "Configurações do desenvolvedor",
      pt_BR: "Configurações do desenvolvedor",
      vl_ES: "Ajustos per a desenvolupadors",
      fr_BL: "Paramètres du développeur"
    },
    start() {
      const rightClickCheck = document.getElementById("rightClickCheck")
      const selectCheck = document.getElementById("selectCheck")
      if (data.obtener("rightClick") == "true") {
        rightClickCheck.checked = true
      } else {
        rightClickCheck.checked = false
      }
      if (data.obtener("select") == "true") {
        selectCheck.checked = true
      } else {
        selectCheck.checked = false
      }
      selectCheck.addEventListener("change", function () {
        if (selectCheck.checked) {
          document.getElementById("body").classList.add("select");
          document.getElementById("body").ondragstart = function () { }
          document.getElementById("body").onselectstart = function () { }
          data.establecer("select", "true")
        } else {
          document.getElementById("body").classList.remove("select");
          document.getElementById("body").ondragstart = function () { return false }
          document.getElementById("body").onselectstart = function () { return false }
          data.establecer("select", "false")
        }
      })
      rightClickCheck.addEventListener("change", function () {
        if (rightClickCheck.checked) {
          document.oncontextmenu = function () { }
          data.establecer("rightClick", "true")
        } else {
          document.oncontextmenu = function () { return false }
          data.establecer("rightClick", "false")
        }
      })
      window.addEventListener('click', function (e) {
        if (!document.querySelector('.window').contains(e.target)) {
          windows.close("devSettings")
        }
      });
    }
  },
  "settings": {
    title: {
      es_ES: "Ajustes",
      en_GB: "Settings",
      gl_ES: "Axustes",
      pt_PT: "Configurações",
      pt_BR: "Configurações",
      vl_ES: "Adjustos",
      fr_BL: "Paramètres"
    },
    start() {
      const modoColor = document.getElementById("modoColorCheck")
      if (document.getElementById("body").classList.contains("blanco")) {
        modoColor.checked = true
      }
      modoColor.addEventListener("change", function () {
        document.getElementById("body").classList.remove(data.obtener("colorMode"))
        if (modoColor.checked) {
          data.establecer("colorMode", "blanco", "dataAjustes")
          document.getElementById("body").classList.add("blanco")
        } else {
          document.getElementById("body").classList.add("negro")
        }
      })
      const modoDev = document.getElementById("devModeCheck")
      if (data.obtener("devModeStatus") == "on") {
        modoDev.checked = true
      }
      modoDev.addEventListener("change", function () {
        if (modoDev.checked) {
          data.establecer("devModeStatus", "on")
        } else {
          data.establecer("devModeStatus", "off")
        }
        refreshNavigationBar();
      })
      const easterEggs = document.getElementById("easterEggCheck")
      if (data.obtener("easterEggs") == "on") {
        easterEggs.checked = true
      }
      easterEggs.addEventListener("change", function () {
        if (easterEggs.checked) {
          data.establecer("easterEggs", "on")
        } else {
          data.establecer("easterEggs", "off")
        }
        refreshNavigationBar();
      })
      window.addEventListener('click', function (e) {
        if (!document.querySelector('.window').contains(e.target)) {
          windows.close("settings")
        }
      });
    },
  },
  "rickroll": {
    title: {
      es_ES: "",
      en_GB: "",
      pt_PT: "",
      pt_BR: "",
      gl_ES: "",
      vl_ES: "",
      fr_BL: ""
    },
    content: `<video width="280" height="160" autoplay controls id="rick"><source src="https://gacarbla.github.io/media/video/rickroll.mp4" type="video/mp4"></video>`,
    start() {
      document.getElementById("rick").requestFullscreen()
      document.getElementById("rick").mozRequestFullScreen()
      document.getElementById("rick").webkitRequestFullscreen()
      document.getElementById("rick").msRequestFullscreen()
    }
  },
  check() {
    if (!document.getElementById("windows")) location.reload()
  },
  async new(name, type) {
    this.check();
    if (!name) {
      return console.error("No se ha especificado el nombre de la ventana")
    }
    if (type == "lateral") {
      const ventanaData = windows[`${name}`];
      var listsNames = []
      if (name == "rickroll") {
        if (document.getElementById(name)) return console.error("La venta ya se encuentra abierta")
        if (!windows[`${name}`]) return console.error("No se ha encontrado ninguna ventana con este nombre")
        const divVentanas = document.getElementById("windows")
        divVentanas.innerHTML = `<div class="back" id="${name}"><div class="window lateral"><svg class="close" onclick="windows.close('${name}')" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg><div class="title"><p></p></div><div class="caja">${ventanaData.content}</div></div></div>`
      } else {
        const windowJSON = await require(`json/windows/${name}.json`, true), structuresJSON = await require(`json/repo/structures.json`, true), camposJSON = await require(`json/repo/campos.json`, true)
        var window = structuresJSON["windows"], campos = []
        for (const x in windowJSON.textos) {
          if (windowJSON.textos[x].tipo == "radio") { campos.push(windowJSON.campos.replace("%%text%%", windowJSON.textos[x].text[lang]).replace("%%campo%%", camposJSON.windows.radio.replace("%%disabled%%", windowJSON.textos[x].dispo == true ? "" : "disabled").replace(/%%hidden%%+/g, windowJSON.textos[x].dispo == true ? "" : "hidden")).replace(/%%id%%+/g, x)) }
          if (windowJSON.textos[x].tipo == "select") {
            campos.push("<div class=\"ajuste\" id=\"%%id%%\"><p>%%name%%</p><svg xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m6 9 6 6 6-6\"></path></svg></div>".replace("%%id%%", x).replace("%%name%%", windowJSON.textos[x].text[lang]))
            listsNames.push(x)
          }
        }
        window = window.replace("%%intro%%", windowJSON.intro[lang]).replace("%%campos%%", campos.join(""))
        document.getElementById("windows").innerHTML = `<div class="back" id="${name}"><div class="window lateral"><svg class="close" onclick="windows.close('${name}')" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg><div class="title"><p>${ventanaData.title[lang]}</p></div><div class="caja">${window}</div></div></div>`
        listsNames.forEach(list => {
          document.getElementById(list).addEventListener("click", function () {
            showlist(list)
          })
        })
      }
      ventanaData.start();
    } else if (type == "loader") {
      document.getElementById("windows").innerHTML = `${document.getElementById("windows").innerHTML}<div class="back" id="loader"><div class="window"><div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div>`
    }
  },
  close(name) {
    this.check();
    const windows = document.getElementById("windows");
    if (!name) return console.error("No se ha especificado el nombre de la ventana")
    const window = document.getElementById(`${name}`)
    if (!window) return console.error("Esta ventana no se encuentra abierta actualmente")
    document.querySelector('.window').style.transform = "translateX(400px)"
    document.getElementById(name).style.opacity = "0"
    setTimeout(function () {
      windows.removeChild(window)
    }, 400)
  }
}

function load() {
  if (!data.existe("idioma")) data.establecer("idioma", "es_ES")
  if (read("lang")) {
    data.establecer("idioma", read("lang"))
    queris = window.location.href.split("?")[1].split(/;+/g)
    for (var x = 0; x < queris.length; x++) if (queris[x].startsWith("lang")) queris.splice(x, 1)
    window.location = `${window.location.href.split("?")[0]}${queris.length > 0 ? `?${queris.join(";")}` : ""}`
  }
  if (read("color")) {
    data.establecer("colorMode", read("color"))
    queris = window.location.href.split("?")[1].split(/;+/g)
    for (var x = 0; x < queris.length; x++) if (queris[x].startsWith("color")) queris.splice(x, 1)
    window.location = `${window.location.href.split("?")[0]}${queris.length > 0 ? `?${queris.join(";")}` : ""}`
  }
  lang = data.obtener("idioma")

  data.iniciar();
  if (data.obtener("rightClick") == "true") {
    document.oncontextmenu = function () { }
  } else {
    document.oncontextmenu = function () { return false }
  }
  if (data.obtener("select") == "true") {
    document.getElementById("body").classList.add("select");
    document.getElementById("body").ondragstart = function () { return false }
    document.getElementById("body").onselectstart = function () { return false }
  } else {
    document.getElementById("body").classList.remove("select");
    document.getElementById("body").ondragstart = function () { }
    document.getElementById("body").onselectstart = function () { }
  }
  if (data.obtener("colorMode") !== "") {
    document.getElementById("body").className = data.obtener("colorMode")
  }
  refreshNavigationBar();
  window.onresize = function () {
    refreshNavigationBar();
  }
  language()
  setTimeout(function () {
    if(!window.confirm("La página se encuentra en mantenimiento.\n¿Desea acceder aunque pueda encontrarse múltiples fallos de diseño y/o funcionamiento?")) {
      go("https://google.com")
    }
    unlock()
  }, 750)
}





/* ELEMENTAL FUNCTIONS */

function debug() {
  if(window.prompt("Introduzca \"CONFIRMAR\" para declarar que es consciente de que los datos serán reiniciados y no será posible recuperarlos.").toLowerCase() == "confirmar"){
    data.reset()
    window.location.reload()
  } else {
    window.alert("La operación fue cancelada dado que la clave de activación no era correcta.")
  }
}

async function require(url, canonical) {
  var response = await fetch(`${canonical ? `${document.querySelector("link[rel='canonical']").getAttribute("href")}${url}` : `${url}`}`);
  if (window.location.href.startsWith("http://127.0.0.1:8080/")) response = await fetch(`${canonical ? `http://127.0.0.1:8080/${url}` : `${url}`}`);
  const json = await response.json();
  return json
}
function read(value) {
  if (!window.location.href.split("?")[1]) return
  const values = window.location.href.split("?")[1].split(/;+/g)
  var devolver = ""
  values.forEach(element => {
    if (element.split("=")[0] == value) devolver = element.split("=")[1]
  })
  return devolver
}
async function language() {
  const texts = await require(`json/lang/${lang}.json`, true)
  for (const x in texts) {
    try { document.getElementById(`${x}`).innerHTML = texts[x] } catch { }
  }
}

function go(page, newTabBoolean) {
  if (page.startsWith(":") && window.location.href.startsWith("http://127.0.0.1:8080/")) page = page.replace(":", "http://127.0.0.1:8080/")
  if (page.startsWith(":")) page = page.replace(":", "https://gacarbla.github.io/")
  if (window.location.href.split("?")[1]) page = `${page}?${window.location.href.split("?")[1]}`
  if (newTabBoolean) {
    window.open(`${page}`, "GΛCΛRBLΛ", "width=1080, height=440")
  } else {
    window.location = `${page}`
  }
}
async function showlist(id) {
  if (document.getElementById(`${id}_list`)) {
    document.getElementById(id).removeChild(document.getElementById(`${id}_list`))
  } else {
    const lista = document.getElementById(id)
    if (!lista) return console.error("Esta lista no existe o no se encuentra disponible")
    const listasJSON = await require("json/windows/settings.json", true)
    if (!listasJSON) return console.log("No ha sido posible obtener la información de las listas")
    const listaArray = listasJSON.textos[id].options
    if (!listaArray) return console.error("No ha sido posible cargar la información de la lista")
    var options = []
    var finalList = []
    listaArray.forEach(option => {
      options.push(`<li id=\"${id}_opt_${option.value}\" ${option.enabled ? "" : "class=\"disabled\""}>${option.flag ? `<img src=\"${option.flag}\">` : ""}${option.name ? `<p>${option.name}</p>` : ""}</li>`)
      if (option.enabled) finalList.push(option)
    })
    document.getElementById(id).innerHTML = `${document.getElementById(id).innerHTML}<ul id=\"${id}_list\">%%options%%</ul>`.replace("%%options%%", options.join(""))
    finalList.forEach(option => {
      if (id == "langSelector") {
        document.getElementById(`${id}_opt_${option.value}`).addEventListener("click", function () {
          data.establecer("idioma", option.value)
          lang = option.value
          refreshNavigationBar()
          language()
        })
      } else if (id=="modoColorSelector") {
        document.getElementById(`${id}_opt_${option.value}`).addEventListener("click", function () {
          document.getElementById("body").classList.remove(data.obtener("colorMode"))
          data.establecer("colorMode", option.value)
          document.getElementById("body").classList.add(option.value)
        })
      }
    })
  }
}
function unlock() {
  windows.close("loader")
}
function lock() {
  windows.new("loader", "loader")
}