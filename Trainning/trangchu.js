function book() {
    let username = document.querySelector("#name").value;
    let phonenumber = document.querySelector("#phonenumber").value;
    localStorage.setItem("name", username);
    localStorage.setItem("phonenumber", phonenumber);
    alert("Bạn đã đặt bàn thành công");
}