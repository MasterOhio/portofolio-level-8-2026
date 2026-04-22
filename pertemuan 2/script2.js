alert("halo selamat datang di kalkulator sederhana!")
let operasi = prompt("pilih operasi yang kamu inginkan: +, -, *, /");
let angka1 = parseFloat(prompt("masukkan angka pertama:"));
let angka2 = parseFloat(prompt("masukkan angka kedua:"));
let hasil;
if (operasi === "+") {
    hasil = angka1 + angka2;
} else if (operasi === "-") {
    hasil = angka1 - angka2;
} else if (operasi === "*") {
    hasil = angka1 * angka2;
} else if (operasi === "/") {
    hasil = angka1 / angka2;
} else {
    hasil = "operasi tidak benar";
}

alert(`hasil: ${hasil}`);