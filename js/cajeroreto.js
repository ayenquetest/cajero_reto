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


function reiniciarBoton()
{
    t.value = null;

}


function entregarDinero() 
{
    dinero = parseInt(t.value);
    var dineroTemp = dinero;
    var hora = devolverHora();
   for (var bi of caja)
    {
        if (dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);

            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }

            entregado.push(new Billete(bi.valor,papeles));
            dinero = dinero - (bi.valor*papeles);
        }

    }

    if(dinero > 0)
    {
        resultado.innerHTML +="<h1> Saldo insuficiente </h1>"; //agrega un valor a una etiqueta del HTML, atributo del objeto resultado
        console.log(caja);
        console.log(entregado);
        console.log(dinero);
    }
    else
    {
       for(var e of entregado)
       {
           if(e.cantidad > 0)
           {
            resultado.innerHTML += ("<li><strong>" + e.cantidad + " </strong>" + e.devolvertipo() + "s de S/. <strong>" + e.valor + "</strong>" + "</ul></li><img src=" + e.imagen.src + "> <hr>");

            for(var c of caja)
            {
                 if(c.valor == e.valor)
                 {
                     c.cantidad = c.cantidad - e.cantidad;
                 }
            }

           }
       }
       horario.innerHTML += ("Retiro de  S/."+ dineroTemp +  " | Hora : "  + hora + "<br>");
       console.log(caja);
       console.log(entregado);
       saldoCaja = saldoCaja - sumaCaja(entregado);
       saldo.innerHTML = ("<strong> Saldo actual del cajero: " + saldoCaja + "<hr>");
       
    }
    entregado = [];
}

function sumaCaja(arreglo)
{
    
    var suma = 0;
    for(var i of arreglo)
    {
        suma += i.cantidad*i.valor;
    }

    return suma;

}

function devolverHora()
{
    var tiempo = new Date();
    var hora = tiempo.getHours();
    var minuto = tiempo.getMinutes();
    var segundo = tiempo.getSeconds();
    var horaTexto = hora + " : " + minuto + " : " + segundo;
    return horaTexto;
}