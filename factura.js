function generarFactura() {
    let productoSelect = document.getElementById("productos");
    let precio = parseFloat(productoSelect.value);
    let cantidad = parseInt(document.getElementById("cantidad").value);
    
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingrese una cantidad válida");
        return;
    }
    
    let subtotal = precio * cantidad;
    let impuesto = subtotal * 0.15; // 15% de impuesto
    let total = subtotal + impuesto;
    
    document.getElementById("subtotal").value = subtotal.toFixed(2);
    document.getElementById("impuesto").value = impuesto.toFixed(2);
    document.getElementById("total").value = total.toFixed(2);
}
