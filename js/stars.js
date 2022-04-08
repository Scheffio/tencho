let star = document.querySelectorAll('.star')

star.forEach((elem) => {
    elem.addEventListener("click", () => {
        elem.classList.toggle("clicked")
    })
})

