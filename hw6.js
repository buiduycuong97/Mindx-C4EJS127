let h1Element = document.querySelectorAll('h1');
for (let index = 0; index < h1Element.length; index++) {
    h1Element[index].onclick = function(e) {
        console.log(h1Element[index]);

    }

}