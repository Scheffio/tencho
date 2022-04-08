let plus = document.querySelectorAll(".plus")
let minus = document.querySelectorAll(".minus")

minus.forEach((elem) => {
    elem.addEventListener("click", () => {
        if (elem.nextElementSibling.textContent > 1) {
            elem.nextElementSibling.innerHTML = Number(elem.nextElementSibling.textContent) - 1
        }
    })
})

plus.forEach((elem) => {
    elem.addEventListener("click", () => {
        if (elem.previousElementSibling.textContent < 9) {
            elem.previousElementSibling.innerHTML = Number(elem.previousElementSibling.textContent) + 1
        }
    })
})