class gatito {
    nombre = "";
    edad = 0;
    raza = "";
    caracter = "";

    //4- Agregar constructores 
    //Necesito construir con los atributos que ya defini en la clase

    constructor(nombre, edad, raza, caracter) {
        //funcion especial para construir donde necesito esos parametros 
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.caracter = caracter;
    }

    //3- Definir los metodos que seran definidos como funciones o acciones 

    maullar() {
        console.log("miau");
    }

    dormir() {
        console.log("zzzzzzz");

    }
    ronronear() {

        console.log("prrrrrr");
    }

    // arañar();
    //comer();



}

//5-para empezar a crear o instanciar objetos (gatos), vamos a utilizar la palabra reservada new nombreClass

var Garfield = new gatito("Garfield", 9, "naranja", "dormilon");
var Felix = new gatito("Felix", 4, "caricaturas", "amistoso");
var Kitty = new gatito("Kitty", 1, "kawaii", "tranquilo");

var BenitoBodoque = new gatito("BenitoBodoque", 8, "gris", "super lindo");
var Chococat = new gatito("Chococat", 7, "caricaturas", "simpatico");
var Nermal = new gatito("Nermal", 1, "cartoon", "enfadoso")

var Penelope = new gatito("Penelope", 9, "blanca", "linda");
var Felix = new gatito("Felix", 4, "caricaturas", "amistoso");
var Kitty = new gatito("Kitty", 1, "kawaii", "tranquilo");

var Garfield = new gatito("Garfield", 9, "naranja", "dormilon");
var Felix = new gatito("Felix", 4, "caricaturas", "amistoso");
var Kitty = new gatito("Kitty", 1, "kawaii", "tranquilo");

var Garfield = new gatito("Garfield", 9, "naranja", "dormilon");
var Felix = new gatito("Felix", 4, "caricaturas", "amistoso");
var Kitty = new gatito("Kitty", 1, "kawaii", "tranquilo");





















console.log(Garfield);
Garfield.maullar();
Garfield.dormir();
Felix.ronronear();





