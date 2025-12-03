const inputRules = {
    bankAccountNumber: 11,
    amountToAdd: null,
    pinNumber: 4
};

for (const id in inputRules) {
    const input = document.getElementById(id);
    if (input) {
        input.addEventListener('input', function () {
            let value = this.value.replace(/[^0-9]/g, '');
            if (inputRules[id]) {
                value = value.slice(0, inputRules[id]);
            }
            this.value = value;
        });
    }
}

document.getElementById("addMoneyBtn").addEventListener("click", function (event) {
    const selectedBank = document.getElementById("selectBank").value;
    const accountNumber = document.getElementById("bankAccountNumber").value;
    const amountText = document.getElementById("amountToAdd").value;
    const pinNumber = document.getElementById("pinNumber").value;
    const balanceElement = document.getElementById("availableBalance");
    if (!selectedBank) {
        alert("Please select a bank.");
        return;
    }

    if (accountNumber.length !== 11) {
        alert("Bank Account Number must be 11 digits.");
        return;
    }

    const amountToAdd = parseFloat(amountText);
    if (isNaN(amountToAdd) || amountToAdd <= 0) {
        alert("Please enter a valid amount to add.");
        return;
    }

    if (pinNumber.length !== 4) {
        alert("Pin must be 4 digits.");
        return;
    }
    // weird
    const currentBalanceText = balanceElement.textContent.replace('$', '').trim();
    const currentBalance = parseFloat(currentBalanceText);

    if (isNaN(currentBalance)) {
        alert("Error reading current balance.");
        return;
    }
    const newBalance = currentBalance + amountToAdd;
    // weird
    balanceElement.textContent = '$' + newBalance.toFixed(2);
    alert(`Successfully added $${amountToAdd.toFixed(2)} to your balance. Your new balance is $${newBalance.toFixed(2)}.`);
    document.getElementById("bankAccountNumber").value = '';
    document.getElementById("amountToAdd").value = '';
    document.getElementById("pinNumber").value = '';
    document.getElementById("selectBank").value = '';
});