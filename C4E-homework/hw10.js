//********BAI 1 */
// const artist = {
//     name: "Adam Levine",
//     age: 43,
//     gender: "Male",
//     fav: ["animal", "sing", "tattoo"]
// };
// console.log(artist);
// console.log(artist.name);
// console.log(artist['age']);
// console.log(artist.gender);
// console.log(artist['fav'][0]);
// console.log(artist.fav[1]);
// console.log(artist.fav[2]);

// let arr = [];
// arr.push(artist);
// console.log(arr);



// //***************BAI 2 */
// let student = {
//     name: "David Rayy",
//     sclass: "Vl",
//     rollno: 12
// };
// for (let i in student) {
//     console.log(`${i} : ${student[i]}`);
// }



//**********BAI 3 */
// let library = [{
//         author: "Bill Gates",
//         title: "The Road Ahead",
//         readingStatus: true
//     },
//     {
//         author: "Steve Jobs",
//         title: "Walter Isaacson",
//         readingStatus: true
//     },
//     {
//         author: "Suzanne Collins",
//         title: "Mockingjay: The Final Book of The Hunger Games",
//         readingStatus: false
//     }
// ];

// let a = prompt("Input author or title")
// for (i = 0; i < library.length; i++) {
//     if (a == library[i].author || a == library[i].title) {
//         console.log(`readingStatus: ${ library[i].readingStatus }`);
//     }
// }



//*********BAI 4 */
// let library = [{
//         author: "Bill Gates",
//         title: "The Road Ahead",
//         libraryID: 1254
//     },
//     {
//         author: "Steve Jobs",
//         title: "Walter Isaacson",
//         libraryID: 4264
//     },
//     {
//         author: "Suzanne Collins",
//         title: "Mockingjay: The Final Book of The Hunger Games",
//         libraryID: 3245
//     }
// ];
// for (let i = 0; i < library.length - 1; i++) {

//     let swap = library[0];
//     for (let j = i + 1; j < library.length; j++) {

//         if (library[j].libraryID < library[i].libraryID) {
//             swap = library[i];
//             library[i] = library[j];
//             library[j] = swap;
//         }
//     }
// }
// console.log(library);



//BAI 5**Cho ??o???n code sau, sau ???? bi???u di???n c??c c??ch ????? truy c???p ???????c c??c thu???c t??nh b??n trong object ????
// let person = {
//     name: 'Bob',
//     occupation: 'web developer',
//     hobbies: 'painting',
// };
// console.log(person.name);
// console.log(person["occupation"]);
// console.log(person["hobbies"]);



//BAI 6Cho object obj, h??y t???o m???t array 
//ch???a key c???a t???t c??? c??c property c???a obj v?? ?????u vi???t hoa
// let obj = {
//     b: 2,
//     a: 1,
//     c: 3,
// };
// let arr = Object.keys(obj);
// let string = arr.toString();
// let stringUp = string.toUpperCase();

// console.log(stringUp);



//Bai 7 Thay ?????i gi?? tr??? 6 b???ng 606 b???ng 2 c??ch
let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
};
obj.bar[3].xyz = 606;
console.log(obj.bar[3].xyz);
obj['bar'][3]['xyz'] = 900;
console.log(obj['bar'][3]['xyz']);