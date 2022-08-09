function load() {
    var mmb = document.getElementById("mobilemenubutton")
    mmb.addEventListener("click", function () {
        document.getElementById("header").classList.toggle("active")
    })
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