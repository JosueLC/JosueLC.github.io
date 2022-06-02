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

/* Funciones */
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
    let arrCnt = {}
    let moda = [];
    let max = 0;
    array.forEach(x => {arrCnt[x] ? arrCnt[x]++ : arrCnt[x] = 1});
    arrCnt = Object.entries(arrCnt);
    arrCnt.forEach(x => {x[1] > max ? max = x[1] : null});
    arrCnt.forEach(x => {if(x[1] == max) moda.push(x[0])});
    return moda;
}
function calcularMediaGeometrica(array) {
    return Math.pow(array.reduce((a, b) => a * b), 1 / array.length);
}


/* Botones */
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
    document.getElementById("moda").innerText = moda.join(", ");
}
function calcularMedGeoBtn(){
    let list = document.getElementById("geoNums");
    let array = (list.value === "" ? list.placeholder : list.value ).split(",").map(x => parseFloat(x));
    let moda = calcularMediaGeometrica(array);
    document.getElementById("medgeo").innerText = moda.toFixed(2);
}

/* Ejercicio 3: Análisis Salarial */
/* Requiere importar los datos desde salary.js */
function registrarSalario(){
    let name = document.getElementById("name").value;
    let salary = parseFloat(document.getElementById("salario").value);
    /* create new row in salarioTable and add name and salary*/
    let row = document.createElement("tr");
    let nameCell = document.createElement("td");
    let salaryCell = document.createElement("td");
    nameCell.innerText = name;
    salaryCell.innerText = salary.toFixed(2);
    row.appendChild(nameCell);
    row.appendChild(salaryCell);
    /* add row to table */
    document.getElementById("salarioTable").appendChild(row);
}
function getSalaryArr(){
    let salaryArr = [];
    let table = document.getElementById("salarioTable");
    for (let i = 1; i < table.rows.length; i++) {
        salaryArr.push(parseFloat(table.rows[i].cells[1].innerText));
    }
    return salaryArr;
}
function analizarSalarios(){
    const salarios = getSalaryArr();
    let resultados = {};
    if (salarios.length > 0) {
        resultados.salarioPromedio = calcularPromedio(salarios);
        resultados.salarioMediana = calcularMediana(salarios);
        resultados.salarioModa = calcularModa(salarios);
        const top10 = salarios.sort((a, b) => a - b).slice(Math.floor(salarios.length * (- 0.1)));
        resultados.promedioTop10 = calcularPromedio(top10);
        resultados.medianaTop10 = calcularMediana(top10);
        resultados.modaTop10 = calcularModa(top10);
    }
    else {
        alert("Without data, there is no analysis");
        resultados = null;
    }
    return resultados;
}
function mostrarResultadosAnalisis(){
    let result = analizarSalarios();
    if(result != null){
        document.getElementById("salarioPromedio").innerText = result.salarioPromedio.toFixed(2);
        document.getElementById("salarioMediana").innerText = result.salarioMediana.toFixed(2);
        document.getElementById("salarioModa").innerText = result.salarioModa.join(", ");
        document.getElementById("promedioTop10").innerText = result.promedioTop10.toFixed(2);
        document.getElementById("medianaTop10").innerText = result.medianaTop10.toFixed(2);
        document.getElementById("modaTop10").innerText = result.modaTop10.join(", ");
    }
}