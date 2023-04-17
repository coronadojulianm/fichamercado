function verFicha(){
    let nomp, lineap,cantidad,valor,verpro,vtpc,cajar,valca,escaba,valesca,bascu,valbascu,terpago,valter,etiqco,valetiq,conecinter,valinter,vtca,vtesca,vtbas,vtpos,vteti,vtinter,vtfinal
        nomp = document.getElementById("nombreProducto").value
        lineap = document.getElementById("lineaProduccion").value
        cantidad = document.getElementById("cantidadEquipos").value
        valor = document.getElementById("valor").value
        verpro = document.getElementById("versionesProducto").value

        cajar = document.getElementById("cajaRegistradora").value
        valca = document.getElementById("valorCaja").value

        escaba = document.getElementById("escanerBarras").value
        valesca = document.getElementById("valorEscaner").value

        bascu = document.getElementById("basculaS").value
        valbascu = document.getElementById("valorBascula").value

        terpago = document.getElementById("terminalPago").value
        valter = document.getElementById("valorTerminal").value

        etiqco = document.getElementById("etiquetasCodigo").value
        valetiq = document.getElementById("valorEtiquetas").value

        conecinter = document.getElementById("conexionInter").value
        valinter = document.getElementById("valorInter").value

        vtpc = cantidad * valor

        vtca = cajar * valca
        vtesca = escaba * valesca
        vtbas = bascu * valbascu
        vtpos = terpago * valter
        vteti = etiqco * valetiq
        vtinter = conecinter * valinter
    
        vtfinal = parseInt(vtca) + parseInt(vtesca) + parseInt(vtbas) + parseInt(vtpos) + parseInt(vteti) + parseInt(vtinter);

        document.getElementById("producto").innerHTML = "<h3><b>Producto Ingresado: "+nomp+"</b></h3>"
        document.getElementById("linea").innerHTML = "<h3><b>Linea Del Producto Ingresada: "+lineap+"</b></h3>"
        document.getElementById("verProduct").innerHTML = "<h3><b>Version Del Producto Ingresada: "+verpro+"</b></h3>"
        document.getElementById("cantidad").innerHTML = "<h3><b>Cantidad De Productos: "+cantidad+"</b></h3>"
        document.getElementById("valorPc").innerHTML = "<h3><b>Valor Individual Del Pc: $"+valor+" </b></h3>"
        document.getElementById("total").innerHTML = "<h3><b>Valor total de equipos: $"+vtpc+"</b></h3>"

        document.getElementById("caja").innerHTML = "<h3><b>Cantidad De cajas: "+cajar+"</b></h3>"
        document.getElementById("valCaja").innerHTML = "<h3><b>Valor Individual De la caja: $"+valca+" </b></h3>"
        document.getElementById("totalCaja").innerHTML = "<h3><b>Valor total de cajas: $"+vtca+"</b></h3>"

        document.getElementById("escanerB").innerHTML = "<h3><b>Cantidad De escaner: "+escaba+"</b></h3>"
        document.getElementById("valEsca").innerHTML = "<h3><b>Valor Individual del escaner: $"+valesca+" </b></h3>"
        document.getElementById("totalEsca").innerHTML = "<h3><b>Valor total de cajas: $"+vtesca+"</b></h3>"

        document.getElementById("bascula").innerHTML = "<h3><b>Cantidad De basculas: "+bascu+"</b></h3>"
        document.getElementById("valBas").innerHTML = "<h3><b>Valor Individual De la bascula: $"+valbascu+" </b></h3>"
        document.getElementById("totalBas").innerHTML = "<h3><b>Valor total de cajas: $"+vtbas+"</b></h3>"

        document.getElementById("pos").innerHTML = "<h3><b>Cantidad De la terminal de pago(pos): "+terpago+"</b></h3>"
        document.getElementById("valPos").innerHTML = "<h3><b>Valor Individual Del Pc (pos): $"+valter+" </b></h3>"
        document.getElementById("totalPos").innerHTML = "<h3><b>Valor total de cajas: $"+vtpos+"</b></h3>"

        document.getElementById("etiqCodigo").innerHTML = "<h3><b>Cantidad De etiquetas y codigo de barras: "+etiqco+"</b></h3>"
        document.getElementById("valEti").innerHTML = "<h3><b>Valor Individual De las etiquetas y codigos de barras: $"+valetiq+" </b></h3>"
        document.getElementById("totalEti").innerHTML = "<h3><b>Valor total de cajas: $"+vteti+"</b></h3>"

        document.getElementById("conecInter").innerHTML = "<h3><b> Conexion a internet: "+conecinter+"</b></h3>"
        document.getElementById("valInter").innerHTML = "<h3><b>Valor Individual de la conexion mensual de internet: $"+valinter+" </b></h3>"
        document.getElementById("totalInter").innerHTML = "<h3><b>Valor total de internet: $"+vtinter+"</b></h3>"

        document.getElementById("valortotalFinal").innerHTML = "<h3><b>Valor Final De TODO lo registrado: $"+vtfinal+"</b></h3>"
}