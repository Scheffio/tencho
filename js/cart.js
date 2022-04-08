let productammount = document.querySelector(".counter-value")
let buy = document.querySelector(".order-block a")
let productsize = document.querySelectorAll(".product-sizes div")

function addtocart(e) {
    let obj = new Object()
    let mas = []
    obj.img = localStorage.getItem("img")
    obj.name = localStorage.getItem("name")
    obj.price = localStorage.getItem("price")
    obj.category = localStorage.getItem("category")
    obj.ammount = Number(productammount.textContent)
    obj.size = e.getAttribute("data-size")

    let isExist = localStorage.getItem("cart-items")

    if(isExist) {
        let existedmas = JSON.parse(localStorage.getItem("cart-items"))
        existedmas.push(obj)
        localStorage.setItem("cart-items", JSON.stringify(existedmas))
    }else if(!isExist) {
        mas.push(obj)
        localStorage.setItem("cart-items", JSON.stringify(mas))
    }
}

productsize.forEach((elem) => {
    elem.addEventListener("click", () => {
        if (elem.classList.contains("clicked")) {
            buy.setAttribute("data-size", elem.textContent)
            buy.classList.add("enabled")
            document.querySelector(".product-price").nextElementSibling.classList.remove("SizeError")
        }else if(!elem.classList.contains("clicked")) {
            document.querySelector(".product-price").nextElementSibling.classList.add("SizeError")
            buy.classList.remove("enabled")
        }
    })
})
