const accountNumberLength = 10;
const inputLimits = {
    billerAccountNumber: accountNumberLength,
    amountToPay: null,
    billPin: 4
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
document.getElementById("payBillBtn").addEventListener("click", function (event) {
    const billType = document.getElementById("selectBillType").value;
    const billCollector = document.getElementById("selectBillCollector").value;
    const accountNumber = document.getElementById("billerAccountNumber").value;
    const amountText = document.getElementById("amountToPay").value;
    const pinNumber = document.getElementById("billPin").value;
    const balanceElement = document.getElementById("availableBalance"); if (!billType) {
        alert("Please select a Bill Type."); return;
    }
    if (!billCollector) {
        alert("Please select a Bill Collector."); return;
    }

    if (accountNumber.length !== accountNumberLength) {
        alert(`Biller Account Number must be ${accountNumberLength} digits.`); return;
    }
    const amount = parseFloat(amountText);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount to pay."); return;
    }
    if (pinNumber.length !== 4) {
        alert("Pin must be 4 digits."); return;
    }
    const currentBalanceText = balanceElement.textContent.replace('$', '').trim();
    const currentBalance = parseFloat(currentBalanceText);

    if (isNaN(currentBalance)) {
        alert("Error reading current balance."); return;
    }
    const totalDeduction = amount;

    if (totalDeduction > currentBalance) {
        alert(`Insufficient Balance! You need $${totalDeduction.toFixed(2)}, but only have $${currentBalance.toFixed(2)}.`); return;
    }
    const newBalance = currentBalance - totalDeduction;
    balanceElement.textContent = '$' + newBalance.toFixed(2);
    alert(`Bill Payment Successful! Paid $${amount.toFixed(2)} for ${billType} (Collector: ${billCollector}). New Balance: $${newBalance.toFixed(2)}.`);
    document.getElementById("selectBillType").value = '';
    document.getElementById("selectBillCollector").value = '';
    document.getElementById("billerAccountNumber").value = '';
    document.getElementById("amountToPay").value = '';
    document.getElementById("billPin").value = '';
});