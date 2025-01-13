renderUI()

function renderUI(){
    let productListDom = document.getElementById("productList")
    let html = ""
    for(let i=0; i < productList.length; i++){
        let product = productList[i]
        html += `<div class="col-md-3">
                        <img src="${product.image}" alt="" class="picture">
                        <div class="span">men</div>
                        <div class="div">${product.name}</div>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <div class="price">
                            <div class="old-price">$${product.price}</div>
                            <div class="new-price">$29.00</div>
                        </div>
                    </div>`
    }
    productListDom.innerHTML = html
}