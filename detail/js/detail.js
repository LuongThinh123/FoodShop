function renderProductForDetail(productId) {
    let product = ProductModel.getAll().filter((product) => product.id == productId)[0];
    console.log(product);
    if(product == null) return;
    let html =  `
        <div class="detail-item__slider">
        <div class="item-imgBx item-imgBx--active" data-index = "1">
            <img class="item__img" src="${product.img}" alt="">
        </div>
    </div>

    <div class="item-infor">
        <h1 class="item__title">${product.name}</h1>
        <div class="item__price-status">
            <span class="item__price">${product.sale}đ</span>
            <span class="item__status">Còn hàng</span>
        </div>

        <div class="item-infor__description">
        Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. 
        </div>

        <div class="item__variation">
                <div class="item__change-input">
                    <button class="decrement" id="decrement" onclick="stepper(this)">-</button>
                    <input class ="my-input inputQuantity" data-id="${product.id}" type="number" min="1"  max="9999" step="1" value="1" id="my-input"  inputmode="numeric" />
                    <button class="increment" id="increment" onclick="stepper(this)">+</button>
                </div>
            <button id="buy-it-now" data-id="${product.id}" class="add-to-cart-btn addToCart">Mua hàng</button>
        </div>

        <div class="item__meta">
            <span class="sku__wrapper"
                >Product-id: 
                <span class="sku__value">${product.id}</span>
            </span>
            <span class="item__meta-Category">
                Category:
                <a href="#" title>${product.category}</a>
            </span>
            <span class="item__meta-tags"
                >Tags:
                <a href="#" title>${product.category}</a>
            </span>
        </div>

        <div class="icon-bar">
            <i class="fab fa-facebook icon-facebook"></i>
            <i class="fab fa-twitter icon-twitter"></i>
            <i class="fas fa-envelope icon-envelope"></i>
            <i class="fab fa-facebook-messenger icon-messenger"></i>
        </div>
    </div>
    </div>
    `
    console.log(product.img);
    $('.detail-content .nav__item--disable').innerText = `${product.name}`;
    $('.detail-item').innerHTML = html;
    AddToCart();
}   

let idProduct = window.location.href.split('?')[1]; 

renderProductForDetail(idProduct);
// function Detail(product)

// click + - lên số ở phần detail:
function stepper(btn) {
    const myInput = $('.my-input');
    let Class = btn.getAttribute('class');
    let min = myInput.min;
    let max = myInput.max;
    let value = myInput.value;
    let step = myInput.step;
    let calcStep = Class == 'increment' ? step * 1 : step * -1;
    let newValue = parseInt(value) + calcStep;
    if (newValue >= min && newValue <= max) {
        myInput.value = newValue;
    }
}
