/* Ejercicio 1 - Funciones Geométricas */
/* Cuadrado*/
function calcularPerimetroCuadrado(lado) {
    return lado * 4;
}
function calcularAreaCuadrado(lado) {
    return lado * lado;
}
function calcularCuadrado() {
    let lado = parseFloat(document.getElementById("cuadLado").value);
    let perimetro = calcularPerimetroCuadrado(lado);
    let area = calcularAreaCuadrado(lado);
    document.getElementById("cuadPerim").innerText = perimetro.toFixed(2);
    document.getElementById("cuadArea").innerText = area.toFixed(2);
}
/* Triángulo */
function calcularPerimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}
function calcularAreaTriangulo(base, altura) {
    return base * altura / 2;
}
function calcularPerimT() {
    let lado1 = parseFloat(document.getElementById("tLado1").value);
    let lado2 = parseFloat(document.getElementById("tLado2").value);
    let lado3 = parseFloat(document.getElementById("tLado3").value);
    let perimetro = calcularPerimetroTriangulo(lado1, lado2, lado3);
    document.getElementById("triaPerim").innerText = perimetro.toFixed(2);
}
function calcularAreaT() {
    let base = parseFloat(document.getElementById("tBase").value);
    let altura = parseFloat(document.getElementById("tAltura").value);
    let area = calcularAreaTriangulo(base, altura);
    document.getElementById("triaArea").innerText = area.toFixed(2);
}
/* Círculo */
function calcularPerimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}
function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}
function calcularCirculo() {
    let radio = parseFloat(document.getElementById("cRadio").value);
    let perimetro = calcularPerimetroCirculo(radio);
    let area = calcularAreaCirculo(radio);
    document.getElementById("circPerim").innerText = perimetro.toFixed(2);
    document.getElementById("circArea").innerText = area.toFixed(2);
}

/* Ejercicio 2: Promedio, Mediana y Moda */
function generateRandomArray() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}
function calcularPromedio(array) {
    return array.reduce((a, b) => a + b) / array.length;
}
function calcularMediana(array) {
    array.sort((a, b) => a - b);
    if (array.length % 2 == 0) {
        return (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
    }
    return array[Math.floor(array.length / 2)];
}
function calcularModa(array) {
    let moda = 0;
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                count++;
            }
        }
        if (count > max) {
            max = count;
            moda = array[i];
        }
    }
    return moda;
}
function calcularPromedioBtn(){
    let list = document.getElementById("promNums");
    let array = (list.value === "" ? list.placeholder : list.value ).split(",").map(x => parseFloat(x));
    let promedio = calcularPromedio(array);
    document.getElementById("promedio").innerText = promedio.toFixed(2);
}
function calcularMedianaBtn(){
    let list = document.getElementById("medNums");
    let array = (list.value === "" ? list.placeholder : list.value ).split(",").map(x => parseFloat(x));
    let mediana = calcularMediana(array);
    document.getElementById("mediana").innerText = mediana.toFixed(2);
}
function calcularModaBtn(){
    let list = document.getElementById("modNums");
    let array = (list.value === "" ? list.placeholder : list.value ).split(",").map(x => parseFloat(x));
    let moda = calcularModa(array);
    document.getElementById("moda").innerText = moda.toFixed(2);
}