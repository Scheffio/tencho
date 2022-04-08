window.onload = () => {
    generateCartItems(arr)
    document.querySelector(".ammountInCart").textContent = arr.length
    document.querySelector(".total-price").textContent = updateTotal()
    document.querySelector(".allPrice").textContent = spaceMaker(updateTotal() + Number(document.querySelector(".total-delivery").textContent))
    document.querySelector(".for-products p:nth-child(2)").textContent = bonusesCounter(updateTotal()) + " Б"
    document.querySelector(".total-bonuses p:first-child").textContent = bonusesCounter(updateTotal()) + " бонусов"
    document.querySelector(".bonuses p:nth-child(2)").innerHTML = bonusesCounter(updateTotal()) + " Б"
}

let categoryname = ''
let size = 0
let arr = JSON.parse(localStorage.getItem("cart-items"))

function generateCartItems(mas) {
    let out = ''
    mas.forEach((elem, i) => {
        categoryChecker(elem.category)
        sizeMultiplier(elem.size,elem.price)
        out += '<div class="order-item">'
        out += '<img src="' + elem.img + '">'
        out += '<div class="order-name">'
        out += '<p>' + categoryname + ' ' + elem.name + ', размер ' + elem.size + '</p>'
        out += '<div class="cart-delivery-info">'
        out += '<svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">'
        out += '<path d="M10.5 5.42553C10.5 6.06377 10.1954 7.07853 9.67975 8.30427C9.17342 9.50774 8.49481 10.8443 7.81112 12.0969C7.1283 13.3478 6.44484 14.5069 5.93175 15.3538C5.76866 15.6229 5.62291 15.8603 5.5 16.0589C5.37709 15.8603 5.23134 15.6229 5.06825 15.3538C4.55516 14.5069 3.8717 13.3478 3.18888 12.0969C2.50519 10.8443 1.82658 9.50774 1.32025 8.30427C0.804552 7.07853 0.5 6.06377 0.5 5.42553C0.5 2.71164 2.73213 0.5 5.5 0.5C8.26787 0.5 10.5 2.71164 10.5 5.42553Z" stroke="#D7E7E7" />'
        out += '<path d="M7.56693 4.70208C7.56693 5.81787 6.6481 6.734 5.50026 6.734C4.35242 6.734 3.43359 5.81787 3.43359 4.70208C3.43359 3.58629 4.35242 2.67017 5.50026 2.67017C6.6481 2.67017 7.56693 3.58629 7.56693 4.70208Z" stroke="#D7E7E7" />'
        out += '</svg>'
        out += '<p><span class="choosedDeliveryType">Пункт выдачи</span>: 4 апреля</p>'
        out += '</div>'
        out += '</div>'
        out += '<div class="order-counter">'
        out += '<div class="order-number">'
        out += '<button class="ominus minus">-</button>'
        out += '<p class="ovalue">' + elem.ammount + '</p>'
        out += '<button class="oplus plus">+</button>'
        out += '</div>'
        out += '</div>'
        out += '<div class="order-price">'
        out += '<p><span class="pricePerItem" data-perItem="' + size + '">' + size * Number(elem.ammount) + '</span>₽</p>'
        out += '</div>'
        out += '<div class="delete">'
        out += '<svg data-name="' + elem.name + '" data-id="' + i + '" onclick="deleteItem(this)" class="trash" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'
        out += '<path d="M18.79 7C18.3537 7 18 7.35369 18 7.79V16.63C18 18.4912 16.4912 20 14.63 20H8.95C7.0888 20 5.58 18.4912 5.58 16.63V7.79C5.58 7.35369 5.22631 7 4.79 7C4.3537 7 4 7.35369 4 7.79V16.63C4.02742 19.3719 6.25799 21.5801 9 21.58H14.68C17.4025 21.5529 19.6029 19.3525 19.63 16.63V7.79C19.6304 7.57152 19.5404 7.36261 19.3812 7.21294C19.2221 7.06326 19.008 6.98617 18.79 7Z" fill="#D7E7E7" />'
        out += '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.79 5.58H4.79C4.3537 5.58 4 5.22631 4 4.79C4 4.35369 4.3537 4 4.79 4H7.44L8.62 2.72C9.07107 2.26141 9.68675 2.00218 10.33 2H13.25C13.8839 1.99999 14.4918 2.25179 14.94 2.7L16.14 4H18.79C19.2263 4 19.58 4.35369 19.58 4.79C19.58 5.22631 19.2263 5.58 18.79 5.58ZM13.25 3.58H10.33C10.1301 3.58007 9.93744 3.65499 9.79 3.79L9.6 3.99H13.98L13.79 3.79C13.6436 3.65326 13.4503 3.57807 13.25 3.58Z" fill="#D7E7E7" />'
        out += '<path d="M8.03906 8.79004V11.79C8.03906 12.2043 8.37485 12.54 8.78906 12.54C9.20328 12.54 9.53906 12.2043 9.53906 11.79V8.79004C9.53906 8.37583 9.20328 8.04004 8.78906 8.04004C8.37485 8.04004 8.03906 8.37583 8.03906 8.79004Z" fill="#D7E7E7" />'
        out += '<path d="M11.0391 8.79004V16.79C11.0391 17.2043 11.3748 17.54 11.7891 17.54C12.2033 17.54 12.5391 17.2043 12.5391 16.79V8.79004C12.5391 8.37583 12.2033 8.04004 11.7891 8.04004C11.3748 8.04004 11.0391 8.37583 11.0391 8.79004Z" fill="#D7E7E7" />'
        out += '<path d="M14.0391 8.79004V11.79C14.0391 12.2043 14.3748 12.54 14.7891 12.54C15.2033 12.54 15.5391 12.2043 15.5391 11.79V8.79004C15.5391 8.37583 15.2033 8.04004 14.7891 8.04004C14.3748 8.04004 14.0391 8.37583 14.0391 8.79004Z" fill="#D7E7E7"/>'
        out += '</svg>'
        out += '</div>'
        out += '</div>'
        out += '</div>'
        out += '</div>'
    })
    let div = document.createElement("div")
    if (mas.length == 0) {
        div.innerHTML = "У вас нет товаров в корзине!"
        document.querySelector(".cart-list").append(div)
        div.setAttribute("class","empty")
    } else {
        div.innerHTML = out
        document.querySelector(".cart-list").append(div)
        div.setAttribute("class", "cart-list-inside")
    }

    let plus = document.querySelectorAll(".plus")
    let minus = document.querySelectorAll(".minus")

    minus.forEach((elem, index1) => {
        elem.addEventListener("click", () => {
            if (elem.nextElementSibling.textContent > 1) {
                elem.nextElementSibling.innerHTML = Number(elem.nextElementSibling.textContent) - 1
            }
            document.querySelectorAll(".pricePerItem").forEach((elem2, index2) => {
                if (index1 == index2) {
                    elem2.textContent = elem2.getAttribute("data-perItem") * Number(elem.nextElementSibling.textContent)
                    document.querySelector(".allPrice").textContent = spaceMaker(updateTotal() + Number(document.querySelector(".total-delivery").textContent))
                    document.querySelector(".total-price").textContent = updateTotal()
                    document.querySelector(".for-products p:nth-child(2)").textContent = bonusesCounter(updateTotal()) + " Б"
                    document.querySelector(".total-bonuses p:first-child").textContent = bonusesCounter(updateTotal()) + " бонусов"
                    document.querySelector(".bonuses p:nth-child(2)").innerHTML = bonusesCounter(updateTotal()) + " Б"
                }
            })
        })
    })

    plus.forEach((elem, index1) => {
        elem.addEventListener("click", () => {
            if (elem.previousElementSibling.textContent < 9) {
                elem.previousElementSibling.innerHTML = Number(elem.previousElementSibling.textContent) + 1
            }
            document.querySelectorAll(".pricePerItem").forEach((elem2, index2) => {
                if (index1 == index2) {
                    elem2.textContent = elem2.getAttribute("data-peritem") * Number(elem.previousElementSibling.textContent)
                    document.querySelector(".allPrice").textContent = spaceMaker(updateTotal() + Number(document.querySelector(".total-delivery").textContent))
                    document.querySelector(".total-price").textContent = updateTotal()
                    document.querySelector(".for-products p:nth-child(2)").textContent = bonusesCounter(updateTotal()) + " Б"
                    document.querySelector(".total-bonuses p:first-child").textContent = bonusesCounter(updateTotal()) + " бонусов"
                    document.querySelector(".bonuses p:nth-child(2)").innerHTML = bonusesCounter(updateTotal()) + " Б"
                }
            })
        })
    })
}

document.querySelector('.online input[type="radio"]').addEventListener("change", () => {
    document.querySelector(".online-bonuses").textContent = "25"
    document.querySelector(".total-bonuses p:first-child").textContent = bonusesCounter(updateTotal(total)) + Number(document.querySelector(".online-bonuses").textContent) + " бонусов"
    document.querySelector(".payment p:nth-child(2)").textContent = "Онлайн"
})

document.querySelector('.ofline input[type="radio"]').addEventListener("change", () => {
    document.querySelector(".online-bonuses").textContent = "0"
    document.querySelector(".total-bonuses p:first-child").textContent = bonusesCounter(updateTotal(total)) + " бонусов"
    document.querySelector(".payment p:nth-child(2)").textContent = "Наличные"
})

document.querySelector('.pick-point input[type="radio"]').addEventListener("change", () => {
    document.querySelectorAll(".choosedDeliveryType").forEach((elem) => {
        elem.textContent = "Пункт выдачи"
        document.querySelector(".delivery-price p:nth-child(2)").textContent = "229₽"
        document.querySelector(".total-delivery").textContent = "229"
        document.querySelector(".allPrice").textContent = spaceMaker(updateTotal() + Number(document.querySelector(".total-delivery").textContent))
        document.querySelector(".storage p:nth-child(2)").textContent = "7 дней"
    })
})

document.querySelector('.by-courier input[type="radio"]').addEventListener("change", () => {
    document.querySelectorAll(".choosedDeliveryType").forEach((elem) => {
        elem.textContent = "Курьером"
        document.querySelector(".delivery-price p:nth-child(2)").textContent = "349₽"
        document.querySelector(".total-delivery").textContent = "349"
        document.querySelector(".allPrice").textContent = spaceMaker(updateTotal() + Number(document.querySelector(".total-delivery").textContent))
        document.querySelector(".storage p:nth-child(2)").textContent = "3 дней"
    })
})

document.querySelector('.pick-up input[type="radio"]').addEventListener("change", () => {
    document.querySelectorAll(".choosedDeliveryType").forEach((elem) => {
        elem.textContent = "Самовывоз"
        document.querySelector(".delivery-price p:nth-child(2)").textContent = "59₽"
        document.querySelector(".total-delivery").textContent = "59"
        document.querySelector(".allPrice").textContent = spaceMaker(updateTotal() + Number(document.querySelector(".total-delivery").textContent))
        document.querySelector(".storage p:nth-child(2)").textContent = "12 дней"
    })
})

document.querySelector('.post-office input[type="radio"]').addEventListener("change", () => {
    document.querySelectorAll(".choosedDeliveryType").forEach((elem) => {
        elem.textContent = "Почтовое отд. "
        document.querySelector(".delivery-price p:nth-child(2)").textContent = "129₽"
        document.querySelector(".total-delivery").textContent = "129"
        document.querySelector(".allPrice").textContent = spaceMaker(updateTotal() + Number(document.querySelector(".total-delivery").textContent))
        document.querySelector(".storage p:nth-child(2)").textContent = "10 дней"
    })
})

let total = 0

function updateTotal() {
    total = 0
    document.querySelectorAll(".pricePerItem").forEach((elem) => {
        total += Number(elem.textContent)
    })
    return total
}

function categoryChecker(item) {
    if (item == "fish") {
        categoryname = "Рыба"
    } else if (item == "tea") {
        categoryname = "Чай"
    } else if (item == "souce") {
        categoryname = "Соус"
    } else if (item == "rice") {
        categoryname = "Рис"
    } else if (item == "spicies") {
        categoryname = "Специи"
    } else if (item == "soup") {
        categoryname = "Суповой набор"
    } else if (item == "tofu") {
        categoryname = ""
    } else if (item == "mushrooms") {
        categoryname = "Грибы"
    }
    return categoryname
}

function spaceMaker(number) {
    return number.toLocaleString()
}

function bonusesCounter(price) {
    return Math.floor((price * 5) / 100)
}

function sizeMultiplier(itemSize,itemPrice) {
    if (itemSize == "XS") {
        size = itemPrice
    }else if (itemSize == "S") {
        size = Math.floor((Number(itemPrice) / 100 * 4) + Number(itemPrice))
    }else if (itemSize == "M") {
        size = Math.floor((Number(itemPrice) / 100 * 6) + Number(itemPrice))
    }else if (itemSize == "L") {
        size = Math.floor((Number(itemPrice) / 100 * 7) + Number(itemPrice))
    }else if (itemSize == "XL") {
        size = Math.floor((Number(itemPrice) / 100 * 10) + Number(itemPrice))
    }
}

function deleteItem(e) {
    let itemtodelete = arr.splice(e.getAttribute("data-id"),1)
    let newarr = arr.filter(el => !itemtodelete.includes(el))
    
    localStorage.setItem("cart-items", JSON.stringify(newarr))
    document.querySelector(".cart-list").innerHTML = ''
    generateCartItems(JSON.parse(localStorage.getItem("cart-items")))

    document.querySelector(".allPrice").textContent = spaceMaker(updateTotal() + Number(document.querySelector(".total-delivery").textContent))
    document.querySelector(".total-price").textContent = updateTotal()
    document.querySelector(".for-products p:nth-child(2)").textContent = bonusesCounter(updateTotal()) + " Б"
    document.querySelector(".total-bonuses p:first-child").textContent = bonusesCounter(updateTotal()) + " бонусов"
    document.querySelector(".bonuses p:nth-child(2)").innerHTML = bonusesCounter(updateTotal()) + " Б"
}