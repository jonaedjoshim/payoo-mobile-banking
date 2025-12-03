const maxNumberLength = 11;
const inputLimits = {
    receiverNumber: maxNumberLength,
    transferAmount: null,
    transferPin: 4
};
for (const id in inputLimits) {
    const input = document.getElementById(id);
    if (input) {
        input.addEventListener('input', function () {
            let value = this.value.replace(/[^0-9]/g, '');
            if (inputLimits[id]) {
                value = value.slice(0, inputLimits[id]);
            }
            this.value = value;
        });
    }
}
document.getElementById("transferMoneyBtn").addEventListener("click", function (event) {
    const receiverNumber = document.getElementById("receiverNumber").value;
    const amountText = document.getElementById("transferAmount").value;
    const pinNumber = document.getElementById("transferPin").value;
    const balanceElement = document.getElementById("availableBalance");
    if (receiverNumber.length !== maxNumberLength) {
        alert(`User Number must be ${maxNumberLength} digits.`);
        return;
    }
    const amountToTransfer = parseFloat(amountText);
    if (isNaN(amountToTransfer) || amountToTransfer <= 0) {
        alert("Please enter a valid amount to transfer.");
        return;
    }
    if (pinNumber.length !== 4) {
        alert("Pin must be 4 digits.");
        return;
    }
    const currentBalanceText = balanceElement.textContent.replace('$', '').trim();
    const currentBalance = parseFloat(currentBalanceText);
    if (isNaN(currentBalance)) {
        alert("Error reading current balance.");
        return;
    }
    const totalDeduction = amountToTransfer;

    if (totalDeduction > currentBalance) {
        alert(`Insufficient Balance! You need $${totalDeduction.toFixed(2)}, but only have $${currentBalance.toFixed(2)}.`);
        return;
    }
    const newBalance = currentBalance - totalDeduction;
    balanceElement.textContent = '$' + newBalance.toFixed(2);
    alert(`Transfer Successful! Transferred $${amountToTransfer.toFixed(2)} to ${receiverNumber}. New Balance: $${newBalance.toFixed(2)}.`);
    document.getElementById("receiverNumber").value = '';
    document.getElementById("transferAmount").value = '';
    document.getElementById("transferPin").value = '';
});