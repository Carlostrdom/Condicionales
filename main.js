// respuesta1
let numero = 5;
let numero1 = 3;

if (numero > numero1) {
    console.log(`${numero} es mayor que ${numero1}`);
} else {
    console.log(`${numero} no es mayor que ${numero1}`);
}

// respuesta2
let numeraA = 4;
let numeroB = 4;

if (numeraA === numeroB) {
    console.log("Los números son iguales");
} else {
    console.log("Los números son diferentes");
}


// respuesta3
let numeroC = 7;
let numeroD = 10;

if (numeroC > numeroD) {
    console.log(`${numeroC} es el número más grande`);
} else if (numeroC < numeroD) {
    console.log(`${numeroD} es el número más grande`);
} else {
    console.log("Los números son iguales");
}

// respuesta4

let numeroE = 8;
let numeroF = 3;
let numeroG = 5;

let menor = numeroE;

if (numeroF < menor) {
    menor = numeroF;
}

if (numeroG < menor) {
    menor = numeroG;
}

console.log(`El número más chico es ${menor}`);


// respuesta5

let persona1 = { nombre: "Juan", edad: 25, altura: 175 };
let persona2 = { nombre: "Ana", edad: 30, altura: 160 };

if (persona1.altura > persona2.altura) {
    console.log(`${persona1.nombre} es la persona más alta`);
} else if (persona1.altura < persona2.altura) {
    console.log(`${persona2.nombre} es la persona más alta`);
} else {
    console.log("Ambas personas tienen la misma altura");
}

if (persona1.edad > persona2.edad) {
    console.log(`${persona1.nombre} es la persona de mayor edad`);
} else if (persona1.edad < persona2.edad) {
    console.log(`${persona2.nombre} es la persona de mayor edad`);
} else {
    console.log("Ambas personas tienen la misma edad");
}

// respuesta6

let nombre = prompt("Ingresa tu nombre:");
let edad = parseInt(prompt("Ingresa tu edad:"));
let altura = parseFloat(prompt("Ingresa tu altura en cm:"));
let vision = parseFloat(prompt("Ingresa tu visión (de 1 a 10):"));

if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log(`${nombre}, estás capacitado para conducir.`);
} else {
    console.log(`${nombre}, no estás capacitado para conducir.`);
}

// respuesta7

let nombreIngresado = prompt("Ingresa tu nombre:");
let pase = prompt("Ingresa tu pase (vip o normal):").toLowerCase();
let poseeEntrada = prompt("¿Posees entrada? (si o no):").toLowerCase();

let nombrePermitido = "Carlos";

if (nombreIngresado === nombrePermitido || pase === "vip") {
    console.log("Bienvenido!");
} else if (poseeEntrada === "si") {
    let usarEntrada = prompt("¿Deseas utilizar tu entrada? (si o no):").toLowerCase();
    if (usarEntrada === "si") {
        console.log("Bienvenido!");
    } else {
        console.log("Entrada no utilizada, despedida.");
    }
} else {
    let deseaComprar = prompt("¿Deseas comprar una entrada? (si o no):").toLowerCase();
    if (deseaComprar === "si") {
        let dineroDisponible = parseFloat(prompt("Ingresa el dinero disponible:"));
        if (dineroDisponible >= 1000) {
            console.log("Entrada vendida, bienvenido!");
        } else {
            console.log("No tienes suficiente dinero para comprar una entrada.");
        }
    } else {
        console.log("Despedida.");
    }
}


// respuesta8
let numeroIncognita = Math.floor(Math.random() * 10) + 1;
let intentos = 3;

for (let i = 0; i < intentos; i++) {
    let numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 10:"));

    if (numeroIngresado === numeroIncognita) {
        console.log("Ganaste, has adivinado el número.");
        break;
    } else if (numeroIngresado > numeroIncognita) {
        console.log("El número ingresado es mayor, vuelve a intentarlo.");
    } else {
        console.log("El número ingresado es menor, vuelve a intentarlo.");
    }

    if (i === intentos - 1) {
        console.log("Lo siento, se han agotado los intentos. El número era " + numeroIncognita);
    }
}

// respuesta9
let edadA = parseInt(prompt("Ingresa tu edad:"));

if (edadA >= 0 && edadA <= 12) {
    console.log("Eres un infante");
} else if (edadA >= 13 && edadA <= 18) {
    console.log("Eres un adolescente");
} else if (edadA >= 19 && edadA <= 45) {
    console.log("Eres un mayor joven");
} else if (edadA > 45 && edadA <= 100) {
    console.log("Eres un anciano");
} else if (edadA > 100) {
    console.log("¿En realidad tienes esa edad?");
} else {
    console.log("Edad no válida");
}

// respuesta10
let jugador1 = prompt("Jugador 1: Ingresa PIEDRA, PAPEL o TIJERAS:").toUpperCase();
let jugador2 = prompt("Jugador 2: Ingresa PIEDRA, PAPEL o TIJERAS:").toUpperCase();

if (jugador1 === jugador2) {
    console.log("Es un empate");
} else if (
    (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
    (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
    (jugador1 === "TIJERAS" && jugador2 === "PAPEL")
) {
    console.log("Jugador 1 gana");
} else if (
    (jugador2 === "PIEDRA" && jugador1 === "TIJERAS") ||
    (jugador2 === "PAPEL" && jugador1 === "PIEDRA") ||
    (jugador2 === "TIJERAS" && jugador1 === "PAPEL")
) {
    console.log("Jugador 2 gana");
} else {
    console.log("Uno de los jugadores ha hecho trampa");
}

// respuesta11
let color = prompt("Ingresa un color:").toLowerCase();

switch (color) {
    case "blanco":
    case "negro":
        console.log("Falta de color");
        break;
    case "verde":
        console.log("El color de la naturaleza");
        break;
    case "azul":
        console.log("El color del agua");
        break;
    case "amarillo":
        console.log("El color del sol");
        break;
    case "rojo":
        console.log("El color del fuego");
        break;
    case "marrón":
        console.log("El color de la tierra");
        break;
    default:
        console.log("Excelente elección, no lo teníamos pensado");
}

// respuesta12

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let operacion = prompt("Ingresa la operación (suma, resta, multiplicación, división):").toLowerCase();

switch (operacion) {
    case "suma":
        console.log(`Resultado: ${num1 + num2}`);
        break;
    case "resta":
        console.log(`Resultado: ${num1 - num2}`);
        break;
    case "multiplicación":
        console.log(`Resultado: ${num1 * num2}`);
        break;
    case "división":
        if (num2 !== 0) {
            console.log(`Resultado: ${num1 / num2}`);
        } else {
            console.log("ERROR: No se puede dividir por 0");
        }
        break;
    default:
        console.log("Operación no válida");
}

// respuesta13

let nombreA = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");
let dni = prompt("Ingresa tu DNI:");
let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento:");

console.log(`Nombre: ${nombreA}`);
console.log(`Apellido: ${apellido}`);
console.log(`DNI: ${dni}`);
console.log(`Fecha de Nacimiento: ${fechaNacimiento}`);

let confirmacion = prompt("¿Son correctos estos datos? (si o no):").toLowerCase();

if (confirmacion === "si") {
    let dniObjeto = {
        nombreA: nombreA,
        apellido: apellido,
        dni: dni,
        fechaNacimiento: fechaNacimiento
    };
    console.table(dniObjeto);
    console.log("Registro exitoso");
} else {
    console.log("Vuelva a intentarlo en 1 mes");
}

