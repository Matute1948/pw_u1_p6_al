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
    console.log(apellido);
    apellido = "Achig";
    console.log(apellido);

    //declaracion de arreglos 
    const diaSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
    console.log(diaSemana);
    console.log(diaSemana[0]);
    console.log(diaSemana[1]);
    console.log(diaSemana[5]);

    diaSemana[5] = "Sabado";

    console.log(diaSemana[5]);

    diaSemana.push("domingo");

    console.log(diaSemana[6]);

    console.log(diaSemana);

    diaSemana.unshift("dias");

    console.log(diaSemana);

    const numeroPares = [2,4,6,8,10];

    console.log(numeroPares);

    const numerosImpares = [1,3,5,7,9];

    const numerosCompletos = numeroPares.concat(numerosImpares);
    console.log(numerosCompletos);

    for(const dia of diaSemana){
        console.log(dia);
        //la buena practica es con 3 iguales 
        if(dia === "Viernes"){
            console.log("Por fin viernes vamos a tomar XD");
        }
    
    }

    if(diaSemana[0] === undefined){
        console.log("no tiene valor")
    }else{
        console.log("Si, tiene valore")
    }

    //manejo de objetos dentro de JS
    const estudiante = {
        nombre:"Andres",
        apellido:"Lugmaña",
        edad:34,
        genero: "M",
        ciudadNecimiento: "Quito"
    }

    console.log(estudiante);
    console.log(estudiante.apellido);

    estudiante.nombre = "Felipe";
    console.log(estudiante);

    //

    const profesor = {
        nombre:"And",
        apellido:"TFT",
        edad: 34 ,
        genero: "m",
        ciudad: "Quito",
        direccion: {
            callePrincipal : "Av Puerto Rico",
            calleSEcundaria : "Argentina",
            numeracion : "S/N",
            barrio: "San Carlos" 
        }
    }

    console.log(profesor)
    console.log(profesor.direccion.barrio)

    //Arreglo de objetos

    const estu1 ={
        nombre: "Felipe",
        apellido: "Tobar"
    } 
    const estu2 ={
        nombre: "Arelis",
        apellido: "Cacuango"
    } 
    const estu3 ={
        nombre: "Jhomara",
        apellido: "Chuquin"
    } 
    const estu4 ={
        nombre: "Kerly",
        apellido: "Chuqui"
    } 
    const estu5 ={
        nombre: "Andreinda",
        apellido: "Aguinda"
    } 

    const estudiante1 = [estu1, estu2, estu3, estu4, estu5] ;
    console.log(estudiante1);
    console.table(estudiante1);
    console.log(estudiante1[1]);
    console.log(estudiante1[1]);

    estudiante1[1].apellido="cambiar apellido";
    console.table(estudiante1);

    const profesores = [
        {
            nombre:"Andrea",
            edad : 24, 
        },
        {
            nombre:"Alison",
            edad : 22, 
        },
        {
            nombre:"Diego",
            edad : 32, 
        }
    ]
    console.table(profesores);

    var prof = profesores.pop(); //elimna elementos de la lista

    console.log(prof);
    console.table(profesores);

    //DESESTRUCTURAR ARREGLOS

    const diaSemana2 = ["Lunes","Martes","Miercoles","Jueves","Viernes"];

    const [dia1,dia2,dia3,dia4,dia5] = diaSemana2;

    console.log(dia2);
    console.log(dia4);

    console.table(diaSemana2);

    const [d1,d2,d3,d4,d5]= ["Lunes-1","Martes-2","Miercoles-3","Jueves-4","Viernes"];
    console.log(d2);
    console.log(d5);

    //desestructuracion de objetos 

    const vehiculo = {
        marca:"toyota",
        modelo:"Prius",
        anio:2018
    }

    const {marca,anio} = vehiculo;
    console.log(marca);
    console.log(anio);

    const {modelo} = vehiculo

    console.log(modelo);

    //desestructuracion de un objeto, que tenga una atributo compuesto
    const videojuego = {
        nombreV: "God of War",
        anioo: "2018",
        genero: "Accion",
        estudio: {
            nomEst: "Santa Monica",
            director: "Cory Barlog",
            sede: "Los Angeles"
        }
    }

    const {nombreV, estudio : {nomEst} } = videojuego;

    console.log(nombre);
    console.log(nomEst);


}