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
    uno.onclick= fuction(e){
        resultado.textcontent=resultado.textcontent + "1"
    }
    dos.onclick= fuction(e){
        resultado.textcontent=resultado.textcontent + "2"
    }
    tres.onclick= fuction(e){
        resultado.textcontent=resultado.textcontent + "3"
    }
    cuatro.onclick= fuction(e){
        resultado.textcontent=resultado.textcontent + "4"
    }
    cinco.onclick= fuction(e){
        resultado.textcontent=resultado.textcontent + "5"
    }
    seis.onclick= fuction(e){
        resultado.textcontent=resultado.textcontent + "6"
    }
    siete.onclick= fuction(e){
        resultado.textcontent=resultado.textcontent + "7"
    }
    ocho.onclick= fuction(e){
        resultado.textcontent=resultado.textcontent + "8"
    }
    nueve.onclick= fuction(e){
        resultado.textcontent=resultado.textcontent + "9"
    }
    cero.onclick= fuction(e){
        resultado.textcontent=resultado.textcontent + "0"
    }
    reset.onclick= fuction(e){
       resetear(),
    suma.onclick= fuction(e){
       operandoa = resultado.textcontent;
       operacion= "+";
       limpiar();
    }
    multiplicacion.onclick= fuction(e){
        operandoa = resultado.textcontent;
        operacion= "*";
        limpiar();
    }
    resta.onclick= fuction(e){
        operandoa = resultado.textcontent;
        operacion= "-";
        limpiar();
    }
    division.onclick= fuction(e){
        operandoa = resultado.textcontent;
        operacion= "/";
        limpiar();
    }
    igual.onclick= fuction(e){
        operandoa = resultado.textcontent;
         resolver();
    }
      
}
fuction limpiar(){
    resultado.textcontent= "";
}
fuction resetear(){
    resultado.textcontent= "";
    operandoa = 0;
    operandob = 0;
    operacion= "";
}
fuction resolver(){
    var res = 0;
    switch(operacion){
        case "+"
        res = parsefloat(operandoa) + parseFloat(operandob);
        break;
       
        case "-"
        res = parsefloat(operandoa) - parseFloat(operandob);
        break;

        case "*"
        res = parsefloat(operandoa) * parseFloat(operandob);
        break;

        case "/"
        res = parsefloat(operandoa) / parseFloat(operandob);
        break;
    }
resetear();
resultado.textcontent = rest;
}
