


// Variables

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

// Funciones

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var xi, yf;
    var espacio = ancho / lineas;

for(l = 0; l < lineas; l++)

{
    yi = espacio * l;
    xf = espacio * (l + 1);
    xi = ancho - (espacio * l);
    yf = ancho - (espacio * (l + 1));

    dibujarLinea("purple", ancho - 549, yi, xf, ancho - 1);
    dibujarLinea("pink", ancho - 1, yi, xf, ancho - 549);
    dibujarLinea("yellow", yi, ancho - 1, ancho - 1, yf);
    dibujarLinea("orange", xi, ancho - 549, ancho - 549, xf);
}

dibujarLinea("white", ancho - 549, ancho - 549, ancho - 549, ancho - 1);
dibujarLinea("white", ancho - 549, ancho - 1, ancho - 1, ancho - 1);
dibujarLinea("white", ancho - 549, ancho - 549, ancho - 1, ancho - 549);
dibujarLinea("white", ancho - 1, ancho - 549, ancho - 1, ancho - 1);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

