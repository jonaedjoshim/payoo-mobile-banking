const cashOutChargeRate = 0.0185; // 1.85% (সাধারণত এজেন্টের চার্জ এমন হয়)

const inputLimits = {
    agentNumber: 11,
    cashoutAmount: null,
    pinNumber: 4
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

document.getElementById("cashOutBtn").addEventListener("click", function (event) {
    const agentNumber = document.getElementById("agentNumber").value;
    const amountText = document.getElementById("cashoutAmount").value;
    const pinNumber = document.getElementById("pinNumber").value;
    const balanceElement = document.getElementById("availableBalance");

    if (agentNumber.length !== 11) {
        alert("Agent Number must be 11 digits.");
        return;
    }
    const amountToWithdraw = parseFloat(amountText);
    if (isNaN(amountToWithdraw) || amountToWithdraw <= 0) {
        alert("Please enter a valid amount to withdraw.");
        return;
    }
    if (pinNumber.length !== 4) {
        alert("Pin must be 4 digits.");
        return;
    }
    
    const transactionCharge = amountToWithdraw * cashOutChargeRate;
    const totalDeduction = amountToWithdraw + transactionCharge;
    // weird
    const currentBalanceText = balanceElement.textContent.replace('$', '').trim();
    const currentBalance = parseFloat(currentBalanceText);

    if (isNaN(currentBalance)) {
        alert("Error reading current balance.");
        return;
    }
    if (totalDeduction > currentBalance) {
        alert(`Insufficient Balance! You need $${totalDeduction.toFixed(2)} (Amount + Charge), but only have $${currentBalance.toFixed(2)}.`);
        return;
    }
    const newBalance = currentBalance - totalDeduction;
    // weird
    balanceElement.textContent = '$' + newBalance.toFixed(2);
    alert(`Cash Out Successful! Withdrawn: $${amountToWithdraw.toFixed(2)}, Charge: $${transactionCharge.toFixed(2)}. Total deducted: $${totalDeduction.toFixed(2)}. New Balance: $${newBalance.toFixed(2)}.`);
    document.getElementById("agentNumber").value = '';
    document.getElementById("cashoutAmount").value = '';
    document.getElementById("pinNumber").value = '';
});