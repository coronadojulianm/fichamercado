function verFicha(){
    let nomp, lineap,cantidad,valor,verpro,vt
        nomp = document.getElementById("nombreProducto").value
        lineap = document.getElementById("lineaProduccion").value
        cantidad = document.getElementById("cantidadEquipos").value
        valor = document.getElementById("valor").value
        verpro = document.getElementById("versionesProducto").value
        
        vt = cantidad * valor

        document.getElementById("producto").innerHTML = "<h3><b>Producto Ingresado: "+nomp+"</b></h3>"
        document.getElementById("linea").innerHTML = "<h3><b>Linea Del Producto Ingresada: "+lineap+"</b></h3>"
        document.getElementById("verProduct").innerHTML = "<h3><b>Version Del Producto Ingresada: "+verpro+"</b></h3>"
        document.getElementById("cantidad").innerHTML = "<h3><b>Cantidad De Productos: "+cantidad+"</b></h3>"
        document.getElementById("valor").innerHTML = "<h3><b>Valor Individual Del Producto: "+valor+" </b></h3>"
        document.getElementById("total").innerHTML = "<h3><b> Valor total de equipos: $"+vt+"</b></h3>"
}