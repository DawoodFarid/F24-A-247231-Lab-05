
const hall = document.querySelector("#hall");
const who = document.querySelector("#who");
const many = document.querySelector("#many");

if (!hall || !who || !many) {
    throw new Error("Required element is missing");
}

hall.addEventListener("click", function(event) {
    const seat = event.target.closest(".seat");

    if (!seat || !hall.contains(seat)) {
        return;
    }
});
