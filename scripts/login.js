document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = document.getElementById("mobileNumber").value;
    const pinNumber = document.getElementById("pinNumber").value;
    if (mobileNumber.length === 11) {
        if (pinNumber.length === 4) {
            window.location.href="./welcome.html"
        }
        else {
            alert("invalid pin number");
        }
    }
    else {
        alert("invalid mobile number");
    }
})