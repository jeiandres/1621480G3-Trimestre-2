// literales arreglos

var cafes = ["Tostado Frances", "Colombiano", "Kona"];

console.log(cafes);
console.log(cafes.length);
console.log(cafes[0]);
console.log(cafes[1]);
console.log(cafes[2]);
console.log(cafes[3]);
for (let i = 0; i <cafes.length ; i++) {
 console.log(cafes[i]);
}


var asd = new Array("Tostado Frances", "Colombiano", "Kona");
console.log(asd);

var arreglo = [1, 3, 444, 6, 88, 4, 3, 3, 1];

// estructurado
mayor = arreglo[0];
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
        mayor = arreglo[i];
    }
}
console.log(mayor);

// funcional
console.log(arreglo.sort(function (a, b) {
    return a - b
})[arreglo.length - 1]);
// funcional arrow function (lambda)
console.log(arreglo.sort((a, b) => a - b)[arreglo.length - 1]);


var arreglo5 = [1, 2, , , , , 6];
console.log(arreglo5);


// literales booleanos

var literalVerdadero = Boolean(true);
var primitivoVerdadero = true;
console.log(typeof literalVerdadero);
console.log(typeof primitivoVerdadero);

if (literalVerdadero == primitivoVerdadero) {
    console.log("son iguales");
} else {
    console.log("son diferentes");
}

// literales enteros

let hexadecimal = 0x11111;
console.log(hexadecimal);
let binario = 0b11111;
console.log(binario);
let octal = 0o11111;
console.log(octal);
let decimal = 11111;
console.log(decimal);

// literal coma flotante
let a = 5.5;

// literales objetos

let trasmilenio = {
    llantas: 8,
    color: 'rojo',
    cantidadSillas: 100,
    sillas: {
        color: 'rojo',
        material: 'plastico'
    }
};
trasmilenio.marca = 'marco polo';
console.log(trasmilenio.sillas.color);
console.log(trasmilenio.marca);

var Ventas = "Toyota";

function TiposCarro(nombre) {
    if (nombre == "Honda") {
        return nombre;
    } else {
        return "Lo siento, nosotros no vendemos " + nombre + ".";
    }
}

var carro = {miCarro: "Saturn", getCarro: TiposCarro("Renault"), especial: Ventas};

console.log(carro.miCarro);  // Saturn
console.log(carro.getCarro); // Honda
console.log(carro.especial); // Toyota

var propiedadesDeNombreInusual = {
    "": "Un string vacio",
    "!": "Bang!"
}
console.log(propiedadesDeNombreInusual[""]);
console.log(propiedadesDeNombreInusual["!"]);

// refencias

let variableUno = 1;
let variableDos = variableUno;

variableDos = 10;

console.log(variableUno);
console.log(variableDos);

// objetos se pasan por referencia
var arreglo1 = [1, 3, 5, 2, 3, 8];
var arreglo2 = [];

for (let i = 0; i < arreglo1.length; i++) {
    arreglo2.push(arreglo1[i]);
}
arreglo2.sort();

console.log(arreglo1);
console.log(arreglo2);


// literales string

let varable = "hola mundo";
let varable2 = 'hola mundo';


// Uso de caracteres especiales en strings

console.log("una linea \n otra linea");

var str = "this string is broken cross multiple lines."
console.log(str);

var home = "c:\\temp";

var dir = "El lee \"La cremación de Sam McGee\" de R.W. Service.";
console.log(dir);


// sentencia de bloque
let aaa = 1;
switch (aaa) {
    case 1 : {
        let a = 10;
    }
}









