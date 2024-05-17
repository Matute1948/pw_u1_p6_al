var operacion = ""; 

function numeros(num) {

    var display = document.getElementById("idResultado");
    if (operacion !== "") {
        display.innerText += num;
    } else {
        display.innerText += num;
    }
}

function operar() {
    var display = document.getElementById("idResultado");
    var resultado = eval(display.innerText);
    display.innerText = resultado;
    operacion = "";
}

function operarSigno(signo) {
    var display = document.getElementById("idResultado");
    if (operacion !== "") {
        operar();
    }
    operacion = signo;
    display.innerText += "" + operacion + "";
}

function borrarTodo(){
    document.getElementById("idResultado").innerText = " ";
}

function borrarUno(){
    var display = document.getElementById("idResultado");
    var res = ""; 
    const dig = display.innerText;
    for (let i = 0; i < dig.length - 1; i++) {
        res += dig[i];
    }
    document.getElementById("idResultado").innerText = res;
}
