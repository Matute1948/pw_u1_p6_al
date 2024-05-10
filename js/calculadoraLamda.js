const sumar = (idNum1,idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);
    var res = num1 + num2;
    console.log(res);
    document.getElementById("idResultado").innerText = res;
}
const restar = (idNum1,idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);
    var res = num1 - num2;
    console.log(res);
    document.getElementById("idResultado").innerText = res;
}
const multiplicar = (idNum1,idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);
    var res = num1 * num2;
    console.log(res);
    document.getElementById("idResultado").innerText = res;
}
const dividir = (idNum1,idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);
    var res = num1 / num2;
    console.log(res);
    document.getElementById("idResultado").innerText = res;
}

function agregarElemento(){
    document.getElementById("idDivision").innerHTML = "<button>Nuevo</button>"; // es para elementos q dentro de su contenido aceptan elementos

}
function quitarElemento(){
    document.getElementById("idDivision").innerHTML = ""; // es para elementos q dentro de su contenido aceptan elementos

}

function conceptosJS(){
    // tipos de datos en JS
    //let, var const
    const IVA = 12;  // es para asignar valor que no van a ser alterados como el final en java 
    console.log(IVA);
    //IVA=15;
    //console.log(IVA) por ende lo que hicimos esta mal

    //no tiene mucho uso ya que let administra de mejor manera el espacio de memoria
    var nombre = "Andres";
    console.log(nombre)
    nombre = "Felipe";
    console.log(nombre) 

    //
    var apellido = "Lugmaña";
    console.log(apellido)
    apellido = "Achig"
    console.log(apellido)

}