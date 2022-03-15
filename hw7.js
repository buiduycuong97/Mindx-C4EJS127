// // Tinh dien tich tam giac 
let cc = prompt("Nhap chieu cao");
let cd = prompt("Nhap canh day");
if (cc || cd != Number) {
    console.log("Ban phai nhap so");
}
let result = cc * cd;
console.log(result);

//Chuyen do F sang do C
let f = prompt("Nhap do F");
let doC = 5 / 9 * (f - 32);
if (f || doC != Number) {
    console.log("Ban phai nhap so");
}
console.log(doC);

//Chuyen km sang m
let km = prompt();
let m = km * 1000;
if (km || m != Number) {
    console.log("Ban phai nhap so");
}
console.log(m);

//Tinh can bac 2
let a = prompt("Nhap so a");
let b = prompt("Nhap so b");
let c = prompt("Nhap so c");
if (a || b || c != Number) {
    console.log("Ban phai nhap so");
}
let delta = (b * b) - (4 * a * c);
let x1 = (-b + Math.sqrt(delta)) / 2 * a;
let x2 = (-b - Math.sqrt(delta)) / 2 * a;

if (delta < 0) {
    console.log("Phuong trinh vo nghiem");
} else if (delta == 0) {
    console.log(`Phuong trinh co 1 nghiem kep la ; x1 = x2 = ${-b / 2 * a}`)
} else {
    console.log(`Phuong trinh co 2 nghiem phan biet : x1 = ${x1} x2 = ${x2}`)
}