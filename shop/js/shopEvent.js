
function renderCategoryProduct() {
    let categories = CategoryModel.getAll();
    
    categories.forEach((category) => {
        $('.shop-category__list').insertAdjacentHTML('beforeend', `
            <li class="shop-category" data-id = ${category.id}>
                ${category.name.charAt(0).toUpperCase() + category.name.toLowerCase().slice(1)}
            </li>
        `)
    })
}

renderCategoryProduct(); 

/* <a href="/detail/detail.html?${product.id}"> */
let productFilter = ProductModel.getAll();

const renderProduct = function (page = 1) {
    let productList = ProductModel.getDocumentsByPage(page, productFilter);
   // console.log(productList)
    console.log(productFilter)
   let htmls = productList.map(function (product) {
        return `
            <div class="product-post" data-id = ${product.id}>
            <div class="product-post__imgBx">
                <a class="detail__link" href="/detail/detail.html?${product.id}">
                    <img src="${product.img}" alt="PIZZA">
                </a>
                <div class="detail__button">
                    <a class="detail__button-link" href="/detail/detail.html?${product.id}">Chi tiết</a>
                </div>
            </div>

            <div class="product-post__data">
                <div class="product-post-item__name">
                    <h3 class="product-post__name">${product.name}</h3>
                </div>
                <div class="product-post-item__price">
                    <p class="product-post__price">${product.sale}đ</p>
                </div>

                <div class="product-post-item__addCart-btn"> 
                    <button class="product__addCart-btn addToCart" data-id = ${product.id}>
                        <div class="product__addCart-title">
                            <i class="fas fa-cart-plus"></i>
                            <p class="addCart-text">Thêm vào giỏ</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        `
    })

    if(productList.length <= 0) {
        $('.product-list').innerHTML = `
        <div class = "search-empty">
            <i class="far fa-sad-tear"></i>
            <h4 class="search-empty-text">KHÔNG TÌM THẤY SẢN PHẨM</h4>
        </div>
        `
    } else $('.product-list').innerHTML = htmls.join('');
    AddToCart();
}

renderProduct();

const renderPage = function() {
    let totalPage = ProductModel.getTotalPage(productFilter);

    let pageNumber = `
        <li class="pagination__prev">
        <i class="fas fa-chevron-left"></i>
        </li>
        `
    for(let i = 1; i <= totalPage; i++) {
        pageNumber += 
        ` 
        <li class="pagination__number ${i==1 && 'pagination__number--active'}"> 
            ${i} 
        </li> 
        ` 
    } 

    pageNumber += 
    `
        <li class="pagination__next">
            <i class="fas fa-chevron-right"></i>
        </li>
    `

    if(totalPage <= 1) pageNumber = '';
    $('.pagination-element').innerHTML = pageNumber;
    switchPage();
    prevBtnClick();
    nextBtnClick();
}

renderPage();



let pageNumberCurrent = 0;

function prevBtnClick() {
    let paginationPrev = $('.pagination__prev');
    if(paginationPrev == null) return;
    paginationPrev.onclick = function() {
        const pageNumber = $$('.pagination__number');
        // if(pageNumberCurrent > 0) {
            pageNumberCurrent = (pageNumberCurrent-1 + pageNumber.length) % pageNumber.length;
            pageNumber[pageNumberCurrent].click();
        // }
        
    }
}

function nextBtnClick() {
    let paginationNext = $('.pagination__next');
    if(paginationNext == null) return;
    paginationNext.onclick = function() {
        const pageNumber = $$('.pagination__number');
        //pageNumberCurrent++;
        // if(pageNumberCurrent < pageNumber.length) {
            pageNumberCurrent = (pageNumberCurrent+1) % pageNumber.length;
            pageNumber[pageNumberCurrent].click();
    
    
        // }
        
    }
}

function switchPage() {
    const pageNumber = $$('.pagination__number');

    pageNumber.forEach((item,index) => {
        item.onclick = function() {
            pageNumberCurrent = index;
            renderProduct(index + 1);
            AddToCart();
            // được gọi ở zmain / render.js / renderApp
            $('.pagination__number.pagination__number--active').classList.remove('pagination__number--active');
            console.log(item);
            item.classList.add('pagination__number--active');
        }
    });

}



const filterAdvanced = function(categoryName = 'TẤT CẢ SẢN PHẨM') {
    //Lọc sản phẩm theo loại
    if(categoryName == 'TẤT CẢ SẢN PHẨM') {  
        productFilter = ProductModel.getAll(); 
    }
    else {
        productFilter = ProductModel.getAll().filter(function(product) {
            return product.category == categoryName;
        })
    }

    //Lọc sản phẩm theo tên
    let searchInput = $('.search-input').value;
    productFilter = productFilter.filter(function(product) {
        return product.name.toUpperCase().includes(searchInput.toUpperCase());
    })
    

    //Lọc sản phẩm theo giá
    let priceFrom = $$('.number-input')[0].value || 0;
    let priceTo = $$('.number-input')[1].value || 9999999;
    productFilter = productFilter.filter(function(product) {
        return product.sale >= priceFrom && product.sale <= priceTo;
    })
    
    renderProduct();
    AddToCart();
    renderPage();
}

function shopCategoryClick() {

    let shopCategories = $$('.shop-category');
    
    shopCategories.forEach(function(category) {
        category.onclick = function() {
            $('.shop-category.shop-category--active').classList.remove('shop-category--active');
            this.classList.add('shop-category--active');
            filterAdvanced(category.innerText.toUpperCase());
            pageNumberCurrent = 0;
        }
    })
}

shopCategoryClick();


const filterBtn = $('.filter-btn');

filterBtn.onclick = function() {
    if($('.shop-category.shop-category--active'))  {
        $('.shop-category.shop-category--active').click();
        filterAdvanced($('.shop-category.shop-category--active').innerText.toUpperCase()); 
    } else filterAdvanced();
}

// Hàm này để khi click vào loại sản phẩm nào bên home thì bên product 
// sẽ hiện sản phẩm loại đó 
function categoryClickFromHome () {
    let categoryID = window.location.href.split('?')[1];
    let shopCategoryList = $$('.shop-category');
    let id;
    shopCategoryList.forEach(category => {
        id = category.dataset.id;
        if(id == Number(categoryID)) {
            category.click();
        }
    })
}

categoryClickFromHome (); 






