function sumar() {
    let x = parseInt(document.getElementById("num").value);
    let y = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = x + y
}

function resta() {
    let x = parseInt(document.getElementById("num").value);
    let y = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = x - y
}

function division() {
    let x = parseInt(document.getElementById("num").value);
    let y = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = x / y
}

function multiplicacion() {
    let x = parseInt(document.getElementById("num").value);
    let y = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = x * y
}

/*
console.log("suma")
const suma=(a,b) => a+b;
console.log(suma(10,10));
console.log("resta")
const resta = (a,b) => a-b;
console.log(resta(10,10));
console.log("multiplicacion")
const multiplicar = (a,b) => a*b;
console.log(multiplicar(10,10));
console.log("division")
const division = (a,b) => a/b;
console.log(division(10,10));
alert(`Primer numero: ${a} segundo numero: ${b} el resultado es: ${suma}`);
*/
/*const formContact = () => {
    let name = document.getElementById("name").value;
    let birthday = document.getElementById("birthday").value;
    let message = document.getElementById("message").value;
    alert(`Bienvenido: ${name} tu fecha de nacimiento es: ${birthday} Gracias por escribir este mensaje: ${message}`);
    //console.log(name.className);
}*/
/*
let num = prompt ("Ingresa un numero a multiplicar", "");

while (num <= 1000) {
    num=num*num;
    console.log(num);
}
console.log("tu numero llego a ser mayor o igual de 1000, valor del numero: "+num+" fin del ciclo");
*/