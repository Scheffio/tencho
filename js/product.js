function buy(e) {
    localStorage.setItem("name",e.getAttribute("data-name"))
    localStorage.setItem("price",e.getAttribute("data-cost"))
    localStorage.setItem("img",e.getAttribute("data-img"))
    localStorage.setItem("about",e.getAttribute("data-desc"))
    localStorage.setItem("category",e.getAttribute("data-category"))
}

