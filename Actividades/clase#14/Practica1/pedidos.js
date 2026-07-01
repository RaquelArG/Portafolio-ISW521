
import datos from "./main.js"

var nombreSoda = "La Sodita UTN";
var pedidos = [];
 


export function crearPedido(datos) {
    for (let i; i < datos.length; i++){
    var pedido = {
    cliente: datos.cliente[i],
    producto: datos.producto,
    precio: datos.precio,
    notas: datos.notas
  };
    pedidos.push(pedido);
    }
  return pedido;
}
 
export function calcularTotalDia() {
  var total = 0;
  for (var i = 0; i < pedidos.length; i++) {
    total = total + pedidos[i].precio;
  }
  return total;
}
 
export function aplicarDescuento(pedido, porcentaje) {
  pedido.precio = pedido.precio - (pedido.precio * porcentaje / 100);
  return pedido;
}
 
