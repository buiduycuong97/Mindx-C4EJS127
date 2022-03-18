//******Tra ve true neu age > 18******
// function checkAge(age) {
//     age = parseInt(prompt("Nhap tuoi cua ban"));
//     if (age > 18) {

//         console.log(true);
//     } else {
//         console.log(`${age} : Ban chua du tuoi`);
//     }
// }
// checkAge();


//******Tra ve true neu age > 18 duoi dang toan tu 3 ngoi******
// function checkAge(age) {

//     age = parseInt(prompt("Nhap tuoi cua ban"));

//     (age > 18) ? console.log(true): console.log(`${age} : Tuoi cua ban chua phu hop`);;
// }

// checkAge();


//*********Kiem tra so nho hon ***********
// function checkMin(a, b) {
//     a = parseInt(prompt("Nhap so a"))
//     b = parseInt(prompt("Nhap so b"))

//     if (a < b) {
//         console.log(`${a} la gia tri nho nhat`);
//     } else if (a == b) {
//         console.log(`Hai so bang nhau`);
//     } else {
//         console.log(`${b} la gia tri nho nhat`);
//     }
// }
// checkMin()


//Thay the bang ham mui ten
// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
// );


//Dang nhap
function signIn(id, pass) {
    id = prompt("Nhap ID")
    if (id == "admin") {
        console.log("Ban can nhap mat khau");
        pass = prompt("Nhap password")
        if (pass == "cafedev") {
            console.log("Chao mung");
        } else if (pass == "") {
            console.log("Da huy");
        } else {
            console.log("Mat khau sai");
        }
    } else if (id == "") {
        console.log("Canceled");
    } else { console.log("Toi khong biet ban"); }
}
signIn();