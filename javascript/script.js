$(document).ready(function(e){
    object.products.forEach((i) => loadProducts(i));
});
function loadProducts(data){
    var li = document.createElement('li');
    li.innerHTML =  `<article class="product" id="${data.id}">
                        <img src="${ data.img } " class="image"/>
                        
                            <h3 class="title" contenteditable="true" id="title${data.id}">${ data.name } </h3>
                            <h3 class="price" contenteditable="true" id="title${data.id}">${ data.price} </h3>
                      
                    </article>`
    document.getElementById("productList").appendChild(li);
}