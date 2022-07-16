function onload() {
    document.getElementById("date").value = ""
    document.getElementById("time").value = ""
    document.getElementById("errormsg").hidden = false
    document.getElementById("tabla").hidden = true
    document.getElementById("errormsg2").hidden = true
}

function calcula() {
    var data = document.getElementById("date").value
    var hora = document.getElementById("time").value
    if (!data || !hora) {
        document.getElementById("errormsg").hidden = false
        document.getElementById("tabla").hidden = true
    } else {
        document.getElementById("errormsg").hidden = true
        document.getElementById("tabla").hidden = false
        data = data.split(/-+/g)
        hora = hora.split(/:+/g)
        if (data[0]<1970) {
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
    document.execCommand("copy")
}