class gatito {
    nombre = "";
    edad = 0;
    raza = "";
    caracter = "";



    constructor(nombre, edad, raza, caracter) {

        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.caracter = caracter;
    }

    comer() {

        console.log("ñam ñam");
    }
    arañar() {

        console.log("squash squash");
    }

    maullar() {
        console.log("miau");
    }

    dormir() {
        console.log("zzzzzzz");

    }
    ronronear() {

        console.log("prrrrrr");
    }

}

var Garfield = new gatito("Garfield", 9, "naranja", "dormilon");
var Felix = new gatito("Felix", 4, "caricaturas", "amistoso");
var Kitty = new gatito("Kitty", 1, "kawaii", "tranquilo");

var BenitoBodoque = new gatito("BenitoBodoque", 8, "gris", "super lindo");
var Chococat = new gatito("Chococat", 7, "caricaturas", "simpatico");
var Nermal = new gatito("Nermal", 1, "cartoon", "enfadoso")

var Penelope = new gatito("Penelope", 9, "blanca", "linda");
var Ruby = new gatito("Ruby", 11, "callejera", "la mas bella del mundo");
var Tori = new gatito("Tori", 1, "callejera", "enojona");

var Tom = new gatito("Tom", 9, "gris", "enojon");
var Silvestre = new gatito("Silvestre", 4, "caricaturas", "rencoroso");
var Java = new gatito("Java", 1, "de manchas", "amargada");
var Pelusita = new gatito("Pelusita", 9, "fina", "observadora");
var Bambina = new gatito("Bambina", 4, "cola rota", "amistosa");
var Pocky = new gatito("Pocky", 1, "siames", "miedosa");


console.log(Garfield);
Garfield.maullar();
Garfield.dormir();
Felix.ronronear();


console.log(Pocky);
Garfield.maullar();
Garfield.dormir();
Felix.ronronear();

console.log(Nermal);
Nermal.arañar();

console.log(Pelusita);
Pelusita.ronronear();

console.log(Penelope);
Penelope.maullar();

console.log(Tori);
Tori.dormir();

