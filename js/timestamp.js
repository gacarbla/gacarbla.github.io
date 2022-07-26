function onload() {
    //document.getElementById("date").value = ""
    document.getElementById("errormsg").hidden = false
    //document.getElementById("tabla").hidden = true
    document.getElementById("errormsg2").hidden = true
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        document.getElementById("dateLabel").innerHTML = "Fecha y hora"
    }
    var divs_Array = document.getElementsByClassName("codeColors")
    var divs_Array = Array.prototype.filter.call(divs_Array, function(testElement){
        return testElement.nodeName === 'DIV';
    });
    divs_Array.forEach(element => {
        element.addEventListener("click", function(){
            var ventana = "<div class='ventanaEmergente'><div class='ventana'>"
            var svg = {
                js:"<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='m20 4-2 14.5-6 2-6-2L4 4h16Z'></path><path d='M7.5 8h3v8l-2-1'></path><path d='M16.5 8H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5'></path></svg>",
                css: '<svg id="css" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 4-2 14.5-6 2-6-2L4 4h16Z"></path><path d="M8.5 8h7L11 12h4l-.5 3.5-2.5.75-2.5-.75-.1-.5"></path></svg>',
                html: '<svg id="html" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 4-2 14.5-6 2-6-2L4 4h16Z"></path><path d="M15.5 8h-7l.5 4h6l-.5 3.5-2.5.75-2.5-.75-.1-.5"></path></svg>',
                py: '<svg id="py" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3"></path><path d="M12 15h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3"></path><path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4"></path><path d="M11 6v.01"></path><path d="M13 18v.01"></path></svg>',
                md: '<svg id="md" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path><path d="M7 15V9l2 2 2-2v6"></path><path d="M16 15V9m-2 4 2 2 2-2h-4Z"></path></svg>',
            }
            var contenido = {
                js: svg["js"]+"<p>Tras una casi absoluta mayoría de los trabajos realizados en JavaScript, se trata del lenguaje con el que más familiarizado me encuentro a día de hoy.<br>Distintos bots del programa de comunicación <i>Discord</i> (realizados con Node.js) y sistemas simples de páginas como esta, fundamentan mis conocimientos.<br>Más allá de ello, no he utilizado librerías u otros recursos del código nunca.</p>",
                css: svg["css"]+"<p>En un corto periodo he logrado avanzar en mis conocimientos sobre CSS3 lamentando al mismo tiempo mi paso entorpecido de autodidacta sin recursos.<br>Me he encontrado problemas ya resueltos en la comprensión de las animaciones y disposición de elementos siendo así necesario un esfuerzo adicional para lograr lo que conozco hoy en día. Teniendo en cuenta la gran posibilidad de que existan elementos que ni siquiera conozco y sean de gran importancia.</p>",
                html: svg["html"]+"<p>Con orígenes torpes y descuidados el html fue mi primer intento de introducción al mundo de la programación. Abandonado a penas sabiendo hacer un &lth1&gt, lo retomé años más tarde para desarrollar esta misma página.<br>Actualmente mis conocimientos no son muy avanzados, siendo consciente de no haber visto o profundizado en elementos cruciales y permaneciendo en un estado en el que mis pocos conocimientos de otros lenguajes no me permiten realizar las herramientas que deseo.</p>",
                py: svg["py"]+"<p>Tras la realización de tan solo dos proyectos en este lenguaje, mis conocimientos son notoriamente mediocres, apoyándome en lo aprendido con otros lenguajes como javascript y adaptándolo a la sintaxis, aún parcialmente desconocida para mí, de este código.</p>",
                md: svg["md"]+"<p>Este simple lenguaje fue el inicio de mi deseo de retomar mi aprendizaje a cerca del html5.<br>Tras ver su enorme utilidad y simplicidad a la hora de presentar un documento estructurado, con formato y distintas herramientas como tablas, títulos, fuentes y más, empecé a desarrollar un interés en la personalización de estos elementos mediante la insercción de fragmentos html en el documento markdown.</p>",
            }
            if (!document.getElementById('windows')){
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
        })
    })
    var menuCheck = document.getElementById("mobileMenu")
    menuCheck.checked = false
    var menu = document.getElementById("menu")
    menuCheck.addEventListener("change", function(){
        if(menuCheck.checked){
            menu.className = "visible"
        } else {
            menu.className = ""
        }
    })
    document.oncontextmenu = function(){return false}
}

function calcula() {
    const d = document.getElementById("date").value.split("T")
    var data = d[0]
    var hora = d[1]
    if (!data || !hora) {
        document.getElementById("errormsg").hidden = false
        document.getElementById("tabla").hidden = true
    } else {
        document.getElementById("errormsg").hidden = true
        document.getElementById("tabla").hidden = false
        data = data.split(/-+/g)
        hora = hora.split(/:+/g)
        var date = new Date(data[0], (data[1]-1), data[2], hora[0], hora[1])
        if (date.getTime()<0) {
            document.getElementById("errormsg2").hidden = false
        } else {
            document.getElementById("errormsg2").hidden = true
        }
        var date = new Date(data[0], (data[1]-1), data[2], hora[0], hora[1])
        ndate = date.getTime()/1000
        document.getElementById("t").innerHTML = `&ltt:${ndate}:t&gt`
        document.getElementById("T").innerHTML = `&ltt:${ndate}:T&gt`
        document.getElementById("d").innerHTML = `&ltt:${ndate}:d&gt`
        document.getElementById("D").innerHTML = `&ltt:${ndate}:D&gt`
        document.getElementById("f").innerHTML = `&ltt:${ndate}:f&gt`
        document.getElementById("F").innerHTML = `&ltt:${ndate}:F&gt`
        document.getElementById("R").innerHTML = `&ltt:${ndate}:R&gt`

        var ano = date.getFullYear()
        var mes = date.getMonth()+1
        var dia = date.getDate()

        var hora = date.getHours()
        var minuto = date.getMinutes()
        var segundo = date.getSeconds()
        
        let meses = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ]

        let semana = [
            "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
        ]

        var dia_semana = date.getDay()

        document.getElementById("t_try").innerHTML = `${hora}:${minuto}`
        document.getElementById("T_try").innerHTML = `${hora}:${minuto}:${segundo}`
        document.getElementById("d_try").innerHTML = `${dia}/${mes=="0"?"12":mes}`
        document.getElementById("D_try").innerHTML = `${dia}/${mes=="0"?"12":mes}/${ano}`
        document.getElementById("f_try").innerHTML = `${dia} de ${meses[mes-1]} de ${ano} ${hora}:${minuto}`
        document.getElementById("F_try").innerHTML = `${semana[dia_semana]}, ${dia} de ${meses[mes-1]} de ${ano} ${hora}:${minuto}`
    }
}

function copy(element) {
    var content = document.getElementById(element)
    content.select();
    document.execCommand("copy");
    document.getElementById("window").hidden = false;
    setTimeout(function(){
        document.getElementById("window").hidden = true;
    }, 1500)
}