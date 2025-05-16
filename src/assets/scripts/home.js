function handleProduct() {
    const countdown = document.getElementById("countdown");
    var minute = 59;
    var second = 60;
    var hour = 11;
    const box = countdown.querySelectorAll("strong");
    setInterval(() => {
        box[2].innerText = String(second--).padStart(2, "0");
        box[1].innerText = String(minute).padStart(2, "0");
        box[0].innerText = String(hour).padStart(2, "0");
        if (hour == 0 && minute == 0 && second == 0) {
            hour = 12;
        }
        if (minute == 0 && second == 0) {
            minute = 60;
            --hour;
        }
        if (second == 0) {
            --minute;
            second = 60;
        }
    }, 1000);
}

function handleCollection() {
    const checkbox = document.querySelectorAll("input[type='checkbox']");
    if (checkbox) {
        checkbox.forEach((item) => {
            item.addEventListener("change", () => {
                if (item.checked == true) {
                    checkbox.forEach((item2) => {
                        if (item != item2) {
                            item2.checked = false;
                        }
                    });
                }
            });
        });
    }
}

function init() {
    handleProduct();
    handleCollection();
}
init();
