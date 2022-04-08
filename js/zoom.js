let btn = document.querySelectorAll(".detailed")
let modal = document.querySelector(".zoom-modal")
let close = document.querySelector(".close")
let sizes = document.querySelectorAll(".sizes div")
let backbtn = document.querySelector('.back-btn')

let isClicked = false


function modalWindow(e) {
    showModal()
    localStorage.setItem("name",e.getAttribute("data-name"))
    localStorage.setItem("price",e.getAttribute("data-cost"))
    localStorage.setItem("img",e.getAttribute("data-img"))
    localStorage.setItem("about",e.getAttribute("data-desc"))
    localStorage.setItem("category",e.getAttribute("data-category"))

    document.querySelector(".modal-image").src = localStorage.getItem("img")
    document.querySelector(".modal-title").innerHTML = localStorage.getItem("name")
    document.querySelector(".modal-price").innerHTML = "Цена: " + localStorage.getItem("price") + "₽"
    document.querySelector(".modal-item-about").innerHTML = localStorage.getItem("about")

    document.querySelector(".modal-buy").setAttribute("data-img",localStorage.getItem("img"))
    document.querySelector(".modal-buy").setAttribute("data-name",localStorage.getItem("name"))
    document.querySelector(".modal-buy").setAttribute("data-cost",localStorage.getItem("price"))
    document.querySelector(".modal-buy").setAttribute("data-desc",localStorage.getItem("about"))
    document.querySelector(".modal-buy").setAttribute("data-category",localStorage.getItem("category"))

    document.querySelector(".modal-content").classList.add("showing")
    setTimeout(() => {
        document.querySelector(".modal-content").classList.remove("showing")
    }, 5000)
}
close.addEventListener("click", () => {
    document.querySelector(".modal-content").classList.add("closing")
    setTimeout(() => {
        hideModal()
        document.querySelector(".modal-content").classList.remove("closing")
    }, 500)
})

sizes.forEach((elem) => {
    elem.addEventListener("click", () => {
        for (let item of sizes) {
            item.classList.remove("clicked")
        }

        if (!isClicked) {
            elem.classList.add("clicked")
            isClicked = true
        } else if (isClicked) {
            elem.classList.remove("clicked")
            isClicked = false
        }
    })
})


function showModal() {
    modal.classList.toggle("open-modal")
    body.classList.toggle("open-modal")
    backbtn.style.display = "none"
}

function hideModal() {
    modal.classList.toggle("open-modal")
    body.classList.toggle("open-modal")
    backbtn.style.display = ""
}