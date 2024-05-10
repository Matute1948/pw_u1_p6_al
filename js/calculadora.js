function sumar(idNum1, idNum2){
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);
    var res = num1 + num2;
    console.log(res);
    document.getElementById("idResultado").innerText = res;//para acceder al contenido es con inner text :V

}
function restar(idNum1, idNum2){
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);
    var res = num1 - num2;
    console.log(res);
    document.getElementById("idResultado").innerText = res;//para acceder al contenido es con inner text :V

}
function multiplicar(idNum1, idNum2){
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);
    var res = num1 * num2;
    console.log(res);
    document.getElementById("idResultado").innerText = res;//para acceder al contenido es con inner text :V

}
function dividir(idNum1, idNum2){
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);
    var res = num1 / num2;
    console.log(res);
    document.getElementById("idResultado").innerText = res;//para acceder al contenido es con inner text :V

}
function sumar2(){
    var num1 = document.getElementById("idnum1").value;
    var num2 = document.getElementById("idnum2").value;
}