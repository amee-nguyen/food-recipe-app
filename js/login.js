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