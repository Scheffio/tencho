function reloadfilter(e) {
  $.getJSON('/jsons/products.json', function (data) {
    let out = ''
    $('.catalogue-items-list').innerHTML = ''
    for (let key in data) {
      if (data[key].category == e.getAttribute("data-category")) {
        out += '<div class="item">'
        out += '<div class="item-content">'
        out += '<span class="detailed" onclick="modalWindow(this)" data-name="' + data[key].name + '" data-cost="' + data[key].cost + '"  data-img="' + data[key].image + '" data-desc="' + data[key].description + '" data-category="' + data[key].category + '">Подробнее</span>'
        out += '<img src="' + data[key].image + '" alt="' + data[key].name + '">'
        out += '<div class="underline"></div>'
        out += '<p class="item-title">' + data[key].name + '</p>'
        out += '<p class="price">Цена: ' + data[key].cost + '₽</p>'
        out += '<a href="product.html" onclick="buy(this)" data-name="' + data[key].name + '" data-cost="' + data[key].cost + '"  data-img="' + data[key].image + '" data-desc="' + data[key].description + '" data-category="' + data[key].category + '">Купить</a>'
        out += '</div>'
        out += '</div>'
      }
    }
    $('.catalogue-items-list').html(out)
  })
}

document.querySelector(".clear").addEventListener("click", () => {

  categories.forEach((elem) => {
    elem.classList.remove("clicked")
  })

  $.getJSON('/jsons/products.json', function (data) {
    let out = ''
    $('.catalogue-items-list').innerHTML = ''
    for (let key in data) {
      out += '<div class="item">'
      out += '<div class="item-content">'
      out += '<span class="detailed" onclick="modalWindow(this)" data-name="' + data[key].name + '" data-cost="' + data[key].cost + '"  data-img="' + data[key].image + '" data-desc="' + data[key].description + '" data-category="' + data[key].category + '">Подробнее</span>'
      out += '<img src="' + data[key].image + '" alt="' + data[key].name + '">'
      out += '<div class="underline"></div>'
      out += '<p class="item-title">' + data[key].name + '</p>'
      out += '<p class="price">Цена: ' + data[key].cost + '₽</p>'
      out += '<a href="product.html" onclick="buy(this)" data-name="' + data[key].name + '" data-cost="' + data[key].cost + '"  data-img="' + data[key].image + '" data-desc="' + data[key].description + '" data-category="' + data[key].category + '">Купить</a>'
      out += '</div>'
      out += '</div>'
    }
    $('.catalogue-items-list').html(out)
  })
})

let categories = document.querySelectorAll(".categories")
let catIsClicked = false

categories.forEach((elem) => {
  elem.addEventListener("click", () => {
    for(let item of categories) {
      item.classList.remove("clicked")
    }

    if(!catIsClicked) {
      elem.classList.toggle("clicked")
      catIsClicked = true
    }else if (catIsClicked) {
      elem.classList.toggle("clicked")
      catIsClicked = false
    }
  })
})