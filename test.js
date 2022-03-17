// //Tao may tinh co ban
// let a = parseFloat(prompt("Nhap so a"))
// let b = parseFloat(prompt("Nhap so b"))

// let operator = prompt("Chon phep tinh")

// if (a || b != Number) {
//     console.log("Ban phai nhap so");
// } else {
//     console.log(c);
// }

// switch (operator) {
//     case "+":
//         {
//             result = a + b;
//             console.log(`${a} ${operator} ${b} = ${result}`);
//             break;
//         }
//     case "-":
//         {
//             result = a - b;
//             console.log(`${a} ${operator} ${b} = ${result}`);
//             break;
//         }
//     case "*":
//         {
//             result = a * b;
//             console.log(`${a} ${operator} ${b} = ${result}`);
//             break;
//         }
//     case "/":
//         {
//             result = a / b;
//             console.log(`${a} ${operator} ${b} = ${result}`);
//             break;
//         }
//         // default:
//         //     {
//         //         console.log("Ban phai nhap so");
//         //     }
// }

//Tim so chan le
// let a = parseInt(prompt("Nhap so nguyen"))
// if (a % 2 == 0) {
//     console.log(a, " la so chan");
// } else {
//     console.log(`${a} la so le`);
// }

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
lengMyArray = Array.length;
let myArray2 = [];
for (let i = 0; i < lengMyArray; i++) {

    if (myArray[i] % 2 == 0) {

        myArray2 += myArray.pop(i);
    } else {
        continue;
    }
    console.log(myArray2);
    myArray.splice
}