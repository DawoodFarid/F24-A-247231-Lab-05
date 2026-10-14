
const hall = document.querySelector("#hall");
const who = document.querySelector("#who");
const many = document.querySelector("#many");
const free = document.querySelector("#free");
const status = document.querySelector("#status");

if (!hall || !who || !many || !free || !status) {
    throw new Error("Required element is missing");
}

hall.addEventListener("click", function(event) {
    const seat = event.target.closest(".seat");

    if (!seat || !hall.contains(seat)) {
        return;
    }

    if (seat.classList.contains("taken")) {
        return;
    }

    const name = who.value.trim();
    const countText = many.value.trim();
    const count = Number(countText);
    const start = Number(seat.dataset.n);

    many.setCustomValidity("");

    if (countText === "" || !Number.isInteger(count) || count < 1) {
        many.setCustomValidity("not a number");
        many.reportValidity();
        return;
    }

    if (start + count - 1 > 8) {
        return;
    }

    const seats = [];

    for (let i = start; i < start + count; i++) {
        const nextSeat = document.querySelector("#seat-" + i);

        if (!nextSeat || nextSeat.classList.contains("taken")) {
            return;
        }

        seats.push(nextSeat);
    }

    seats.forEach(function(currentSeat) {
        currentSeat.querySelector("span").textContent = name;
        currentSeat.classList.add("taken");
    });

    free.textContent = Number(free.textContent) - count;
    status.textContent = name + " has taken " + count + " seats.";
});
