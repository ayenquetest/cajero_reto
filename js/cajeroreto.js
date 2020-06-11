var imagenes =[];

imagenes["valor200"] ="billete200.png";
imagenes["valor100"] ="billete100.png";
imagenes["valor50"] ="billete50.png";
imagenes["valor20"] ="billete20.png";
imagenes["valor10"] ="billete10.png";
imagenes["valor5"] ="moneda5.png";
imagenes["valor2"] ="moneda2.png";
imagenes["valor1"] ="moneda1.png";


class Billete
{
    constructor(valor,cantidad)
    {   
        this.valor = valor;
        this.cantidad = cantidad;
        this.imagen = new Image();
        this.imagen.src = imagenes["valor" + this.valor];
    }

    mostrar()
    { 
        document.body.appendChild(this.imagen); // se agrega la etiquta img .. a la etiqueta body
    }
    
    devolvertipo()
    {
        if(this.valor >= 10)
        {
            return "Billete";
        }
        else
        {
            return "Moneda";
        }
    }
    
}



var caja =[];
var entregado = [];
var dinero;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultadoId");
var saldo = document.getElementById("saldoId");
var horario = document.getElementById("horarioId");

var b = document.getElementById("extraer");
b.addEventListener("click",entregarDinero);
b.addEventListener("click",reiniciarBoton);


t = document.getElementById("dinero")

caja.push(new Billete(200,15));
caja.push(new Billete(100,15));
caja.push(new Billete(50,15));
caja.push(new Billete(20,20));
caja.push(new Billete(10,20));
caja.push(new Billete(5,20));
caja.push(new Billete(2,20));
caja.push(new Billete(1,20));

var saldoCaja = sumaCaja(caja);
saldo.innerHTML = ("<strong> Saldo actual del cajero: " + saldoCaja + "<hr>");
console.log(caja);
