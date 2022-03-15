//tao may tinh co ban

// let a = parseFloat((prompt("Nhap so a")));
// let b = parseFloat((prompt("Nhap so b")));

// let operator = prompt("Chon phep tinh +, -, *, /");


// if (operator == "+") {
//     result = a + b;
//     console.log(`${a} ${operator} ${b} = ${result}`);
// } else if (operator == "-") {
//     result = a - b;
//     console.log(`${a} ${operator} ${b} = ${result}`);
// } else if (operator == "*") {
//     result = a * b;
//     console.log(`${a} ${operator} ${b} = ${result}`);
// } else if (operator == "/") {
//     result = a / b;
//     console.log(`${a} ${operator} ${b} = ${result}`);
// } else {
//     console.log("ERROR");
// }

//Tim so nguyen
const a = parseInt(prompt("Nhap mot so ngau nhien"))
if (a != Number) {
    console.log("ERROR");
}

if (a < 2) {
    console.log("K phai so nguyen to");

}

let count = 0;
for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i == 0) {
        count++;
    }
}
if (count == 0) {
    console.log(`${a} la so nguyen to`);
} else {
    console.log(`${a} k phai la so nguyen to`);
}