$('document').ready(function(){
    loadall()
})


function loadall() {
    $.getJSON('/jsons/products.json', function (data) {
          let out = ''
          for (let key in data){
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
      $('.catalogue-items-list').html(out)
    })
}
