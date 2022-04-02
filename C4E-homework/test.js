function Product(img, name, price) {
    this.img = img;
    this.name = name
    this.price = price;
}
const rice = new Product("src", "Com ga", "68k")
console.log(rice);

const soda = new Product("src", "Soda dau", "40k")
console.log(soda);

let a = document.querySelector(".formmenu");
// a.innerHTML = "<div>comga</div>"