var operandoa;
var operandob;
var operacion;

function init(){
//variables
var resultado = document.getElementeById("resultados");
var reset = document.getElementeById("reset");
var suma = document.getElementeById("suma");
var resta = document.getElementeById("resta");
var multiplicacion = document.getElementeById("multiplicacion");
var division = document.getElementeById("division");
var igual = document.getElementeById("igual");
var uno = document.getElementeById("uno");
    var dos = document.getElementeById("dos");
    var tres = document.getElementeById("tres");
    var cuatro = document.getElementeById("cuatro");
    var cinco = document.getElementeById("cinco");
    var seis = document.getElementeById("seis");
    var siete = document.getElementeById("siete");
    var ocho = document.getElementeById("ocho");
    var nueve = document.getElementeById("nueve");
    var cero = document.getElementeById("cero");

    //Eventos
    uno.onclick = function(e){
        resultado.textcontent=resultado.textcontent + "1"
    }
    dos.onclick= function(e){
        resultado.textcontent=resultado.textcontent + "2"
    }
    tres.onclick= function(e){
        resultado.textcontent=resultado.textcontent + "3"
    }
    cuatro.onclick= function(e){
        resultado.textcontent=resultado.textcontent + "4"
    }
    cinco.onclick= function(e){
        resultado.textcontent=resultado.textcontent + "5"
    }
    seis.onclick= function(e){
        resultado.textcontent=resultado.textcontent + "6"
    }
    siete.onclick= function(e){
        resultado.textcontent=resultado.textcontent + "7"
    }
    ocho.onclick= function(e){
        resultado.textcontent=resultado.textcontent + "8"
    }
    nueve.onclick= function(e){
        resultado.textcontent=resultado.textcontent + "9"
    }
    cero.onclick= function(e){
        resultado.textcontent=resultado.textcontent + "0"
    }
    reset.onclick= function(e){
        resetear();
    }
    suma.onclick= function(e){
        operandoa = resultado.textcontent;
        operacion= "+";
        limpiar();
    }
    multiplicacion.onclick= function(e){
        operandoa = resultado.textcontent;
        operacion= "*";
        limpiar();
    }
    resta.onclick= function(e){
        operandoa = resultado.textcontent;
        operacion= "-";
        limpiar();
    }
    division.onclick= function(e){
        operandoa = resultado.textcontent;
        operacion= "/";
        limpiar();
    }
    igual.onclick= function(e){
        operandoa = resultado.textcontent;
            resolver();
    }
        
    function limpiar(){
        resultado.textcontent= "";
    }
    function resetear(){
        resultado.textcontent= "";
        operandoa = 0;
        operandob = 0;
        operacion= "";
    }
    function resolver(){
        var res = 0;
        switch(operacion){
            case "+":
                res = parsefloat(operandoa) + parseFloat(operandob);
            break;
        
            case "-":
            res = parsefloat(operandoa) - parseFloat(operandob);
            break;

            case "*":
                res = parsefloat(operandoa) * parseFloat(operandob);
            break;

            case "/":
            res = parsefloat(operandoa) / parseFloat(operandob);
            break;
        }
        resetear();
        resultado.textcontent = res;
    }
}