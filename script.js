document.addEventListener("DOMContentLoaded", function () {
    // Bank
    const btnBank = document.getElementById("btn-bank");
    const banksModal = document.getElementById("banks");
    const closeBanks = document.getElementById("close-banks");

    btnBank.addEventListener("click", function () {
        banksModal.classList.remove("hidden");
    });

    closeBanks.addEventListener("click", function () {
        banksModal.classList.add("hidden");
    });

    window.addEventListener("click", function (event) {
        if (event.target === banksModal) {
            banksModal.classList.add("hidden");
        }
    });

    // Notification
    const btnNotification = document.getElementById("btn-noti");
    const notisModal = document.getElementById("notis");
    const closeNoti = document.getElementById("close-noti");

    btnNotification.addEventListener("click", function () {
        notisModal.classList.remove("hidden");
    });

    closeNoti.addEventListener("click", function () {
        notisModal.classList.add("hidden");
    });

    window.addEventListener("click", function (event) {
        if (event.target === notisModal) {
            notisModal.classList.add("hidden");
        }
    });
});
