< p > Multiply every element in the array with 10: < /p>

<
p id = "demo" > < /p>

<
script >
    const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

document.getElementById("demo").innerHTML = newArr;

function myFunction(num, index, arr) {
    return num * 10;
} <
/script>