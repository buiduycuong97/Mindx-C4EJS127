//tao may tinh co ban

let a = parseFloat((prompt("Nhap so a")));
let b = parseFloat((prompt("Nhap so b")));

let operator = prompt("Chon phep tinh +, -, *, /");


if (operator == "+") {
    result = a + b;
    console.log(`${a} ${operator} ${b} = ${result}`);
} else if (operator == "-") {
    result = a - b;
    console.log(`${a} ${operator} ${b} = ${result}`);
} else if (operator == "*") {
    result = a * b;
    console.log(`${a} ${operator} ${b} = ${result}`);
} else if (operator == "/") {
    result = a / b;
    console.log(`${a} ${operator} ${b} = ${result}`);
} else {
    console.log("ERROR");
}

//Tim so nguyen

// let a = (prompt("Nhập a"))
// console.log(typeof(a));
// if (typeof(a) != "number") {
//     console.log("Error");
// }

// let a = parseInt(3.5);
// let b = parseInt(3.5);
// let c = a + b;
// console.log(typeof(c));

// if (typeof(a || b) != "number") {
//     alert("Error");
// } else {
//     alert(c);
// }