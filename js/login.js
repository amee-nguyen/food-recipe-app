// LOGIN FORM

const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load", function() {
    setTimeout(function() {
        loginPopup.classList.add("show");
    }, 5000)

})

close.addEventListener("click", function() {
    loginPopup.classList.remove("show");
})

// LOGIN INPUT



function validateForm() {
    // Bước 1: Lấy giá trị của username và password
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Bước 2: Kiểm tra dữ liệu hợp lệ hay không
    if (email == '') {
        alert('Enter your email');
        return false;
    } else if (password == '') {
        alert('Enter your passwork');
        return false;
    }
    alert('Success Login');
    return true;
}