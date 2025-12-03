const links = {
    logOut: "./index.html",
    addMoney: "./addMoney.html",
    cashOut: "./cashOut.html",
    transfer: "./transfer.html",
    bonus: "./bonus.html",
    payBill: "./payBill.html",
    transactions: "./transactions.html"
};

for (const id in links) {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener("click", () => {
            window.location.href = links[id];
        });
    }
}