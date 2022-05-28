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