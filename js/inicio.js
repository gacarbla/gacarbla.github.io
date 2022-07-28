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

function load() {
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
  document.getElementById("sol").addEventListener("click", function () { document.getElementById("body").className = "claro" })
  document.getElementById("luna").addEventListener("click", function () { document.getElementById("body").className = "oscuro" })
  document.oncontextmenu = function () { return false }
}

function closeWindow() { document.getElementById('windows').innerHTML = "" }