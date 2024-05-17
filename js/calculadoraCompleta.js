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
    // Evalúa la operación almacenada en la variable global 'operacion'
    var resultado = eval(display.innerText);
    // Muestra el resultado en el display
    display.innerText = resultado;
    operacion = "";
}

function operarSigno(signo) {
    var display = document.getElementById("idResultado");
    if (operacion !== "") {
        operar();
    }
    // Guarda el signo de la operación pendiente
    operacion = signo;
    // Guarda la operación hasta el momento en el display
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
