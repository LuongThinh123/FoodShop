var slideIndex = 1;

function clickSlideBtn(n) {
    showSlide((slideIndex += n));
}

function showSlide(n) {
    var slides = $$('.slider'); //lấy hết slider 
    $('.slider.slider--active').classList.remove('slider--active');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides[slideIndex - 1].classList.add('slider--active');
}


function renderCategoryForHome() {
    let categories = CategoryModel.getAll();

    let htmls = categories.map(function(category) {
        return `
        <div class="category__product-post">
            <div class="category-post__imgBx">
                    <a class="category-link" href="/shop/shop.html?${category.id}">
                        <div class="category-post__overlay"></div>
                        <img src="${category.img}" alt="PIZZA">
                    </a>
                    <div class="category-button">
                        <a class="category-button-link" href="/shop/shop.html?${category.id}">Xem sản phẩm</a>
                    </div>
            </div>

            <div class="category-post__data">
                <a href="/shop/shop.html?${category.id}">
                    <h3 class="category-post__name">${category.name}</h3>
                </a>
                <p class="category-post__description">${category.description}</p>
            </div>
        </div>
        `
    })

    if($('.category__product') == null) return;
    $('.category__product').innerHTML = htmls.join('');
}

renderCategoryForHome();