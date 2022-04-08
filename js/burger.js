let burgerbtn = document.querySelector(".burger")
let menu = document.querySelector(".menu")
let links = document.querySelectorAll(".menu a")
let body = document.querySelector("body")
let isShowed = false

burgerbtn.addEventListener("click", () => {
    if (!isShowed) {
        burgerbtn.classList.toggle("open-menu")
        menu.classList.remove("hide-menu")
        menu.classList.add("open-menu")
        isShowed = true
        body.classList.toggle("open-modal")
    } else if (isShowed) {
        menu.classList.add("hide-menu")
        setTimeout(() => {
            menu.classList.remove("open-menu")
        }, 500)
        burgerbtn.classList.toggle("open-menu")
        isShowed = false
        body.classList.toggle("open-modal")
    }
})

links.forEach((elem) => {
    elem.addEventListener("click", () => {
        if (burgerbtn.classList.contains("open-menu") && menu.classList.contains("open-menu")) {
            burgerbtn.classList.toggle("open-menu")
            menu.classList.toggle("open-menu")
            body.classList.toggle("open-modal")
            isShowed = false
        }
    })
})

