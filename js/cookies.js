const cookies = {
  list: {
    "cookiesDesarrollador": [
      "select",
      "rightClick"
    ],
    "cookiesAjustes": [
      "colorMode",
      "devModeStatus",
      "easterEggs",
    ]
  },
  activar(grupo) {
    this.establecer(`${grupo}`, "true")
    refreshNavigationBar();
  },
  iniciar() {
    if (!this.obtener("cookiesAjustes")) { this.establecer(`cookiesAjustes`, "true") }
    if (!this.obtener("cookiesDesarrollador")) { this.establecer(`cookiesDesarrollador`, "true") }
    let cookiesObject = {}
    let LocalCookies = (document.cookie).split(/;+/g)
    LocalCookies.forEach(cookie => {
      cookiesObject[`${cookie.trim().split(/=+/g)[0]}`] = cookie.split(/=+/g)[1]
    })
    if (Object.keys(cookiesObject) < 1) {
      if (!warned) {
        warned = true
        window.alert("Se ha detectado que su navegador no permite el almacenamiento de Cookies esenciales.\nDe forma automática, todas las funciones de almacenamiento de datos, cookies y otra información se ve paralizada y deshabilitada.")
      }
    }
  },
  desactivar(grupo) {
    try {
      this.establecer(`${grupo}`, "false")
      this.list[`${grupo}`].forEach(cookie => this.eliminar(`${cookie}`))
      refreshNavigationBar();
    } catch (e) {
      console.error(e)
      return false
    }
  },
  eliminar(ruta) {
    document.cookie = `"${ruta}"=;max-age=0;path="/"`;
    document.cookie = `'${ruta}'=;max-age=0;path="/"`;
    document.cookie = `${ruta}=;max-age=0;path="/"`;
    return document.cookie
  },
  establecer(ruta, valor) {
    var enabled = true
    var x = 0;
    for (x = 0; x < Object.keys(this.list).length; x++) {
      if (this.list[`${Object.keys(this.list)[x]}`].includes(`${ruta}`)) {
        if (this.obtener(`${Object.keys(this.list)[x]}`) == "false") {
          console.warn(`Las cookies \"${Object.keys(this.list)[x]}\" están desactivadas. Esto podría alterar el funcionamiento de la página.`);
          console.info("Cookie no actualizada debido a la configuración de cookies.");
          enabled = false;
          this.list[`${Object.keys(this.list)[x]}`].forEach(cookie => this.eliminar(`${cookie}`))
        }
      }
    }
    if (enabled) {
      document.cookie = `${ruta.trimStart()}=${valor}; secure; max-age=604800}`
      return console.info(`La cookie ${ruta} tiene ahora el valor \"${valor}\"`)
    }
  },
  existe(ruta) {
    let cookies = {};
    let LocalCookies = (document.cookie).split(/;+/g);
    LocalCookies.forEach(cookie => {
      cookies[`${cookie.split(/=+/g)[0]}`] = cookie.split(/=+/g)[1];
    })
    if (cookies[`${ruta}`] || cookies[` ${ruta}`]) return true;
    return false;
  },
  obtener(ruta) {
    let cookies = {}
    let LocalCookies = (document.cookie).split(/;+/g)
    LocalCookies.forEach(cookie => {
      cookies[`${cookie.split(/=+/g)[0]}`] = cookie.split(/=+/g)[1]
    })
    return cookies[`${ruta}`] || cookies[` ${ruta}`]
  },
  reset() {
    let LocalCookies = (document.cookie).split(/;+/g)
    LocalCookies.forEach(cookie => {
      document.cookie = `"${cookie.trim().split(/=+/g)[0]}"=;max-age=0;path="/"`;
      document.cookie = `'${cookie.trim().split(/=+/g)[0]}'=;max-age=0;path="/"`;
      document.cookie = `${cookie.trim().split(/=+/g)[0]}=;max-age=0;path="/"`;
    })
    this.iniciar();
    document.getElementById("cookiesDesarrollador").checked = true
    document.getElementById("cookiesAjustes").checked = true
    document.getElementById("body").className = "oscuro"
    document.oncontextmenu = function () { return false }
    refreshNavigationBar();
  },
  table() {
    let cookies = {}
    let LocalCookies = (document.cookie).split(/;+/g)
    LocalCookies.forEach(cookie => {
      cookies[`${cookie.trim().split(/=+/g)[0]}`] = cookie.split(/=+/g)[1]
    })
    return console.table(cookies)
  }
}