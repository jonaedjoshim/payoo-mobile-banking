// gemini

const validCoupons = {
    'PAYOOO100': 100.00, // কুপন: বোনাস $100
    'WELCOME200': 200.00, // কুপন: বোনাস $200
    'FREE50': 50.00 // কুপন: বোনাস $50
};
let usedCoupons = [];
document.getElementById("getBonusBtn").addEventListener("click", function (event) {
    const couponCodeInput = document.getElementById("couponCode");
    const couponCode = couponCodeInput.value.toUpperCase().trim();
    const balanceElement = document.getElementById("availableBalance");
    if (!couponCode) {
        alert("Please enter a coupon code.");
        return;
    }
    if (!validCoupons[couponCode]) {
        alert("Invalid Coupon Code. Please check the code and try again.");
        return;
    }
    if (usedCoupons.includes(couponCode)) {
        alert("This coupon has already been used!");
        return;
    }
    const bonusAmount = validCoupons[couponCode];
    const currentBalanceText = balanceElement.textContent.replace('$', '').trim();
    const currentBalance = parseFloat(currentBalanceText);
    if (isNaN(currentBalance)) {
        alert("Error reading current balance.");
        return;
    }
    const newBalance = currentBalance + bonusAmount;
    balanceElement.textContent = '$' + newBalance.toFixed(2);
    usedCoupons.push(couponCode);
    alert(`Congratulations! A bonus of $${bonusAmount.toFixed(2)} has been added to your account! New Balance: $${newBalance.toFixed(2)}.`);
    couponCodeInput.value = '';
});