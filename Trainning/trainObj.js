const items = function(img, name, price) {
    this.img = img;
    this.name = name;
    this.price = price;
};
let item1 = new items(
    'https://d1sag4ddilekf6.azureedge.net/compressed/items/VNITE2021101910140614713/photo/menueditor_item_f8e699b9fd0842958f18102e6773b44a_1634638810017823494.jpg',
    'Pasta Carbonara',
    '80.000');

let item2 = new items(
    'https://d1sag4ddilekf6.azureedge.net/compressed/items/VNITE2021061214071961189/photo/menueditor_item_d2bb42e3c1b345b9aa1edc3c52c69746_1623506815742478339.jpg',
    'Pasta Carbonara',
    '80.000');

let item3 = new items(
    'https://d1sag4ddilekf6.azureedge.net/compressed/items/VNITE2021061214063741782/photo/menueditor_item_09daed18908d461688a99a3749957745_1637912806608229298.jpg',
    'Pasta Carbonara',
    '80.000');

let item4 = new items(
    'https://d1sag4ddilekf6.azureedge.net/compressed/items/VNITE2021061214061100524/photo/menueditor_item_293905214e0f459c80aed7ff7a110b59_1623506753527598004.jpg',
    'Pasta Carbonara',
    '80.000');

let item5 = new items(
    'https://d1sag4ddilekf6.azureedge.net/compressed/items/VNITE2021061214052977747/photo/menueditor_item_b0c8d9ac81db42ff99e0e1efdd66bb80_1623506711343453325.jpg',
    'Pasta Carbonara',
    '80.000');



let arr = [item1, item2, item3, item4, item5];

// for (let i in arr) {
//     for (let key in arr[i])
//         console.log(arr[i].img);
// }




// for (let i = 0; i < arr.length; i++) {

//     let a = document.getElementById("items");
//     a.innerHTML += `<div class = "set item_pasta" >
//             <div class = "img_item" >
//             <img src = "${arr[i].img}" >
//             </div>
//             <h2 > ${arr[i].name} </h2>
//             <h3 > ${arr[i].price} </h3> 
//             </div>`

// }
function appendItems(nameArray, idAppend) {
    let a = '';

    for (let i = 0; i < nameArray.length; i++) {

        a += `<div class = "set item_pasta" >
                <div class = "img_item" >
                <img src = "${arr[i].img}" >
                </div>
                <h2 > ${arr[i].name} </h2>
                <h3 > ${arr[i].price} </h3> 
                </div>`

    }

    document.getElementById(idAppend).innerHTML = a;
}
appendItems(arr, 'check');