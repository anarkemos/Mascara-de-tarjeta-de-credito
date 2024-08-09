// Selección de los campos de entrada
const inputTarjeta = document.getElementById("inputTarjeta");
const inputFecha = document.getElementById("inputFecha");
const inputCVV = document.getElementById("inputCVV");

// Definición de las máscaras para formato de entrada
const mascaraNumero = "####-####-####-####";
const mascaraFecha = "##/##";
const mascaraCVV = "###";

// Arreglos para almacenar los valores ingresados
let TarjetaNumero = [];
let FechaNumero = [];
let cvvNumero = [];

// Manejo del campo de número de tarjeta
inputTarjeta.addEventListener("keydown", (e) => {
    if (e.key === "Tab") return; // Ignorar tecla Tab
    e.preventDefault();
    ingresoDatos(mascaraNumero, e.key, TarjetaNumero);
    inputTarjeta.value = TarjetaNumero.join(""); // Actualizar el campo con el formato
});

// Manejo del campo de fecha
inputFecha.addEventListener("keydown", (e) => {
    if (e.key === "Tab") return; // Ignorar tecla Tab
    e.preventDefault();
    ingresoDatos(mascaraFecha, e.key, FechaNumero);
    inputFecha.value = FechaNumero.join(""); // Actualizar el campo con el formato
});

// Manejo del campo de CVV
inputCVV.addEventListener("keydown", (e) => {
    if (e.key === "Tab") return; // Ignorar tecla Tab
    e.preventDefault();
    ingresoDatos(mascaraCVV, e.key, cvvNumero);
    inputCVV.value = cvvNumero.join(""); // Actualizar el campo con el formato
});

// Función para manejar la entrada de datos según la máscara
function ingresoDatos(mascara, key, arreglo) {
    const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (key === "Backspace" && arreglo.length > 0) {
        arreglo.pop(); // Eliminar el último carácter
        return;
    }

    if (numeros.includes(key) && arreglo.length + 1 <= mascara.length) {
        let textoActual = arreglo.join("");
        let textoFinal = textoActual + key;

        // Añadir el carácter y el separador de la máscara
        if (mascara[arreglo.length] === "-" || mascara[arreglo.length] === "/") {
            arreglo.push(mascara[arreglo.length], key);
        } else {
            arreglo.push(key);
        }

        // Validación específica para el campo de fecha
        if (mascara === "##/##") {
            let mes = parseInt(textoFinal.substring(0, 2));
            if (mes > 12) {
                arreglo.pop(); // Eliminar carácter si el mes es mayor a 12
            }
        }
    }
}
