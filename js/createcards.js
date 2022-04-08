$('document').ready(function(){

    loadpr()
    loadnew()

});

function loadpr() {
  $.getJSON('/jsons/products.json', function (data) {
        let out = ''
        for (let key in data){
          if (key < 13) {
            out+='<div class="item">'
            out+='<div class="item-content">'
            out+='<span class="detailed" onclick="modalWindow(this)" data-name="'+data[key].name+'" data-cost="'+data[key].cost+'"  data-img="'+data[key].image+'" data-desc="'+data[key].description+'" data-category="'+data[key].category+'">Подробнее</span>'
            out+='<img src="'+data[key].image+'" alt="'+data[key].name+'">'
            out+='<div class="underline"></div>'
            out+='<p class="item-title">'+data[key].name+'</p>'
            out+='<p class="price">Цена: '+data[key].cost+'₽</p>'
            out+='<a href="product.html" onclick="buy(this)" data-name="'+data[key].name+'" data-cost="'+data[key].cost+'"  data-img="'+data[key].image+'" data-desc="'+data[key].description+'" data-category="'+data[key].category+'">Купить</a>'
            out+='</div>'
            out+='</div>'
          }
      }
    $('.items').html(out)
  })
}

function loadnew() {
  $.getJSON('/jsons/products.json', function (data) {
        let out = ''
        for (let key in data){
          if (key > 7 && key < 20) {
            out+='<div class="slider-item">'
            out+='<div class="slider-item-content">'
            out+='<span class="detailed" onclick="modalWindow(this)" data-name="'+data[key].name+'" data-cost="'+data[key].cost+'"  data-img="'+data[key].image+'" data-desc="'+data[key].description+'" data-category="'+data[key].category+'">Подробнее</span>'
            out+='<img src="'+data[key].image+'" alt="'+data[key].name+'">'
            out+='<div class="slider-info">'
            out+='<h1 class="slider-item-title">'+data[key].name+'</h1>'
            out+='<p class="price">Цена: '+data[key].cost+'₽</p>'
            out+='<a class="slider-buy-btn" href="product.html" onclick="buy(this)" data-name="'+data[key].name+'" data-cost="'+data[key].cost+'"  data-img="'+data[key].image+'" data-desc="'+data[key].description+'" data-category="'+data[key].category+'">Купить</a>'
            out+='</div>'
            out+='</div>'
            out+='</div>'
          }
      }
    $('.slider-track').html(out)
  })
}