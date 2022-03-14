let a = 10;
let b = 15;
if (a >= b) {
    console.log(false)
} else {
    console.log(true)
}
if (a == "10") {
    console.log(true)
} else {
    console.log(false)
}
if (a === "10") {
    console.log(true)
} else {
    console.log(false)
}

let x = "5";
let y = 6;
if (x !== y) {
    console.log(true)
} else {
    console.log(false)
}

var d = 10;
var e = Number(d);
var f = d * 1;
d;
e;
f;

var g = 10;
var h = "";
if (g) {
    console.log("g is truthy");
}
if (h) {
    console.log("h is truthy");
}

let a1 = "mind";
let b1 = "";
if (a1 || b1) {
    console.log("hello")
}

let a2 = "mindx"
let b2 = "";
if (a2 && true && !b2) {
    console.log("hello")
}

let a3 = -1;
let b3 = 1;
if (a3 < 0 && 0 < b3) {
    console.log(true)

} else {

}
let a4 = prompt("nhap so");

let result = a4 / 3;
let v = a4 % 3;
if (a4 % 3 == 0) {
    console.log(result)
} else {
    console.log(`So k chia het cho 3 va du ${v}`)
}
prompt