// html e oninput use er kora jay abr js e evabe function set kora jay.

// document.getElementById("mobileNumber").addEventListener('input', function () {
//     this.value = this.value.replace(/[^0-9]/g, '').slice(0, 11);
// });

const inputLimits = {
    mobileNumber: 11,
    pinNumber: 4
};

for (const id in inputLimits) {
    const input = document.getElementById(id);
    if (input) {
        input.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '').slice(0, inputLimits[id]);
        });
    }
}

document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = document.getElementById("mobileNumber").value;
    const pinNumber = document.getElementById("pinNumber").value;
    if (mobileNumber.length === 11) {
        if (pinNumber.length === 4) {
            window.location.href = "./welcome.html"
        }
        else {
            alert("invalid pin number");
        }
    }
    else {
        alert("invalid mobile number");
    }
})